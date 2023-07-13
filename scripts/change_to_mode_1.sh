#!/bin/bash

# Change to mode 1, using livox loam

# 1. source ros. place: /opt/ros/melodic/setup.bash
sudo su
source /opt/ros/melodic/setup.bash

# 2. source catkin_ws. place: /home/sora/catkin_ws/devel/setup.bash
source /home/sora/catkin_ws/devel/setup.bash

# 3. launch livox loam algorithm
roslaunch livox_mapping livox_mapping.launch