import multiprocessing
import subprocess
from subprocess import call
from time import sleep

sudoPassword = "0-=0-="


def __invoke_bash_file(path):
    subprocess.Popen(['bash', path])


def __invoke_bash_command(command):
    subprocess.Popen(['bash', '-c', command])


def run_bash_file(path):
    proc = multiprocessing.Process(target=__invoke_bash_file, args=(path,))
    proc.start()


@DeprecationWarning
def clear_thread_dict():
    # get the string of `ps aux | grep mapping_visu` result
    thread_str = str(subprocess.check_output(["bash", "-c", "ps aux | grep \"mapping_visu\|\""]))
    print("thread str: ", thread_str)
    """
    thread str be like:
    
    sora     10103 95.8  1.4 7103492 465756 pts/1  Sl+  20:03   0:06 python mapping_visu.py --outputFolder __oak_d_mapping_output --use_rgb
    sora     10226  0.0  0.0  16184  1056 pts/0    R+   20:04   0:00 grep --color=auto mapping

    """
    pid_str = thread_str.split(' ')[5]
    call(['bash', '-c', 'kill -SIGINT ' + pid_str])

    thread_str = str(subprocess.check_output(["bash", "-c", "ps aux | grep object_detect_jj"]))
    print("thread str: ", thread_str)
    pid_str = thread_str.split(' ')[5]
    call(['bash', '-c', 'kill -SIGINT ' + pid_str])


def kill_all_sub_tasks_in_project():
    call(['bash', '-c',
          'pkill -f "rviz|livox|object_detect|feature_point_tracker|edge_detecter|object_tractor|mapping_visu|laplacian"'])
    sleep(2)


def chmod_1():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_livox_mapper.sh')
    run_bash_file('./scripts/launch_livox_lidar.sh')


def chmod_2():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_oak_mapping.sh')


def chmod_3():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_oak_navigate.sh')


def chmod_edge_detect():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_edge_normal.sh')


def chmod_laplacian():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_edge_laplacian.sh')


def chmod_key_point_tracker():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_key_point_tracker.sh')


def chmod_livox_loam():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_livox_loam_mapper.sh')
    run_bash_file('./scripts/launch_livox_lidar.sh')


def chmod_object_tractor():
    kill_all_sub_tasks_in_project()
    run_bash_file('./scripts/launch_object_tractor.sh')


if __name__ == '__main__':
    chmod_1()
