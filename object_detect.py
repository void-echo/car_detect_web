# coding=utf-8
import math
import time

import cv2
import depthai as dai
import numpy as np
from numpy import ndarray

from config_ import DEPTH_THRESH_LOW, DEPTH_THRESH_HIGH, num_columns, labelMap, OBSTACLE_OBJECTS
from utils.calc_util import calc_distance
from utils.curve import draw_curve
from utils.pipeline_provider import get_prepared_pipeline_with_palm_detection

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
        try:
            label = labelMap[detection.label]
        except Exception:
            label = detection.label
        annotate(str(label), (offsetX, y1 + 20))





class HumanMachineSafety:
    def __init__(self):
        # Required information for calculating spatial coordinates on the host
        self.monoHFOV = np.deg2rad(73.5)
        self.depthWidth = 1080.0

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
            calc_distance(detection, depth, self.debug_frame)
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
def obstacle_avoidance(depth_frame) -> list[ndarray]:
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
    return column_depth_means


# noinspection PyUnresolvedReferences
def start():
    with dai.Device() as device:
        cams = device.getConnectedCameras()
        depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
        if not depth_enabled:
            raise RuntimeError(
                "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(
                    cams))
        device.startPipeline(get_prepared_pipeline_with_palm_detection())  # 启动流水线
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


if __name__ == '__main__':
    start()
