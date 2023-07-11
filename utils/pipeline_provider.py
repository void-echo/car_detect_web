import blobconverter
import depthai as dai

from config_ import DEPTH_THRESH_HIGH, DEPTH_THRESH_LOW

pipeline_palm_prepared = False
global_pipeline_palm = None
pipeline_simple_prepared = False
global_pipeline_simple = None

# disable typo check for this function
# noinspection PyTypeChecker,SpellCheckingInspection
def get_prepared_pipeline_with_palm_detection():
    global pipeline_palm_prepared, global_pipeline_palm
    if pipeline_palm_prepared:
        return global_pipeline_palm
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
    global_pipeline_palm = pipeline
    pipeline_palm_prepared = True
    return pipeline


def get_simple_pipeline():
    global pipeline_simple_prepared, global_pipeline_simple
    if pipeline_simple_prepared:
        return global_pipeline_simple
    print("Creating simple pipeline for depth detection...")
    pipeline = dai.Pipeline()
    cam = pipeline.create(dai.node.ColorCamera)
    cam.setResolution(dai.ColorCameraProperties.SensorResolution.THE_1080_P)
    cam.setIspScale(2, 3)  # To match 720P mono cameras
    cam.setBoardSocket(dai.CameraBoardSocket.RGB)
    cam.initialControl.setManualFocus(130)
    cam.setColorOrder(dai.ColorCameraProperties.ColorOrder.BGR)
    cam.setPreviewSize(300, 300)
    cam.setInterleaved(False)
    isp_xout = pipeline.create(dai.node.XLinkOut)
    isp_xout.setStreamName("cam")
    cam.isp.link(isp_xout.input)
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