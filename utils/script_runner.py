from subprocess import call
import os
import sys
from echo_logger import *
import time
import subprocess

sudoPassword = "0-=0-="

def run_bash_file(path):
    command = ''
    with open(path, 'r') as f:
        command = f.read()
    print_warn(command)
    result = os.system('echo %s|sudo -S %s\n' % (sudoPassword, command))
    if result == 0:
        print_info('Successfully run bash file: %s' % path)
    else:
        print('Failed to run bash file: %s' % path, 'result: %s' % result)


def run_bash_direct(command):
    print_warn(command)
    result = os.system('echo %s|sudo -S %s\n' % (sudoPassword, command))
    if result == 0:
        print_info('Successfully run bash command: %s' % command)
    else:
        print('Failed to run bash command: %s' % command, 'result: %s' % result)


if __name__ == '__main__':
    run_bash_direct(sys.argv[1])
