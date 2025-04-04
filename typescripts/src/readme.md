# 如何搭建开发环境

## 如果只需要开发comfy侧
```
# 克隆sd-ppp项目 (比如, 可以在ComfyUI的custom_nodes目录下执行)
git clone https://github.com/zombieyang/sd-ppp.git -b comfypop #如果不需要切分支,就不传-b参数
cd sd-ppp/typescripts
# 克隆sdppp-typescripts项目(未开源部分)
git clone https://github.com/zombieyang/sdppp-typescripts.git -b comfypop src #如果不需要切分支,就不传-b参数

# 回到sd-ppp目录
cd ..
# 安装node.js依赖
npm install
# 启动代码监听编译
npm run watch
```
此时重启comfy即可. 后续修改JS文件,刷新ComfyUI即可看到效果. 但如果修改了python,需要重启ComfyUI.

## 如果需要开发ps侧
需要通过`Adobe Creative Cloud`下载`UXP Developer Tools`，然后添加`sd-ppp/plugins/photoshop/manifest.json`，随后点击load就会加载插件。