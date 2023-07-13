import argparse


import cv2
import depthai as dai
from flask import Flask, render_template, Response

# from flask_test import detect_motion
from utils.pipeline_provider import get_prepared_pipeline_with_palm_detection

frame = None
app = Flask(__name__)

pipeline = get_prepared_pipeline_with_palm_detection()


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


detections = None
device = dai.Device()
device.startPipeline(pipeline)  # 启动流水线
vidQ = device.getOutputQueue(name="cam", maxSize=4, blocking=False)


# 定义生成视频流的函数
def generate():
    global frame, vidQ
    print("begin generate")
    while True:
        print("first while")
        cams = device.getConnectedCameras()
        depth_enabled = dai.CameraBoardSocket.LEFT in cams and dai.CameraBoardSocket.RIGHT in cams
        if not depth_enabled:
            raise RuntimeError(
                "Unable to run this experiment on device without depth capabilities! (Available cameras: {})".format(
                    cams))

        # 创建输出队列

        while True:
            print("second", end=" ")
            try:
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
                    print("new frame coming")
                    (flag, encodedImage) = cv2.imencode(".jpg", frame)
                    # ensure the frame was successfully encoded
                    if not flag:
                        continue

                    # 将字节流作为生成器的输出
                    yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
                           bytearray(encodedImage) + b'\r\n')
                else:
                    print("in_rgb is None, returning unchanged frame")
                    (flag, encodedImage) = cv2.imencode(".jpg", frame)
                    yield (b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
                           bytearray(encodedImage) + b'\r\n')
            except Exception as e:
                print(e)
                pass

            # time.sleep(0.5)


# Define the video feed route
@app.route('/video_feed')
def video_feed():
    # return the response generated along with the specific media
    # type (mime type)
    print("video feed")
    return Response(generate(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


def start():
    global frame, vidQ
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

    app.run(host=args["ip"], port=args["port"], debug=True,
            threaded=True, use_reloader=False)


if __name__ == '__main__':
    start()
