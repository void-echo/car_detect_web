import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import make_interp_spline

# # 给定的十个点的 x 和 y 坐标
# x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
# y = [2, 4, 5, 7, 10, 6, 3, 8, 13, 8, 5]

# 调整 smooth 参数
smooth_values = [0.5, 1.0, 2.0]  # 可以尝试不同的 smooth 值


# noinspection PyArgumentList
def draw_curve1(x, y):  # 平滑拟合
    # 样条插值拟合
    spl = make_interp_spline(x, y, smooth=smooth_values[0])
    x_fit = np.linspace(min(x), max(x), 100)
    y_fit = spl(x_fit)

    # 绘制原始数据点和拟合曲线
    # plt.scatter(x, y, label='Original Points')
    # plt.plot(x_fit, y_fit, label='Fitted Curve')
    # plt.xlabel('X')
    # plt.ylabel('Y')
    # plt.legend()
    # plt.show()

    return x_fit, y_fit
def draw_curve(x, y):  # 平滑拟合
    # 多项式拟合
    degree = 3  # 设置多项式的阶数
    coefficients = np.polyfit(x, y, degree)  # 进行多项式拟合
    poly = np.poly1d(coefficients)  # 构造多项式对象

    # 生成拟合曲线的 x 值
    x_fit = np.linspace(min(x), max(x), 100)

    # 计算拟合曲线的 y 值
    y_fit = poly(x_fit)

    # 绘制原始数据点和拟合曲线
    plt.scatter(x, y, label='Original Points')
    plt.plot(x_fit, y_fit, label='Fitted Curve')
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.legend()
    plt.show()

    return x_fit, y_fit
# if __name__ == '__main__':
#     draw_curve(x, y)
