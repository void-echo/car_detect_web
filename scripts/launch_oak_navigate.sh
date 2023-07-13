#!/bin/bash -l

#conda activate oak  # TODO HERE: you may need to change this to your conda environment name
#pwd

# password for sudo: 0-=0-=
pwd_sudo="0-=0-="

sudo -S <<< $pwd_sudo chmod 777 /dev/ttyUSB0
python object_detect_jj.py
