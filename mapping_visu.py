"""
Visualize 3D point cloud of the environment in real-time, or playback your recordings and view their 3D point cloud.
Press 'H' to view Open3D point cloud viewer options.

Requirements: pip install -v open3d==0.16.0

Note: Most recent open3d version (0.17.0) has a bug with Visualizer::get_view_control() so version 0.16.0 is recommended.

"""

import os
import sys
import threading
import time
from enum import Enum

import depthai
import numpy as np
import open3d as o3d
import spectacularAI

from common.deserialize_output import input_stream_reader, MockVioOutput, MockMapperOutput


# Status for point clouds (for updating Open3D renderer).
class Status(Enum):
    VALID = 0
    NEW = 1
    UPDATED = 2
    REMOVED = 3


# 这个函数的意思是：将点云的坐标系转换到相机坐标系下
def invert_se3(a):
    b = np.eye(4)  # 4*4的单位矩阵
    b[:3, :3] = a[:3, :3].transpose()  # 旋转矩阵的转置
    b[:3, 3] = -np.dot(b[:3, :3], a[:3, 3])  # 平移矩阵的负值
    return b


# 这个函数的意思是：将相机坐标系下的点云转换到世界坐标系下
def blend(a, b, m):
    return [a[0] * (1 - m) + b[0] * m, a[1] * (1 - m) + b[1] * m, a[2] * (1 - m) + b[2] * m]


class Trajectory:
    def __init__(self):
        self.maxPoints = 1000
        self.points = []
        self.colors = []
        self.cloud = o3d.geometry.PointCloud()  # 创建点云，是用open3d生成的点云
        for i in range(self.maxPoints):
            self.colors.append(blend([0.960, 0.0192, 0.270], [.217, .009, .9], i / (self.maxPoints - 1)))
            self.points.append([0, 0, 0])
        self.cloud.colors = o3d.utility.Vector3dVector(self.colors)

    # 添加点云坐标
    def addPosition(self, pos):
        while (len(self.points) < self.maxPoints): self.points.append(pos)
        self.points.insert(0, pos)  # 将点云添加到最前面
        self.points = self.points[:self.maxPoints]
        # 将点坐标数组转换为 Vector3dVector 类型的对象，并将其赋值给点云数据对象中的 points 属性
        self.cloud.points = o3d.utility.Vector3dVector(self.points)


# Wrapper around Open3D point cloud, which helps to update its world pose.
class PointCloud:
    def __init__(self, keyFrame, voxelSize, colorOnly):
        self.status = Status.NEW
        self.camToWorld = np.identity(4)
        self.cloud = self.__getKeyFramePointCloud(keyFrame, voxelSize, colorOnly)

    # 获取关键帧的点云数据
    def __getKeyFramePointCloud(self, keyFrame, voxelSize, colorOnly):
        cloud = o3d.geometry.PointCloud()
        cloud.points = o3d.utility.Vector3dVector(keyFrame.pointCloud.getPositionData())

        if keyFrame.pointCloud.hasColors():
            colors = keyFrame.pointCloud.getRGB24Data() * 1. / 255
            cloud.colors = o3d.utility.Vector3dVector(colors)

        if keyFrame.pointCloud.hasNormals():
            cloud.normals = o3d.utility.Vector3dVector(keyFrame.pointCloud.getNormalData())

        # 如果指定了 colorOnly 为 True，则会过滤掉没有颜色信息的点。
        if cloud.has_colors() and colorOnly:
            # Filter points without color
            colors = np.asarray(cloud.colors)
            pointsWithColor = []
            for i in range(len(colors)):
                if colors[i, :].any():
                    pointsWithColor.append(i)
            cloud = cloud.select_by_index(pointsWithColor)

        # 如果指定了 voxelSize，则会对点云进行降采样。
        if voxelSize > 0:
            cloud = cloud.voxel_down_sample(voxelSize)

        return cloud

    # 更新点云的世界坐标系，从先前的相机坐标系转换到新的世界坐标系
    def updateWorldPose(self, camToWorld):
        prevWorldToCam = invert_se3(self.camToWorld)
        prevToCurrent = np.matmul(camToWorld, prevWorldToCam)
        self.cloud.transform(prevToCurrent)
        self.camToWorld = camToWorld


# Camera object
class CoordinateFrame:
    def __init__(self, scale=0.25):
        # self.frame = o3d.geometry.TriangleMesh.create_coordinate_frame(scale)
        corners = np.array(
            [[0., 0., 0.], [0., 1., 0.], [1., 1., 0.], [1., 0., 0.], [0., 0., 1.], [0., 1., 1.], [1., 1., 1.],
             [1., 0., 1.]])
        vertices = np.array(
            list(map(lambda n: n - [.5, .5, 0] if n[2] == 1. else (n - [.5, .5, 0]) * .5, corners))) * .1
        colors = np.array(list(
            map(lambda n: np.array([0.960, 0.0192, 0.270]) * (.7 + .3 * n[0]) * (1. - .3 * n[1]) * (.7 + .3 * n[2]),
                corners)))
        quads = np.array([[0, 1, 2, 3], [0, 4, 5, 1], [1, 5, 6, 2], [2, 6, 7, 3], [0, 3, 7, 4], [4, 7, 6, 5]])
        triangles = []
        for quad in quads:
            triangles.append([quad[0], quad[1], quad[2]])
            triangles.append([quad[2], quad[3], quad[0]])
        triangles = np.array(triangles)
        self.frame = o3d.geometry.TriangleMesh(o3d.utility.Vector3dVector(vertices),
                                               o3d.utility.Vector3iVector(triangles))
        self.frame.vertex_colors = o3d.utility.Vector3dVector(colors)
        self.camToWorld = np.identity(4)

    def updateWorldPose(self, camToWorld):
        prevWorldToCam = invert_se3(self.camToWorld)
        prevToCurrent = np.matmul(camToWorld, prevWorldToCam)
        self.frame.transform(prevToCurrent)
        self.camToWorld = camToWorld


# Camera trajectory
class Open3DVisualization:
    # 初始化 Open3D 可视化对象
    def __init__(self, voxelSize, cameraManual, cameraSmooth, colorOnly, trajectory=False):
        self.shouldClose = False
        self.cameraFrame = CoordinateFrame()
        self.trajectory = Trajectory() if trajectory else None
        self.pointClouds = {}
        self.voxelSize = voxelSize
        self.cameraFollow = not cameraManual
        self.cameraSmooth = cameraSmooth
        self.colorOnly = colorOnly
        self.prevPos = None
        self.prevCamPos = None

        self.vis = o3d.visualization.Visualizer()
        self.vis.create_window()
        self.vis.add_geometry(self.cameraFrame.frame, reset_bounding_box=False)
        if self.trajectory: self.vis.add_geometry(self.trajectory.cloud)
        self.viewControl = self.vis.get_view_control()
        renderOption = self.vis.get_render_option()
        renderOption.point_size = 3
        renderOption.light_on = False
        self.viewControl.set_zoom(0.3)

    # 添加点云数据
    def run(self):
        print("Close the window to stop mapping")

        while not self.shouldClose:
            self.shouldClose = not self.vis.poll_events()

            # Update camera coordinate axes
            self.vis.update_geometry(self.cameraFrame.frame)

            # Update trajectory
            if self.trajectory: self.vis.update_geometry(self.trajectory.cloud)

            # Update point clouds (add, move, remove)
            for pcId in list(self.pointClouds.keys()):
                pc = self.pointClouds[pcId]

                if pc.status == Status.VALID:
                    continue

                elif pc.status == Status.NEW:
                    reset = len(self.pointClouds) == 1
                    self.vis.add_geometry(pc.cloud, reset_bounding_box=reset)
                    pc.status = Status.VALID

                elif pc.status == Status.UPDATED:
                    self.vis.update_geometry(pc.cloud)
                    pc.status = Status.VALID

                elif pc.status == Status.REMOVED:
                    self.vis.remove_geometry(pc.cloud, reset_bounding_box=False)
                    del self.pointClouds[pcId]

            self.vis.update_renderer()
            time.sleep(0.01)

        self.vis.destroy_window()

    def updateCameraFrame(self, camToWorld):
        self.cameraFrame.updateWorldPose(camToWorld)

        if self.trajectory: self.trajectory.addPosition(camToWorld[0:3, 3])

        if self.cameraFollow:
            pos = camToWorld[0:3, 3]
            forward = camToWorld[0:3, 2]
            upVector = np.array([0, 0, 1])
            camPos = pos - forward * 0.1 + upVector * 0.05

            if self.cameraSmooth and self.prevPos is not None:
                alpha = np.array([0.01, 0.01, 0.001])
                camPos = camPos * alpha + self.prevCamPos * (np.array([1, 1, 1]) - alpha)
                pos = pos * alpha + self.prevPos * (np.array([1, 1, 1]) - alpha)

            self.prevPos = pos
            self.prevCamPos = camPos

            viewDir = pos - camPos
            viewDir /= np.linalg.norm(viewDir)
            leftDir = np.cross(upVector, viewDir)
            upDir = np.cross(viewDir, leftDir)
            self.viewControl.set_lookat(pos)
            self.viewControl.set_front(-viewDir)
            self.viewControl.set_up(upDir)

    def containsKeyFrame(self, keyFrameId):
        return keyFrameId in self.pointClouds

    def addKeyFrame(self, keyFrameId, keyFrame):
        camToWorld = keyFrame.frameSet.primaryFrame.cameraPose.getCameraToWorldMatrix()
        pc = PointCloud(keyFrame, self.voxelSize, self.colorOnly)
        pc.updateWorldPose(camToWorld)
        self.pointClouds[keyFrameId] = pc

    def updateKeyFrame(self, keyFrameId, keyFrame):
        camToWorld = keyFrame.frameSet.primaryFrame.cameraPose.getCameraToWorldMatrix()
        pc = self.pointClouds[keyFrameId]
        pc.updateWorldPose(camToWorld)
        pc.status = Status.UPDATED

    def removeKeyFrame(self, keyFrameId):
        pc = self.pointClouds[keyFrameId]
        pc.status = Status.REMOVED


def parseArgs():
    import argparse
    p = argparse.ArgumentParser(__doc__)
    p.add_argument("--dataFolder", help="Instead of running live mapping session, replay session from this folder")
    p.add_argument('--file', type=argparse.FileType('rb'),
                   help='Read data from file or pipe, using this with mapping_visu C++ example', default=None)
    p.add_argument("--recordingFolder", help="Record live mapping session for replay")
    p.add_argument("--outputFolder", help="Folder where to save the captured point clouds")
    p.add_argument("--voxel", help="Voxel size (m) for downsampling point clouds")
    p.add_argument("--manual", help="Control Open3D camera manually", action="store_true")
    p.add_argument("--smooth", help="Apply some smoothing to 3rd person camera movement", action="store_true")
    p.add_argument("--color", help="Filter points without color", action="store_true")
    p.add_argument("--use_rgb", help="Use OAK-D RGB camera", action="store_true")
    p.add_argument("--trajectory", help="Draw camera trajectory", action="store_true")
    p.add_argument('--ir_dot_brightness', help='OAK-D Pro (W) IR laser projector brightness (mA), 0 - 1200', type=float,
                   default=0)
    p.add_argument('--no_feature_tracker', help='Disable on-device feature tracking and depth map', action="store_true")
    p.add_argument("--useRectification",
                   help="--dataFolder option can also be used with some non-OAK-D recordings, but this parameter must be set if the videos inputs are not rectified.",
                   action="store_true")
    return p.parse_args()


if __name__ == '__main__':
    args = parseArgs()
    # if args.outputFolder:
    #     os.makedirs(args.outputFolder)
    # the code below will raise an exception if the dir already exists.
    # but it's better to create one random name folder for each run, under the outputFolder
    # to avoid the mess of the output files.

    if args.dataFolder:
        if not os.path.isdir(args.dataFolder):
            print("Error: --dataFolder argument must be a valid directory")
            sys.exit(1)

        if args.file:
            print("Error: --dataFolder and --file arguments cannot be used together")
            sys.exit(1)
        rand_name_considering_time = str(time.time()).replace('.', '')
        args.outputFolder = os.path.join(args.outputFolder, rand_name_considering_time)
        os.makedirs(args.outputFolder)
        print("Saving point clouds to: " + args.outputFolder)

    configInternal = {
        "computeStereoPointCloud": "true",
        "pointCloudNormalsEnabled": "true",
        "computeDenseStereoDepth": "true",
    }
    if args.dataFolder and args.useRectification:
        configInternal["useRectification"] = "true"
    else:
        configInternal["alreadyRectified"] = "true"

    voxelSize = 0 if args.voxel is None else float(args.voxel)
    visu3D = Open3DVisualization(voxelSize, args.manual, args.smooth, args.color, args.trajectory)  # 创建可视化对象


    def onVioOutput(vioOutput):
        cameraPose = vioOutput.getCameraPose(0)  # 获取相机位姿
        camToWorld = cameraPose.getCameraToWorldMatrix()  # 相机坐标系到世界坐标系的变换矩阵
        visu3D.updateCameraFrame(camToWorld)  # 更新相机位姿


    def onMappingOutput(output):
        for frameId in output.updatedKeyFrames:
            keyFrame = output.map.keyFrames.get(frameId)  # 获取关键帧

            # Remove deleted key frames from visualisation
            if not keyFrame:
                if visu3D.containsKeyFrame(frameId): visu3D.removeKeyFrame(frameId)
                continue

            # Check that point cloud exists
            if not keyFrame.pointCloud: continue

            # 渲染关键帧点云
            if visu3D.containsKeyFrame(frameId):
                # Existing key frame
                visu3D.updateKeyFrame(frameId, keyFrame)
            else:
                # New key frame
                visu3D.addKeyFrame(frameId, keyFrame)

        if output.finalMap:
            print("Final map ready!")


    if args.file:
        # 如果有文件输入，读取文件
        print("Starting reading input from file or pipe")


        def inputStreamLoop():  # 读取输入流
            vio_source = input_stream_reader(args.file)  # 读取输入流
            for vio_out in vio_source:
                if 'cameraPoses' in vio_out:  # 如果有相机位姿
                    onVioOutput(MockVioOutput(vio_out))  # 更新相机位姿
                else:
                    onMappingOutput(MockMapperOutput(vio_out))  # 渲染关键帧点云


        thread = threading.Thread(target=inputStreamLoop)  # 创建线程
        thread.start()  # 启动线程
        visu3D.run()  # 运行可视化
        thread.join()  # 等待线程结束
    # 如果没有文件输入，有文件夹输入，读取文件夹
    elif args.dataFolder:
        print("Starting replay")  # 回放
        replay = spectacularAI.Replay(args.dataFolder, onMappingOutput, configuration=configInternal)
        replay.setOutputCallback(onVioOutput)
        replay.startReplay()
        visu3D.run()
        replay.close()
    # 如果没有文件输入，读取OAK-D设备
    else:
        def captureLoop():
            print("Starting OAK-D device")
            pipeline = depthai.Pipeline()
            config = spectacularAI.depthai.Configuration()  # 创建配置对象
            config.useFeatureTracker = not args.no_feature_tracker  # 是否使用特征跟踪
            if args.recordingFolder:
                config.recordingFolder = args.recordingFolder  # 设置录制文件夹
            config.useColor = args.use_rgb  # 是否使用RGB相机
            config.internalParameters = configInternal  # 设置内部参数
            vioPipeline = spectacularAI.depthai.Pipeline(pipeline, config, onMappingOutput)  # 创建可视化管道

            with depthai.Device(pipeline) as device, \
                    vioPipeline.startSession(device) as vio_session:  # 创建设备，启动会话
                if args.ir_dot_brightness > 0:  # 如果设置了红外激光点云投影仪亮度
                    device.setIrLaserDotProjectorBrightness(args.ir_dot_brightness)  # 设置红外激光点云投影仪亮度
                while not visu3D.shouldClose:  # 如果可视化没有关闭
                    onVioOutput(vio_session.waitForOutput())  # 更新相机位姿


        thread = threading.Thread(target=captureLoop)  # 创建线程
        thread.start()
        visu3D.run()
        thread.join()

    if args.outputFolder:
        print("Saving point clouds to {0}".format(args.outputFolder))  # 保存点云到文件夹
        for id in visu3D.pointClouds:
            pc = visu3D.pointClouds[id]
            filename = "{0}/{1}.ply".format(args.outputFolder, id)  # 保存文件名
            o3d.io.write_point_cloud(filename, pc.cloud)  # 保存点云
