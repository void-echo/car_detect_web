# coding=utf-8
import math
import time

import blobconverter
import cv2
import depthai as dai
import numpy as np
import blobconverter

from utils.curve import *
from utils.curve import *
import serial.tools.list_ports

DEPTH_THRESH_HIGH = 3000
DEPTH_THRESH_LOW = 500
WARNING_DIST = 300
import random


# CONNECT_CAR = False
def check_com_port(port):
    ports = list(serial.tools.list_ports.comports())
    # print("ports", ports)
    for p in ports:
        if p.device == port:
            return True
    return False


# 这里改成你自己的端口---------------------------
com_port = 'COM6'
# --------------------------------------------
CONNECT_CAR = check_com_port(com_port)

if CONNECT_CAR:
    from utils.SerialController import *

num_columns = 10

# 希望识别的物体
OBSTACLE_OBJECTS = ["person", "chair", "table", "bottle", "background", "sofa", "tvmonitor"]

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

    def draw_detections(self, frame, detections):
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
            except:
                label = detection.label
            annotate(str(label), (offsetX, y1 + 20))

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
        self.draw_detections(self.debug_frame, detections)

        cv2.imshow("color", self.debug_frame)

        if self.depthFrameColor is not None:
            self.draw_detections(self.depthFrameColor, detections)
            cv2.imshow("depth", self.depthFrameColor)

        if cv2.waitKey(1) == ord("q"):
            cv2.destroyAllWindows()
            raise StopIteration()


# 障碍物避开算法
# def obstacle_avoidance(depth_frame):
#     height, width = depth_frame.shape[:2]
#     column_width = width // num_columns
#
#     column_depth_means = []
#     x = []
#
#     for i in range(0, num_columns):
#         start_col = i * column_width
#         end_col = (i + 1) * column_width
#
#         column_depth = depth_frame[0:height // 4, start_col:end_col]
#         column_depth_mean = np.mean(column_depth)
#         x.append(i)
#         column_depth_means.append(column_depth_mean)
#
#     x_fit, y_fit = draw_curve(x, column_depth_means)

# for i in range(num_columns):
#     print(f"direction{i}:{int(column_depth_means[i])}",end=" ")
# print()

# direction_choose(y_fit)
# return x_fit, y_fit
num_rows = 10


def obstacle_avoidance(depth_frame):
    height, width = depth_frame.shape[:2]
    row_height = height // num_rows
    column_width = width // num_columns

    column_depth_means = []
    depth_means = []
    x = []

    for row in range(num_rows):
        start_row = row * row_height
        end_row = (row + 1) * row_height
        depth_means = []

        for col in range(num_columns):
            start_col = col * column_width
            end_col = (col + 1) * column_width

            grid_depth = depth_frame[start_row:end_row, start_col:end_col]
            grid_depth_mean = np.mean(grid_depth)

            depth_means.append(int(grid_depth_mean))
        # print(f"row:{row}: ", depth_means)

    for i in range(0, num_columns):
        start_col = i * column_width
        end_col = (i + 1) * column_width

        column_depth = depth_frame[0:height // 4, start_col:end_col]
        column_depth_mean = np.mean(column_depth)
        x.append(i)
        column_depth_means.append(column_depth_mean)

    x_fit, y_fit = draw_curve(x, column_depth_means)

    # for i in range(num_columns):
    #     print(f"direction{i}:{int(column_depth_means[i])}",end=" ")
    # print()

    direction_choose(y_fit)
    return x_fit, y_fit


# 方向选择算法
# def direction_choose(y_fit):
#     left = 0
#     for i in range(len(y_fit) // 2-1):
#         left += y_fit[i]
#
#     right = 0
#     for i in range(len(y_fit) // 2+1, len(y_fit)):
#         right += y_fit[i]
#
#     center = 0
#     for i in range(len(y_fit)*2 // 5, len(y_fit) * 3 // 5):
#         center += y_fit[i]
#     print(f"center:{center}")
#
#     if center > 41000:
#         forward(50, 0.4)
#     else:
#         if left > right:
#             turn_second(20, 0.4)
#         else:
#             turn_second(-20, 0.4)

# print(f"left:{left}")
# print(f"right:{right}")

# 方向选择算法2.0--------------------------------------------------------------------------------------------------------
# 划分为5个区域
# 调整距离权重
# def calculate_weight(distance, weight_factor):
#     weight = math.exp(-distance * weight_factor)
#     return weight


# 分段距离计算
# def direction_choose(y_fit):
#     distance_sums = []
#     num_segments = 5  # 将场景划分为5个区域
#
#     segment_size = len(y_fit) // num_segments
#     for i in range(num_segments):
#         segment_points = y_fit[i * segment_size: (i + 1) * segment_size]
#         # num = 2 if i == 2 else 1
#         # num = 1:两边，num = 2:中间
#         segment_distance_sum = sum(y_fit[point_i] for point_i in segment_points)
#         distance_sums.append(segment_distance_sum)
#
#     # 动态调整阈值
#     forward_threshold = 10000
#     turn_threshold = 5000
#
#     if distance_sums[2] > forward_threshold:
#         forward(50, 0.4)
#     else:
#         if distance_sums[0] > turn_threshold and distance_sums[0] > distance_sums[4]:
#             turn_second(20, 0.4)
#         elif distance_sums[4] > turn_threshold and distance_sums[4] > distance_sums[0]:
#             turn_second(-20, 0.4)
#         else:
#             return turn_angle(180, 30)
#
#
# # def calculate_distance_and_weight(distance, num):
# #     # 调整距离权重的因子,中间的权重因子要大一些
# #     if num == 2:
# #         weight_factor = 0.1
# #     else:
# #         weight_factor = 0.05
# #     weight = calculate_weight(distance, weight_factor)
# #     return distance, weight


# --------------------------------------------------------------------------------------------------------

# 方向选择算法3.0-------------------------------------------------------------------------------------------
# numpy，确定每个方块的阈值是多少，如果有20%方块的阈值小于阈值，就是有障碍物，如果没有，就是没有障碍物
def direction_choose(y_fit):
    y_fit_matrix = np.array(y_fit)
    y_fit_matrix = y_fit_matrix.reshape(1, len(y_fit))
    y_fit_left = y_fit_matrix[:, 0: len(y_fit) // 2]
    y_fit_right = y_fit_matrix[:, len(y_fit) // 2: len(y_fit)]
    y_fit_front = y_fit_matrix[:, len(y_fit) // 3: len(y_fit) * 2 // 3]
    # print("y_fit", y_fit)

    # 阈值（单个值）
    threshold = 2000
    count_left = np.sum(y_fit_left < threshold)
    count_right = np.sum(y_fit_right < threshold)
    count_front = np.sum(y_fit_front < threshold)

    total_left = sum(y_fit_left[0])
    total_right = sum(y_fit_right[0])
    # 前方没有障碍物
    if count_front < len(y_fit) // 15:
        if CONNECT_CAR:
            forward(50, 0.2)
            print("前方没有障碍物")
        else:
            pass
    else:
        # 两边都有障碍物
        if count_left >= len(y_fit) // 10 and count_right >= len(y_fit) // 10:
            if CONNECT_CAR:
                turn_angle(-30, 30)
            else:
                pass
        # 右边没有障碍物
        elif count_right < len(y_fit) // 10 <= count_left:
            if CONNECT_CAR:
                turn_angle(-30, 30)
            else:
                pass
        # 左边没有障碍物
        elif count_left < len(y_fit) // 10 <= count_right:
            if CONNECT_CAR:
                turn_angle(30, 30)
            else:
                pass
        # 两边都没有障碍物
        else:
            if total_left > total_right:
                if CONNECT_CAR:
                    turn_angle(30, 30)
                else:
                    pass
            else:
                if CONNECT_CAR:
                    turn_angle(-30, 30)
                else:
                    pass


# --------------------------------------------------------------------------------------------------------

print("Creating pipeline...")
pipeline = dai.Pipeline()
# 创建了一个Pipeline对象，并添加了相机、神经网络和其他节点

cam = pipeline.create(dai.node.ColorCamera)
cam.setResolution(dai.ColorCameraProperties.SensorResolution.THE_1080_P)
cam.setIspScale(2, 3)  # To match 720P mono cameras
cam.setBoardSocket(dai.CameraBoardSocket.RGB)
cam.initialControl.setManualFocus(130)
# For MobileNet NN
cam.setColorOrder(dai.ColorCameraProperties.ColorOrder.BGR)
cam.setPreviewSize(300, 300)
cam.setInterleaved(False)

isp_xout = pipeline.create(dai.node.XLinkOut)
isp_xout.setStreamName("cam")
cam.isp.link(isp_xout.input)

print(f"Creating palm detection Neural Network...")
model_nn = pipeline.create(dai.node.NeuralNetwork)
model_nn.setBlobPath(blobconverter.from_zoo(name="palm_detection_128x128", zoo_type="depthai", shaves=6))
model_nn.input.setBlocking(False)

# For Palm-detection NN
manip = pipeline.create(dai.node.ImageManip)
manip.initialConfig.setResize(128, 128)
cam.preview.link(manip.inputImage)
manip.out.link(model_nn.input)

model_nn_xout = pipeline.create(dai.node.XLinkOut)
model_nn_xout.setStreamName("palm_nn")
model_nn.out.link(model_nn_xout.input)

# Creating left/right mono cameras for StereoDepth
left = pipeline.create(dai.node.MonoCamera)
left.setResolution(dai.MonoCameraProperties.SensorResolution.THE_720_P)
left.setBoardSocket(dai.CameraBoardSocket.LEFT)

right = pipeline.create(dai.node.MonoCamera)
right.setResolution(dai.MonoCameraProperties.SensorResolution.THE_720_P)
right.setBoardSocket(dai.CameraBoardSocket.RIGHT)

# Create StereoDepth node that will produce the depth map
stereo = pipeline.create(dai.node.StereoDepth)
stereo.initialConfig.setConfidenceThreshold(245)
stereo.initialConfig.setMedianFilter(dai.StereoDepthProperties.MedianFilter.KERNEL_7x7)
stereo.setLeftRightCheck(True)
stereo.setDepthAlign(dai.CameraBoardSocket.RGB)
left.out.link(stereo.left)
right.out.link(stereo.right)

sdn = pipeline.create(dai.node.MobileNetSpatialDetectionNetwork)
sdn.setBlobPath(blobconverter.from_zoo(name="mobilenet-ssd", shaves=6))
sdn.setConfidenceThreshold(0.5)
sdn.input.setBlocking(False)
sdn.setBoundingBoxScaleFactor(0.2)
sdn.setDepthLowerThreshold(DEPTH_THRESH_LOW)
sdn.setDepthUpperThreshold(DEPTH_THRESH_HIGH)

cam.preview.link(sdn.input)
stereo.depth.link(sdn.inputDepth)

sdn_out = pipeline.create(dai.node.XLinkOut)
sdn_out.setStreamName("det")
sdn.out.link(sdn_out.input)

depth_out = pipeline.create(dai.node.XLinkOut)
depth_out.setStreamName("depth")
sdn.passthroughDepth.link(depth_out.input)

print("Pipeline created.")

with dai.Device() as device:
    cams = device.getConnectedCameras()
    depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
    if not depth_enabled:
        raise RuntimeError(
            "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(cams))
    device.startPipeline(pipeline)  # 启动流水线
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
        except Exception as e:
            # print(e)
            pass

        time.sleep(0.05)
