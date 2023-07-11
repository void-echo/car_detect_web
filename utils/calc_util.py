import math

import numpy as np

from flask_detect import DEPTH_THRESH_LOW, DEPTH_THRESH_HIGH


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
