
# First cd to script directory
cd "$(dirname "$0")"

# 进入 plugins/photoshop 目录打包文件
cd ../.. && zip -r sd-ppp_all.zip ./javascript ./plugins ./static ./sdppp_python __init__.py