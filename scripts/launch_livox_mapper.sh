#!/bin/bash -l
# -l means login shell, which will load the .bash_profile

# Change to mode 1, using livox loam

# 1. source ros. place: /opt/ros/melodic/setup.bash
# look port usage:
# sudo netstat -tulpn | grep LISTEN
source /opt/ros/melodic/setup.bash

# 2. source livox mapper
source /home/sora/ws_livox_mapper/devel/setup.bash

# 3. launch livox loam algorithm
roslaunch livox_mapping mapping_mid.launch
