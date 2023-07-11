# coding=utf-8
import math
import time

import cv2
import depthai as dai
import numpy as np

from config_ import DEPTH_THRESH_LOW, DEPTH_THRESH_HIGH, num_columns
from utils.pipeline_provider import get_prepared_pipeline

from utils.curve import draw_curve


# 希望识别的物体
OBSTACLE_OBJECTS = ["person", "chair", "table", "bottle", "background"]

# MobilenetSSD标签文本
labelMap = ["background", "aeroplane", "bicycle", "bird", "boat", "bottle", "bus", "car", "cat", "chair", "cow",
            "diningtable", "dog", "horse", "motorbike", "person", "pottedplant", "sheep", "sofa", "train", "tvmonitor"]

frame = None


def crop_to_rect(frame):
    height = frame.shape[0]
    width = frame.shape[1]
    delta = int((width - height) / 2)
    return frame[0:height, delta:width - delta]


def annotate_fun(img, color, fontFace=cv2.FONT_HERSHEY_TRIPLEX, fontScale=0.5, **kwargs):
    def fun(text, pos):
        cv2.putText(img, text, pos, fontFace, fontScale, color, **kwargs)

    return fun


# 实现人机安全功能
def draw_detections(frame, detections):
    color = (0, 0, 0)
    annotate = annotate_fun(frame, (0, 0, 25))

    for detection in detections:
        if labelMap[detection.label] not in OBSTACLE_OBJECTS:
            continue
        height = frame.shape[0]
        width = frame.shape[1]
        # Denormalize bounding box
        x1 = int(detection.xmin * width)
        x2 = int(detection.xmax * width)
        y1 = int(detection.ymin * height)
        y2 = int(detection.ymax * height)

        offsetX = x1 + 10
        annotate("{:.2f}".format(detection.confidence * 100), (offsetX, y1 + 35))  # 目标物体置信度
        annotate(f"width:{x2 - x1}", (offsetX, y1 + 50))
        annotate(f"height:{y2 - y1}", (offsetX, y1 + 65))
        annotate(f"X: {int(detection.spatialCoordinates.x)} mm", (offsetX, y1 + 80))
        annotate(f"Y: {int(detection.spatialCoordinates.y)} mm", (offsetX, y1 + 95))
        annotate(f"Z: {int(detection.spatialCoordinates.z)} mm", (offsetX, y1 + 110))
        cv2.rectangle(frame, (x1, y1), (x2, y2), color, cv2.FONT_HERSHEY_SIMPLEX)
        # noinspection PyBroadException
        try:
            label = labelMap[detection.label]
        except:
            label = detection.label
        annotate(str(label), (offsetX, y1 + 20))


class HumanMachineSafety:
    def __init__(self):
        print("Loading pipeline...")
        self.distance = 1000

        # Required information for calculating spatial coordinates on the host
        self.monoHFOV = np.deg2rad(73.5)
        self.depthWidth = 1080.0

    # 将计算坐标的逻辑更改为根据传入的深度图和目标物体的像素坐标，计算相机和障碍物之间的距离。
    # 通过使用目标物体的像素坐标，从深度图中获取对应的深度值，并根据相机的参数计算出相对于相机的空间坐标。
    def calc_spatials(self, depth, x, y):
        z = depth[y, x]
        angle_x = self.calc_angle(x - self.depthWidth / 2)
        x = z * math.tan(angle_x)
        # y = -z  # 相机和障碍物在同一高度，y轴坐标为0
        # print(f"x:{x},y:{y},z:{z}")
        return x, y, z

    def calc_distance(self, detection, depth, averaging_method=np.mean):
        xmin = int(detection.xmin)
        ymin = int(detection.ymin)
        xmax = int(detection.xmax)
        ymax = int(detection.ymax)
        # Decrese the ROI to 1/3 of the original ROI
        deltaX = int((xmax - xmin) * 0.33)
        deltaY = int((ymax - ymin) * 0.33)
        xmin += deltaX
        ymin += deltaY
        xmax -= deltaX
        ymax -= deltaY
        if xmin > xmax:  # bbox flipped
            xmin, xmax = xmax, xmin
        if ymin > ymax:  # bbox flipped
            ymin, ymax = ymax, ymin

        if xmin == xmax or ymin == ymax:  # Box of size zero
            return None

        # Calculate the average depth in the ROI.
        depthROI = depth[ymin:ymax, xmin:xmax]
        inThreshRange = (DEPTH_THRESH_LOW < depthROI) & (depthROI < DEPTH_THRESH_HIGH)

        averageDepth = averaging_method(depthROI[inThreshRange])

        # Palm detection centroid
        centroidX = int((xmax - xmin) / 2) + xmin
        centroidY = int((ymax - ymin) / 2) + ymin

        mid = int(depth.shape[0] / 2)  # middle of the depth img
        bb_x_pos = centroidX - mid
        bb_y_pos = centroidY - mid

        angle_x = self.calc_angle(bb_x_pos)
        angle_y = self.calc_angle(bb_y_pos)

        z = averageDepth
        x = z * math.tan(angle_x)
        y = -z * math.tan(angle_y)

        print(f"x:{x},y:{y},z:{z}")

        return x, y, z

    # 在图像上绘制边界框
    def draw_bbox(self, bbox, color):
        def draw(img):
            cv2.rectangle(
                img=img,
                pt1=(bbox[0], bbox[1]),
                pt2=(bbox[2], bbox[3]),
                color=color,
                thickness=2,
            )

        draw(self.debug_frame)
        draw(self.depthFrameColor)

    # 计算角度
    def calc_angle(self, offset):
        return math.atan(math.tan(self.monoHFOV / 2.0) * offset / (self.depthWidth / 2.0))

    # 检测和目标检测结果，并进行计算和绘制
    def parse(self, palm_coords, detections, frame, depth, depthColored):
        self.debug_frame = frame.copy()
        self.depthFrameColor = depthColored
        annotate = annotate_fun(self.debug_frame, (50, 220, 110), fontScale=1.4)

        # column_width = frame.shape[:2] // 10
        # for i in range(1, 10):
        #     x = i * column_width
        #     cv2.line(frame, (x, 0), (x, frame.shape[:2]), (50, 220, 100), 4)

        # Calculate and draw spatial coordinates of the obstacles
        for detection in detections:
            if labelMap[detection.label] not in OBSTACLE_OBJECTS:
                continue
            height = frame.shape[0]
            width = frame.shape[1]
            # Denormalize bounding box
            """
            `depthai.SpatialImgDetection`是DepthAI库中的一个对象，用于表示空间图像目标检测的结果。它包含了在空间图像中检测到的目标物体的相关信息。

            SpatialImgDetection对象具有以下属性：
            
            - `label`：目标物体的类别标签索引。
            - `confidence`：目标物体的置信度，表示模型对目标的预测准确程度。
            - `xmin`、`ymin`、`xmax`、`ymax`：目标物体在原始图像中的边界框坐标。这些坐标值是相对于图像尺寸的归一化值，范围从0到1，需要根据图像尺寸进行转换才能得到具体的像素坐标。
            - `spatialCoordinates`：目标物体的空间坐标信息，包含`x`、`y`、`z`三个坐标值，表示目标物体在相机坐标系下的位置。这些坐标值以毫米（mm）为单位。
            
            通过使用`depthai.SpatialImgDetection`对象，您可以访问目标检测的结果，包括类别标签、置信度、边界框坐标和空间坐标，以便进行后续的处理和应用，如可视化、距离计算、姿态估计等。
            
            在`depthai.SpatialCoordinates`中，相机坐标系的XYZ轴分别代表以下方向：

            - X轴：相机的水平方向，与图像的宽度方向平行，正方向为从相机的左侧向右侧延伸。
            - Y轴：相机的垂直方向，与图像的高度方向平行，正方向为从相机的底部向顶部延伸。
            - Z轴：相机的光轴方向，与相机的视线方向平行，正方向为从相机向前延伸（远离相机）。
            
            这样，通过在`depthai.SpatialCoordinates`对象中指定的X、Y、Z坐标，可以描述目标物体在相机坐标系下的位置。
            
            """
            x1 = int(detection.xmin * width)
            x2 = int(detection.xmax * width)
            y1 = int(detection.ymin * height)
            y2 = int(detection.ymax * height)
            objectCenterX = int((x1 + x2) / 2)
            objectCenterY = int((y1 + y2) / 2)

            cv2.line(frame, (width // 2, height), (objectCenterX, objectCenterY), (50, 220, 100), 4)

            x, y, z = self.calc_spatials(depth, objectCenterX, objectCenterY)
            spatialCoords = (x, y, z)
            self.calc_distance(detection, depth, self.debug_frame)
            detection.spatialCoordinates.x = x
            detection.spatialCoordinates.y = y
            detection.spatialCoordinates.z = z

        # Draw obstacle detections
        draw_detections(self.debug_frame, detections)

        cv2.imshow("color", self.debug_frame)

        if self.depthFrameColor is not None:
            draw_detections(self.depthFrameColor, detections)
            cv2.imshow("depth", self.depthFrameColor)

        if cv2.waitKey(1) == ord("q"):
            cv2.destroyAllWindows()
            raise StopIteration()


# 障碍物避开算法
def obstacle_avoidance(depth_frame):
    height, width = depth_frame.shape[:2]
    column_width = width // num_columns

    column_depth_means = []
    x = []

    for i in range(num_columns):
        start_col = i * column_width
        end_col = (i + 1) * column_width

        column_depth = depth_frame[0:height // 2, start_col:end_col]
        column_depth_mean = np.mean(column_depth)
        x.append(i)
        column_depth_means.append(column_depth_mean)

    draw_curve(x, column_depth_means)

    for i in range(num_columns):
        print(f"direction{i}:{int(column_depth_means[i])}", end=" ")
    print()

    return column_depth_means



def start():
    with dai.Device() as device:
        cams = device.getConnectedCameras()
        depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
        if not depth_enabled:
            raise RuntimeError(
                "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(
                    cams))
        device.startPipeline(get_prepared_pipeline())  # 启动流水线
        # 创建输出队列
        vidQ = device.getOutputQueue(name="cam", maxSize=4, blocking=False)
        detQ = device.getOutputQueue(name="det", maxSize=4, blocking=False)
        depthQ = device.getOutputQueue(name="depth", maxSize=4, blocking=False)
        palmQ = device.getOutputQueue(name="palm_nn", maxSize=4, blocking=False)

        humanMachineSafety = HumanMachineSafety()

        detections = []
        depthFrame = None
        depthFrameColor = None

        while True:
            try:
                in_rgb = vidQ.tryGet()
                if in_rgb is not None:
                    frame = crop_to_rect(in_rgb.getCvFrame())

                # Check for mobilenet detections
                in_det = detQ.tryGet()
                if in_det is not None:
                    detections = in_det.detections

                in_depth = depthQ.tryGet()
                if in_depth is not None:
                    depthFrame = crop_to_rect(in_depth.getFrame())
                    depthFrameColor = cv2.normalize(depthFrame, None, 255, 0, cv2.NORM_INF, cv2.CV_8UC1)
                    depthFrameColor = cv2.equalizeHist(depthFrameColor)
                    depthFrameColor = cv2.applyColorMap(depthFrameColor, cv2.COLORMAP_JET)

                palm_in = palmQ.tryGet()

                if palm_in is not None and frame is not None and depthFrame is not None:
                    try:
                        obstacle_avoidance(depthFrame)
                        humanMachineSafety.parse(
                            palm_in,
                            detections,
                            frame,
                            depthFrame,
                            depthFrameColor)

                    except StopIteration:
                        break
            except:
                pass

            time.sleep(0.5)


start()
