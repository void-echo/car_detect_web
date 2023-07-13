import time

import serial

'''
Before you run this code, you need to install pyserial driver first.
run the following command in your terminal if necessary:
`pip install pyserial`
And then, plug in your USB2RS232 converter, and check the port number in your **device manager**.


Note that the port number may be different in your computer.
If so, change the parameters in the following code accordingly.
'''

# 串口初始化
ser = serial.Serial(
    port='COM3',  # 这里改成你的电脑上，串口对应的端口号。这是唯一可以根据你的电脑修改的参数。
    baudrate=115200,  # 这里必须是115200。如果设备管理器上面不是，就在设备管理器中改成对应的数值。这一行、以下三行代码不应该被修改。
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
)

# 初始化输入
input_ = 1


# 只前进/后退方法（按秒停止）
def forward(speed=10, seconds=5):
    # 计时器，五秒后跳出while循环
    start_time = time.time()  # 记录循环开始的时间
    while True:
        command = '!M 0 '
        command += str(speed)
        command += '\r\n'
        ser.write(command.encode('ASCII'))

        out = ''
        time.sleep(0.2)  # wait one second before reading output
        while ser.inWaiting() > 0:  # while there is data in the input buffer
            out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

        if out != '':
            print(">>" + out)

        elapsed_time = time.time() - start_time  # 计算循环已经运行的时间
        if elapsed_time >= seconds:
            break


# 只转弯方法（按秒停止）
def turn_second(angle=10, seconds=5):
    # 计时器，五秒后跳出while循环
    start_time = time.time()  # 记录循环开始的时间
    while True:
        command = '!M '
        command += str(angle)
        command += ' 0'
        command += '\r\n'
        ser.write(command.encode('ASCII'))

        out = ''
        time.sleep(0.2)  # wait one second before reading output
        while ser.inWaiting() > 0:  # while there is data in the input buffer
            out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

        if out != '':
            print(">>" + out)

        elapsed_time = time.time() - start_time  # 计算循环已经运行的时间
        if elapsed_time >= seconds:
            break


# 只转弯方法（按角度停止），每次转动角度为10，转到需要的角度就停止。
# 右转为负，左转为正
def turn_angle(angle=180, t_angle=10):
    if angle > 0:
        num = angle / t_angle
        while True:
            num -= 1
            command = '!M ' + str(t_angle) + ' 0'
            command += '\r\n'
            ser.write(command.encode('ASCII'))

            out = ''
            time.sleep(0.5)  # wait one second before reading output
            while ser.inWaiting() > 0:  # while there is data in the input buffer
                out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

            if out != '':
                print(">>" + out)

            if num <= 0:
                break

    else:
        num = angle / t_angle
        while True:
            num += 1
            command = '!M -' + str(t_angle)
            command += '\r\n'
            ser.write(command.encode('ASCII'))

            out = ''
            time.sleep(0.5)
            while ser.inWaiting() > 0:
                out += ser.read(1).decode('ASCII')
            if out != '':
                print(">>" + out)
            if num >= 0:
                break


# 前进/后退+转弯方法（按秒停止）
def forward_turn(speed=10, angle=10, seconds=5):
    # 计时器，五秒后跳出while循环
    start_time = time.time()  # 记录循环开始的时间
    while True:
        command = '!M '
        command += str(angle)
        command += ' '
        command += str(speed)
        command += '\r\n'
        ser.write(command.encode('ASCII'))

        out = ''
        time.sleep(0.5)  # wait one second before reading output
        while ser.inWaiting() > 0:  # while there is data in the input buffer
            out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

        if out != '':
            print(">>" + out)

        elapsed_time = time.time() - start_time  # 计算循环已经运行的时间
        if elapsed_time >= seconds:
            break


# 前进/后退+转弯方法（按角度停止）
def forward_turn_angle(speed=10, angle=10, t_angle=10):
    if angle > 0:
        num = angle / t_angle
        while True:
            num -= 1
            command = '!M ' + str(t_angle) + ' ' + str(speed)
            command += '\r\n'
            ser.write(command.encode('ASCII'))

            out = ''
            time.sleep(0.5)  # wait one second before reading output
            while ser.inWaiting() > 0:  # while there is data in the input buffer
                out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

            if out != '':
                print(">>" + out)

            if num <= 0:
                break

    else:
        num = angle / t_angle
        while True:
            num += 1
            command = '!M -' + str(t_angle) + ' ' + str(speed)
            command += '\r\n'
            ser.write(command.encode('ASCII'))

            out = ''
            time.sleep(0.5)
            while ser.inWaiting() > 0:
                out += ser.read(1).decode('ASCII')
            if out != '':
                print(">>" + out)
            if num >= 0:
                break


# 退出
def user_exit():
    ser.close()
    exit()


# 获取小车参数
def get_info():
    # 电流
    command = '?A'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_a = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_a += ser.read(1).decode('ASCII')  # read one, convert bytes to str

    if out_a != '':
        # 从第四个字符开始截取
        out_a = out_a[3:]
        # print(">>" + out_a)

    # 电池电流
    command = '?BA'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_ba = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_ba += ser.read(1).decode('ASCII')  # read one, convert bytes to str

    if out_ba != '':
        out_ba = out_ba[4:]
        # print(">>" + out_ba)

    # 电机速度
    command = '?BS'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_bs = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_bs += ser.read(1).decode('ASCII')  # read one, convert bytes to str

    if out_bs != '':
        out_bs = out_bs[4:]
        # print(">>" + out_bs)

    # 编码器转速
    command = '?S'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_s = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_s += ser.read(1).decode('ASCII')  # read one, convert bytes to str

    if out_s != '':
        out_s = out_s[3:]
        # print(">>" + out_s)

    # 温度
    command = '?T'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_t = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_t += ser.read(1).decode('ASCII')

    if out_t != '':
        out_t = out_t[3:]
        # print(">>" + out_t)

    # 电池电压
    command = '?V 2'
    command += '\r\n'
    ser.write(command.encode('ASCII'))

    out_v = ''
    time.sleep(0.1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out_v += ser.read(1).decode('ASCII')

    if out_v != '':
        out_v = out_v[5:]
        # print(">>" + out_v)

    return out_a, out_ba, out_bs, out_s, out_t, out_v


get_info()
