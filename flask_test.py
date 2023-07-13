# Import necessary libraries
from pyimagesearch.motion_detection.singlemotiondetector import SingleMotionDetector
from flask import Flask, render_template, Response
from imutils.video import VideoStream
import threading
import argparse
import datetime
import imutils
import time
import cv2
from flask_socketio import SocketIO, emit
from utils.SerialController import get_info

# initialize the output frame and a lock used to ensure thread-safe
# exchanges of the output frames (useful when multiple browsers/tabs are viewing the stream)
frame = None
lock = threading.Lock()
# initialize a flask object
# 这是必要的，因为flask需要知道它在哪里寻找模板和静态文件夹
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'
socketio = SocketIO(app)
# initialize the video stream and allow the camera sensor to
# warmup
# vs = VideoStream(usePiCamera=1).start()
vs = VideoStream(src=0).start()  # 用0表示笔记本优先使用的摄像头，可以改为1或2
time.sleep(2.0)


@socketio.on('connect')
def handle_connect():
    emit('data', 'Hello, World!', broadcast=True)  # 初始数据传递


@socketio.on('start_stream')
def start_stream():
    while True:
        out_a, out_ba, out_bs, out_s, out_t, out_v = get_info()  # 要传递给前端的数据
        # out_a, out_ba, out_bs, out_s, out_t, out_v = '1', '2', '3', '4', '5', '6'
        emit('out_a', '电流'+out_a, broadcast=True)
        emit('out_ba', '电池电流'+out_ba, broadcast=True)
        emit('out_bs', '电机速度'+out_bs, broadcast=True)
        emit('out_s', '编码器转速'+out_s, broadcast=True)
        emit('out_t', '温度'+out_t, broadcast=True)
        emit('out_v', '电池电压'+out_v, broadcast=True)
        time.sleep(0.2)


# Define the home page route
# 默认界面，返回index.html
# noinspection PyUnresolvedReferences
@app.route('/')
def index():
    return render_template('index.html')


# noinspection PyUnresolvedReferences
@app.route('/home')
def home():
    return render_template('index.html')


# noinspection PyUnresolvedReferences
@app.route('/about')
def about():
    return render_template('about-us.html')


@app.route('/contact')
def contact():
    return render_template('blog.html')


# Define the video streaming function
# 主要就是改这个函数-----------------------------------------------------------------------------------------------------
# 这个函数是用来检测运动的，可以改成别的，比如避障
def detect_motion(frameCount):
    # grab global references to the video stream, output frame, and lock variables
    global vs, frame, lock
    # initialize the motion detector and the total number of frames
    # read thus far
    # 这里是用的pyimagesearch里的SingleMotionDetector类，可以自己写一个别的，比如避障的
    md = SingleMotionDetector(accumWeight=0.1)
    total = 0
    # loop over frames from the video stream
    while True:
        # read the next frame from the video stream, resize it,
        # convert the frame to grayscale, and blur it
        frame = vs.read()
        frame = imutils.resize(frame, width=580)
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        gray = cv2.GaussianBlur(gray, (7, 7), 0)

        # grab the current timestamp and draw it on the frame
        timestamp = datetime.datetime.now()
        cv2.putText(frame, timestamp.strftime(
            "%A %d %B %Y %I:%M:%S%p"), (10, frame.shape[0] - 10),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 0, 255), 1)

        # if the total number of frames has reached a sufficient
        # number to construct a reasonable background model, then
        # continue to process the frame
        if total > frameCount:
            # detect motion in the image
            motion = md.detect(gray)

            # check to see if motion was found in the frame
            if motion is not None:
                # unpack the tuple and draw the box surrounding the
                # "motion area" on the output frame
                (thresh, (minX, minY, maxX, maxY)) = motion
                cv2.rectangle(frame, (minX, minY), (maxX, maxY),
                              (0, 0, 255), 2)

        # update the background model and increment the total number
        # of frames read thus far
        md.update(gray)
        total += 1

        # acquire the lock, set the output frame, and release the
        # lock
        with lock:
            outputFrame = frame.copy()


# --------------------------------------------------------------------------------------------------------------------


# 定义生成视频流的函数
def generate():
    global frame, lock
    # loop over frames from the output stream
    while True:
        # wait until the lock is acquired
        with lock:
            # check if the output frame is available, otherwise skip
            # the iteration of the loop
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


# Define the video feed route
@app.route('/video_feed')
def video_feed():
    # return the response generated along with the specific media
    # type (mime type)
    return Response(generate(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


# Run the app on the local development server
if __name__ == '__main__':
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
    t.daemon = True  # 设置为守护线程，主线程结束时，守护线程也会结束
    t.start()
    # start the flask app
    app.run(host=args["ip"], port=args["port"], debug=True,
            threaded=True, use_reloader=False)

# release the video stream pointer
vs.stop()
