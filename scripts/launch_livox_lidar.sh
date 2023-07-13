#!/bin/bash -l
# -l means login shell, which will load the .bash_profile

# Change to mode 1, using livox loam

# 1. source ros. place: /opt/ros/melodic/setup.bash

source /opt/ros/melodic/setup.bash


# 4. launch rviz
source /home/sora/livox_ros_driver_/ws_livox/devel/setup.bash

roslaunch --wait livox_ros_driver livox_lidar.launch