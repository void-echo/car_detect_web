# coding=utf-8
import math

import blobconverter
import cv2
import depthai as dai
import numpy as np

from config_ import DEPTH_THRESH_LOW, DEPTH_THRESH_HIGH


def crop_to_rect(frame):
    height = frame.shape[0]
    width = frame.shape[1]
    delta = int((width - height) / 2)
    return frame[0:height, delta:width - delta]


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

    def calc_distance(self, depth, x, y, averaging_method=np.mean):
        z = depth[y, x]

        angle_x = self.calc_angle(x - self.depthWidth / 2)
        angle_y = self.calc_angle(y - self.depthWidth / 2)

        x = z * math.tan(angle_x)
        y = -z * math.tan(angle_y)

        return x, y, z

    # 计算角度
    def calc_angle(self, offset):
        return math.atan(math.tan(self.monoHFOV / 2.0) * offset / (self.depthWidth / 2.0))

    # 检测和目标检测结果，并进行计算和绘制
    def parse(self, depth, frame, depthColored):
        self.debug_frame = frame.copy()
        self.depthFrameColor = depthColored

        # Calculate and draw spatial coordinates of the obstacles
        height = frame.shape[0]
        width = frame.shape[1]

        for y in range(height):
            for x in range(width):
                spatialCoords = self.calc_spatials(depth, x, y)
                self.calc_distance(depth, x, y)
                x, y, z = spatialCoords
                # Perform desired operations with spatial coordinates and distance

        cv2.imshow("color", self.debug_frame)

        if self.depthFrameColor is not None:
            cv2.imshow("depth", self.depthFrameColor)

        if cv2.waitKey(1) == ord("q"):
            cv2.destroyAllWindows()
            raise StopIteration()


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

print("Creating palm detection Neural Network...")
model_nn = pipeline.create(dai.node.NeuralNetwork)
model_nn.setBlobPath(blobconverter.from_zoo(name="palm_detection_128x128", zoo_type="depthai",
                                            shaves=6))  # 或者 model_nn.setBlobPath(None)

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
stereo.depth.link(depth_out.input)

print("Pipeline created.")

with dai.Device() as device:
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

    cams = device.getConnectedCameras()
    depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
    if not depth_enabled:
        raise RuntimeError(
            "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(cams))
    device.startPipeline(pipeline)  # 启动流水线
    # 创建输出队列
    vidQ = device.getOutputQueue(name="cam", maxSize=4, blocking=False)
    depthQ = device.getOutputQueue(name="depth", maxSize=4, blocking=False)

    humanMachineSafety = HumanMachineSafety()

    depthFrame = None
    depthFrameColor = None
    frame = None

    while True:
        # try:
        in_rgb = vidQ.tryGet()
        if in_rgb is not None:
            frame = crop_to_rect(in_rgb.getCvFrame())

        in_depth = depthQ.tryGet()
        if in_depth is not None:
            depthFrame = crop_to_rect(in_depth.getFrame())
            depthFrameColor = cv2.normalize(depthFrame, None, 255, 0, cv2.NORM_INF, cv2.CV_8UC1)
            depthFrameColor = cv2.equalizeHist(depthFrameColor)
            depthFrameColor = cv2.applyColorMap(depthFrameColor, cv2.COLORMAP_JET)

        if frame is not None and depthFrame is not None:
            try:
                humanMachineSafety.parse(depthFrame, frame, depthFrameColor)
            except StopIteration:
                break
    # except:
    #     pass
