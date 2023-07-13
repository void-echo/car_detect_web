import multiprocessing
import subprocess
from subprocess import call

from echo_logger import *

sudoPassword = "0-=0-="

threads_dict = {}


def __invoke_bash_file(path):
    call(['bash', path])


def __invoke_bash_command(command):
    call(['bash', '-c', command])


def run_bash_file(path):
    proc = multiprocessing.Process(target=__invoke_bash_file, args=(path,))
    proc.start()


def clear_thread_dict():
    # get the string of `ps aux | grep mapping_visu` result
    thread_str = str(subprocess.check_output(["bash", "-c", "ps aux | grep mapping_visu"]))
    print("thread str: ", thread_str)
    """
    thread str be like:
    
    sora     10103 95.8  1.4 7103492 465756 pts/1  Sl+  20:03   0:06 python mapping_visu.py --outputFolder __oak_d_mapping_output --use_rgb
    sora     10226  0.0  0.0  16184  1056 pts/0    R+   20:04   0:00 grep --color=auto mapping

    """
    pid_str = thread_str.split(' ')[5]
    call(['bash', '-c', 'kill -9 ' + pid_str])

    thread_str = str(subprocess.check_output(["bash", "-c", "ps aux | grep object_detect_jj"]))
    print("thread str: ", thread_str)
    pid_str = thread_str.split(' ')[5]
    call(['bash', '-c', 'kill -9 ' + pid_str])




def chmod_1():
    clear_thread_dict()
    run_bash_file('./scripts/launch_livox_mapper.sh')
    run_bash_file('./scripts/launch_livox_lidar.sh')


def chmod_2():
    clear_thread_dict()
    run_bash_file('./scripts/launch_oak_mapping.sh')


def chmod_3():
    clear_thread_dict()
    run_bash_file('./scripts/launch_oak_navigate.sh')


if __name__ == '__main__':
    chmod_1()
