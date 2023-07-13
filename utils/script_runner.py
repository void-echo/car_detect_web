import threading
from subprocess import call
import multiprocessing

from echo_logger import *

sudoPassword = "0-=0-="

threads_dict = {}


def __invoke_bash_file(path):
    call(['bash', path])


def __invoke_bash_command(command):
    call(['bash', '-c', command])


def run_bash_file(path):
    proc = multiprocessing.Process(target=__invoke_bash_file, args=(path,))
    thread_id = str(time.time())
    threads_dict[thread_id] = proc
    proc.start()


def clear_thread_dict():
    for key in threads_dict.keys():
        if not threads_dict[key].is_alive():
            threads_dict.pop(key)
        else:
            threads_dict[key].terminate()


def chmod_1():
    clear_thread_dict()
    run_bash_file('../scripts/launch_livox_mapper.sh')
    run_bash_file('../scripts/launch_livox_lidar.sh')

def chmod_2():
    clear_thread_dict()
    run_bash_file('../scripts/launch_livox_mapper.sh')


if __name__ == '__main__':
    chmod_1()
