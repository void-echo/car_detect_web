#!/bin/bash -l
# -l means login shell, which will load the .bash_profile

# Change to mode 1, using livox loam

# 1. source ros. place: /opt/ros/melodic/setup.bash
# look port usage:

source /opt/ros/melodic/setup.bash

# 2. source livox mapper
source /home/sora/catkin_ws/devel/setup.sh

# 3. launch livox loam algorithm
roslaunch loam_livox livox.launch
