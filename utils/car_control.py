# -*- coding: utf-8 -*
# @Time: 2023-07-09 19:40
# @Author: Three
# @File: car_control.py
# Software: PyCharm


def control(x, y, z, width, height):
    if z > 2000:
        go_ahead()
    else:
        while -1000 < x < 0:
            turn_right()
        while 0 <= x < 1000:
            turn_left()


def go_ahead():
    pass


def turn_left():
    pass


def turn_right():
    pass
