# SD-PPP: ThirdParty Photoshop AI Plugin

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/9HeGjDvEmn?style=flat)](https://discord.gg/9HeGjDvEmn) | [![QQ group](https://img.shields.io/badge/QQ%E9%A2%91%E9%81%93-SDPPP%E7%9A%84%E9%A2%91%E9%81%93-brightgreen.svg)](https://pd.qq.com/s/5m42umo28) 

![GitHub Repo stars](https://img.shields.io/github/stars/zombieyang/sd-ppp) | [![Kofi](https://img.shields.io/badge/Kofi-F16061.svg?logo=ko-fi&logoColor=white)](https://ko-fi.com/zombieyang)


![Image](https://github.com/user-attachments/assets/ab2168d9-ce7c-40d0-9f5a-8173937455ac)

## 2.0 Beta is available!

* New UI, especially for sending images and receiving images.
* Select images with keyboard shortcuts
* No more custom nodes needed when using ComfyUI
* Support API from `replicate.com`

[> Download 2.0 Beta](./static/sd-ppp2_PS.ccx)

> only available for PS26.0+ (Adobe Photoshop 2025)

> Still in beta, only Zh_CN is supported now.

<img width="400" alt="Image" src="https://github.com/user-attachments/assets/6c49599d-52e2-4893-a96b-71f0b1014f41" />

## Simplify ComfyUI to SDWebUI liked interface.

![image](https://github.com/user-attachments/assets/cf0b399c-5827-4e7a-9a06-8f80e42021fd)
### [> SDPPP rule: the naming rules to make nodes become WebUI like interface.](https://github.com/zombieyang/sd-ppp/wiki/SDPPP-rules-to-make-nodes-become-APP-like-UI.)

## Connect with Photoshop

* ✅ Multi layer supported (including text layer/image layer)
* ✅ Multi document supported
* ✅ Multi Photoshop supported
* ✅ Work in specific region of your Document


![image](https://github.com/user-attachments/assets/5129833f-ccf2-46a7-a6fd-62068d1e6a24)

> attention: only PS 24.4.0+ is supported. Feature `GetSelection` needs 25.0+

## How to install

<details>
<summary><i>[click to expand]</i></summary>

1. Use [ComfyManager](https://github.com/ltdrdata/ComfyUI-Manager) to install `sd-ppp` or clone this repository into `<your-comfy-directory>/custom_nodes`

    <img width=800 src="https://github.com/user-attachments/assets/6f97d7a8-ccd3-4ebf-aee9-ce4390846a6e" />

2. install Photoshop plugin
    1. by CCX:
        1. download .ccx in any SDPPP's nodes or ComfyUI's setting UI.
            
            <img width=300 src="https://github.com/user-attachments/assets/bb8f8bb1-d471-4317-96d7-48643cdf44df" />
            <img width=600 src="https://github.com/user-attachments/assets/26d108a1-cad3-46d1-ba7d-294a5e57c6d1" />

        2. [option1] double click the `.ccx` file if you have Adobe Creative Cloud. 
        3. [option2] rename `.ccx` to `.zip` and extract it into photoshop's `Plug-ins` directory or `Plug-ins/Generator` directory [like this](https://github.com/zombieyang/sd-ppp/assets/5595819/a86862bb-1e4e-45cb-a869-5c08edad47a8).
    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. click `Add Plugin` in UXP Develop Tool by selecting `plugins/photoshop/manifest.json`.

3. connect to ComfyUI in Photoshop

    <img width=300 src="https://github.com/user-attachments/assets/89c40c4c-d70f-4bcf-b0e1-d8067cd40d9c" />

   > If you cannot connect ComfyUI via `https`, use `http` instead

5. add get/send node in ComfyUI

    <img width="600" alt="Image" src="https://github.com/user-attachments/assets/fe5e1310-d53e-4f8a-a9ec-1b7de98af936" />


</details>

-----------------------------

## More Resources

[**ComfyUI Nodes Manual**](https://github.com/zombieyang/sd-ppp/wiki/All-ComfyUI-Nodes-Manual)

### ComfyUI workflows


| WebUI liked sample | Basic SDXL or Flux.dev | Lasso inpaint | Light Control | Regional Prompt |
| -- | -- | -- | -- | -- |
| <img width=200 src="https://cdn.openart.ai/workflow_thumbnails/GwQjoI1nEKDeKY2cuCn3/image_N54EETks_1744902042966_raw.jpg" /> | <img width=200 src="https://cdn.openart.ai/workflow_thumbnails/GwQjoI1nEKDeKY2cuCn3/image_njKwFHDd_1735096352026_raw.jpg" /> | <img width=200 src="https://github.com/user-attachments/assets/ec64430f-0e6d-41cf-9b62-99ea1d9ddf0d" /> | <img width=200 src="https://github.com/user-attachments/assets/1afd47be-dc76-4ab9-ac70-ab519050fe04" /> | <img width=200 src="https://github.com/user-attachments/assets/2e23d221-1f24-4e3f-acf4-124d3c4de7be" /> |
| [>OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/sdxl-with-sdwebui-like-interface/1ZAxkwHOZ9mUThgNgSYx) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-sdxl-by-ui-widgets-ui/2HTFV9wKjCmrmOJuVicZ) [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-fluxdev-by-ui-widgets-ui/OgNATIBYgoZhk5DHRwE4) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-lasso-inpaint-inpaint/p6rsG9IVzGk2OP7RoGVE) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-light-control/oNzznyLtfPPXQsEbeF4p) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-regional-prompt/R2RIyZxRw91KFEpN9MnI) |
| [> Quark夸克盘](https://pan.quark.cn/s/baba12eba90d) | [> Quark夸克盘](https://pan.quark.cn/s/baba12eba90d) | [> Quark夸克盘](https://pan.quark.cn/s/baba12eba90d) | [> Quark夸克盘](https://pan.quark.cn/s/baba12eba90d) | [> Quark夸克盘](https://pan.quark.cn/s/baba12eba90d) |

| SDPPP + Enricos Nodes | Flux全家桶 |
| -- | -- |
| <img width=200 src="https://cdn.openart.ai/workflow_thumbnails/9fmtq1rOJW3SQ63j4IXQ/image_fNPWrKgP_1732148698438_raw.jpg" /> |<img width=200 src="https://i0.hdslb.com/bfs/archive/0d3a63a059034c47742975c833ad4d59cb788687.jpg@320w_200h_1c_!web-space-index-myvideo.webp" /> |
| [@jeffufu](https://github.com/jeffufu) | [@猫咪老师Reimagined](https://space.bilibili.com/1054925384) |
| [> OpenArt.ai](https://openart.ai/workflows/qbWyplAHquJcPdw3Vjhr) | [> 百度盘](https://pan.baidu.com/s/1jlpCGXbBPO3pdWpSr0WW9Q?pwd=bwbx) |



### Video Tutorials
1. English

| Author | Link |
| -- | -- |
| zombieyang | =>[Youtube](https://youtu.be/hMYVTX0MmBs) |


2. 汉语
   
| Author | Link |
| -- | -- |
| zombieyang | =>[BiliBili](https://b23.tv/wR6Ppyc) |
| [BlueBomm](https://space.bilibili.com/17280004) | =>[BiliBili](https://www.bilibili.com/video/BV15bbpeWEf8/) |
| [猫咪老师](https://www.xiaohongshu.com/user/profile/59f1fcc411be101aba7f048f) | =>[Xiaohongshu](https://www.xiaohongshu.com/explore/6735c4a5000000001a01de1d?source=webshare&xhsshare=pc_web&xsec_token=AB38DXnYsvST_3h7a_hfNcXbzWw4LYyMmLuiFXFTt75kQ=&xsec_source=pc_share)|
| [猫咪老师](https://space.bilibili.com/1054925384) | =>[BiliBili](https://www.bilibili.com/video/BV17fs2ejE3s)|
| [鸡肉爱土豆](https://space.bilibili.com/403361177) | =>[BiliBili](https://www.bilibili.com/video/BV1shakevEbf)|
| [来真的](https://space.bilibili.com/590784254) | => [BiliBili](https://www.bilibili.com/video/BV1BoCnYqEPX)|
| [李心宝爱玩Ai](https://b23.tv/MLgsAxP) | => [BiliBili](https://b23.tv/cKGs17J)|

## Open Source declaration


## License  

This project is licensed under the **BSD 3-Clause License**. See the [LICENSE](LICENSE) file for details.  

**Note:** Some code segments of the Photoshop plugin are intentionally obfuscated but still fully compliant with BSD-3 terms. For specific details about the code obfuscation, refer to the [NOTICE](NOTICE) file in the project root directory.  

------

本项目遵循**BSD 3-Clause 许可证**。详见[LICENSE](LICENSE)文件。  

**注：** Photoshop插件的部分代码段虽然经过故意混淆处理，但仍完全符合BSD-3条款要求；关于代码混淆的具体说明，请参见项目根目录的[NOTICE](NOTICE)文件。  


## Thanks
@[AbdullahAlfaraj](https://github.com/AbdullahAlfaraj)
@[tianlang0704](https://github.com/tianlang0704)
@[猫咪老师](https://www.xiaohongshu.com/user/profile/59f1fcc411be101aba7f048f)

