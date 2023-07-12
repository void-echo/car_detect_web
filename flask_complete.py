import threading

import cv2
import imutils
from flask import Flask, render_template, Response
from imutils.video import VideoStream

app = Flask(__name__)
vs = VideoStream(src=0).start()
lock = threading.Lock()

GLOBAL_FRAME = None


def change_frame_():
    global GLOBAL_FRAME
    while True:
        GLOBAL_FRAME = vs.read()
        GLOBAL_FRAME = imutils.resize(GLOBAL_FRAME, width=400)


def generate_():
    global GLOBAL_FRAME
    while True:
        with lock:
            if GLOBAL_FRAME is None:
                continue
            (flag, encodedImage) = cv2.imencode(".jpg", GLOBAL_FRAME)
            if not flag:
                continue
            yield b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n'


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


# noinspection PyUnresolvedReferences
@app.route('/contact')
def contact():
    return render_template('blog.html')


@app.route('/video_feed')
def video_feed():
    # return the response generated along with the specific media
    # type (mime type)
    return Response(generate_(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


if __name__ == '__main__':
    # new lambda thread to read frames from the video stream
    t = threading.Thread(target=change_frame_, args=())
    t.daemon = True
    t.start()

    app.run(host='127.0.0.1', port=8000, debug=True, threaded=True, use_reloader=False)
