import threading

import cv2
import depthai as dai
from flask import Flask, render_template, Response

from utils.pipeline_provider import get_prepared_pipeline_with_palm_detection


# noinspection PyUnresolvedReferences
class AnyFrameOfPipelineProvider:
    def __init__(self, device_, pipeline_):
        print("AnyFrameOfPipelineProvider init")
        self.pipeline_ = pipeline_
        self.device_ = device_
        self.vidQ = self.device_.getOutputQueue(name="cam", maxSize=4, blocking=False)
        self.depthQ = self.device_.getOutputQueue(name="depth", maxSize=4, blocking=False)
        # 2 locks
        self.lock_normal = threading.Lock()
        self.lock_depth = threading.Lock()
        self.now_frame_normal = None
        self.now_frame_depth = None

    def get_normal_frame(self):
        print("get_normal_frame, now device: ", self.device_.getMxId(), " pipeline: ", self.pipeline_.getName())
        with self.lock_normal:
            in_rgb = self.vidQ.tryGet()
            if in_rgb is not None:
                frame = in_rgb.getCvFrame()
                if frame is not None:
                    self.now_frame_normal = frame
        return self.now_frame_normal

    def get_colored_depth_frame(self):
        print("get_colored_depth_frame, now device: ", self.device_.getMxId(), " pipeline: ", self.pipeline_.getName())
        with self.lock_depth:
            in_depth = self.depthQ.tryGet()
            if in_depth is not None:
                depthFrame = crop_to_rect(in_depth.getFrame())
                tmp = cv2.normalize(depthFrame, None, 255, 0, cv2.NORM_INF, cv2.CV_8UC1)
                tmp = cv2.equalizeHist(tmp)
                depthColoredFrame = cv2.applyColorMap(tmp, cv2.COLORMAP_JET)
                if depthColoredFrame is not None:
                    self.now_frame_depth = depthColoredFrame
        return self.now_frame_depth

    def generate_rgb_frame(self):   ########################
        global GLOBAL_FRAME_NORMAL
        while True:
            with lock_normal:
                GLOBAL_FRAME_NORMAL = self.get_normal_frame()
                if GLOBAL_FRAME_NORMAL is None:
                    continue
                (flag, encodedImage) = cv2.imencode(".jpg", GLOBAL_FRAME_NORMAL)
                if not flag:
                    continue
                yield b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n'

    def generate_depth_colored_frame(self):   #####################
        global GLOBAL_FRAME_DEPTH
        while True:
            with lock_depth:
                GLOBAL_FRAME_DEPTH = self.get_colored_depth_frame()
                if GLOBAL_FRAME_DEPTH is None:
                    continue
                (flag, encodedImage) = cv2.imencode(".jpg", GLOBAL_FRAME_DEPTH)
                if not flag:
                    continue
                yield b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' + bytearray(encodedImage) + b'\r\n'


default_any_frame_provider_global_var: AnyFrameOfPipelineProvider


def __init_provider():
    pipeline = get_prepared_pipeline_with_palm_detection()
    with dai.Device(pipeline) as device:
        global default_any_frame_provider_global_var
        # put pepper to device
        # device.startPipeline(pipeline)
        default_any_frame_provider_global_var = AnyFrameOfPipelineProvider(device, pipeline)


__init_provider()

lock_normal, lock_depth, lock_edge = threading.Lock(), threading.Lock(), threading.Lock()

GLOBAL_FRAME_NORMAL, GLOBAL_FRAME_DEPTH, GLOBAL_FRAME_EDGE = None, None, None


def crop_to_rect(frame_):
    height = frame_.shape[0]
    width = frame_.shape[1]
    delta = int((width - height) / 2)
    return frame_[0:height, delta:width - delta]


app = Flask(__name__)


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
    return Response(default_any_frame_provider_global_var.generate_rgb_frame(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


@app.route('/video_feed')
def video_feed_2():
    # return the response generated along with the specific media
    # type (mime type)
    return Response(default_any_frame_provider_global_var.generate_depth_colored_frame(),
                    mimetype="multipart/x-mixed-replace; boundary=frame")


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True, threaded=True, use_reloader=False)
