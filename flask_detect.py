import math

import depthai as dai
import numpy as np

from config_ import num_columns, DEPTH_THRESH_LOW, DEPTH_THRESH_HIGH, labelMap, OBSTACLE_OBJECTS
from utils.curve import draw_curve
from refer.flask_test import detect_motion
from utils.pipeline_provider import get_prepared_pipeline_with_palm_detection
from flask import Flask, render_template, Response
import threading
import argparse
import cv2

# initialize the output frame and a lock used to ensure thread-safe
# exchanges of the output frames (useful when multiple browsers/tabs are viewing the stream)
frame = None
lock = threading.Lock()
app = Flask(__name__)

pipeline = get_prepared_pipeline_with_palm_detection()

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--ip", type=str, default="127.0.0.1",
                help="ip address of the device")
ap.add_argument("-o", "--port", type=int,
                default=8000,
                help="ephemeral port number of the server (1024 to 65535)")
ap.add_argument("-f", "--frame-count", type=int, default=32,
                help="# of frames used to construct the background model")
# args = vars(ap.parse_args())


# Define the home page route
# 默认界面，返回index.html
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/about')
def about():
    return render_template('about-us.html')


@app.route('/contact')
def contact():
    return render_template('blog.html')

def crop_to_rect():
    global frame
    height = frame.shape[0]
    width = frame.shape[1]
    delta = int((width - height) / 2)
    return frame[0:height, delta:width - delta]


def annotate_fun(img, color, fontFace=cv2.FONT_HERSHEY_TRIPLEX, fontScale=0.5, **kwargs):
    def fun(text, pos):
        cv2.putText(img, text, pos, fontFace, fontScale, color, **kwargs)

    return fun


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
    # for i in range(num_columns):
    #     print(f"direction{i}:{int(column_depth_means[i])}", end=" ")
    # print()

    return column_depth_means


# 实现人机安全功能
def draw_detections(detections_):
    global frame
    color = (0, 0, 0)
    annotate = annotate_fun(frame, (0, 0, 25))

    for detection in detections_:
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
    def parse(self, detections, depth, depthColored):
        print("here!")
        global frame
        self.debug_frame = frame.copy()
        self.depthFrameColor = depthColored
        annotate = annotate_fun(self.debug_frame, (50, 220, 110), fontScale=1.4)

        for detection in detections:
            if labelMap[detection.label] not in OBSTACLE_OBJECTS:
                continue
            height = frame.shape[0]
            width = frame.shape[1]

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


vidQ = None
depthQ = None
humanMachineSafety = None
detections = None


# 定义生成视频流的函数
def generate():
    global frame, lock, vidQ, humanMachineSafety
    with dai.Device() as device:
        print("set deivce")
        cams = device.getConnectedCameras()
        depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
        if not depth_enabled:
            raise RuntimeError(
                "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(
                    cams))
        device.startPipeline(pipeline)  # 启动流水线
        # 创建输出队列
        vidQ = device.getOutputQueue(name="cam", maxSize=4, blocking=False)
        depthQ = device.getOutputQueue(name="depth", maxSize=4, blocking=False)

        humanMachineSafety = HumanMachineSafety()
        detections = []
        depthFrame = None
        depthFrameColor = None

        while True:
            try:
                with lock:
                    # check if the output frame is available, otherwise skip
                    # the iteration of the loop
                    in_rgb = vidQ.tryGet()
                    if in_rgb is not None:
                        height = in_rgb.getCvFrame().shape[0]
                        width = in_rgb.getCvFrame().shape[1]
                        delta = int((width - height) / 2)
                        frame = in_rgb.getCvFrame()[0:height, delta:width - delta]

                        if frame is None:
                            continue
                        # 将帧转换为字节流
                        (flag, encodedImage) = cv2.imencode(".jpg", frame)
                        # ensure the frame was successfully encoded
                        if not flag:
                            continue

                    # 将字节流作为生成器的输出
                    yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
                           bytearray(encodedImage) + b'\r\n')

                in_depth = depthQ.tryGet()
                if in_depth is not None:
                    depthFrame = crop_to_rect(in_depth.getFrame())
                    depthFrameColor = cv2.normalize(depthFrame, None, 255, 0, cv2.NORM_INF, cv2.CV_8UC1)
                    depthFrameColor = cv2.equalizeHist(depthFrameColor)
                    depthFrameColor = cv2.applyColorMap(depthFrameColor, cv2.COLORMAP_JET)

                if frame is not None and depthFrame is not None:
                    try:
                        obstacle_avoidance(depthFrame)
                        # def parse(self, detections, depth, depthColored):
                        humanMachineSafety.parse(
                            detections,
                            depthFrame,
                            depthFrameColor)

                    except StopIteration:
                        break
            except:
                pass

            # time.sleep(0.5)


# Define the video feed route
@app.route('/video_feed')
def video_feed():
    # return the response generated along with the specific media
    # type (mime type)
    return Response(generate(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


def start():
    global frame, lock, vidQ, humanMachineSafety
    # construct the argument parser and parse command line arguments
    ap = argparse.ArgumentParser()
    ap.add_argument("-i", "--ip", type=str, default="127.0.0.1",
                    help="ip address of the device")
    ap.add_argument("-o", "--port", type=int,
                    default=8000,
                    help="ephemeral port number of the server (1024 to 65535)")
    ap.add_argument("-f", "--frame-count", type=int, default=32,
                    help="# of frames used to construct the background model")
    args = vars(ap.parse_args())
    # start a thread that will perform motion detection

    t = threading.Thread(target=detect_motion, args=(
        args["frame_count"],))
    t.daemon = True
    t.start()

    app.run(host=args["ip"], port=args["port"], debug=True,
            threaded=True, use_reloader=False)


if __name__ == '__main__':
    start()
