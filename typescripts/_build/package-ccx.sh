#!/bin/bash

# First cd to script directory
cd "$(dirname "$0")"

# 进入 plugins/photoshop 目录打包文件
cd ../../plugins/photoshop && zip -r ../../static/sd-ppp_PS.zip ./*

# 重命名 .zip 为 .ccx
cd ../../static && rm sd-ppp_PS.ccx && mv sd-ppp_PS.zip sd-ppp_PS.ccx