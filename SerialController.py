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

ser = serial.Serial(
    port='COM2',        # 这里改成你的电脑上，串口对应的端口号。这是唯一可以根据你的电脑修改的参数。
    baudrate=115200,    # 这里必须是115200。如果设备管理器上面不是，就在设备管理器中改成对应的数值。这一行、以下三行代码不应该被修改。
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
)

input_ = 1
while True:
    # get keyboard input
    input_ = input(">> ")
    if input_ == 'exit':
        ser.close()
        exit()
    else:
        input_ += '\r\n'
        ser.write(input_.encode('ASCII'))
        out = ''
    time.sleep(1)  # wait one second before reading output
    while ser.inWaiting() > 0:  # while there is data in the input buffer
        out += ser.read(1).decode('ASCII')  # read one, convert bytes to str

    if out != '':
        print(">>" + out)
