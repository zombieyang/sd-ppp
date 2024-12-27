# SD-PPP: Use Photoshop as your A1111/ComfyUI's workspace

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/9HeGjDvEmn?style=flat)](https://discord.gg/9HeGjDvEmn) | [![QQ group](https://img.shields.io/badge/QQ%E9%A2%91%E9%81%93-SDPPP%E7%9A%84%E9%A2%91%E9%81%93-brightgreen.svg)](https://pd.qq.com/s/5m42umo28) | ![GitHub Repo stars](https://img.shields.io/github/stars/zombieyang/sd-ppp) 

------ 
## Photoshop Picture Portal for ComfyUI/SDWebUI/Forge

* ✅ Multi layer supported (including text layer/image layer)
* ✅ Multi document supported
* ✅ Multi Photoshop supported
* ✅ Work in specific region of your Document

> attention: only PS 24.4.0+ is supported.

## ComfyUI

**from v1.5.0**

![image](https://github.com/user-attachments/assets/5129833f-ccf2-46a7-a6fd-62068d1e6a24)

**from v1.2.0**

<img width=600 src="https://github.com/user-attachments/assets/d5d8f673-78d8-4d3f-9a7a-0a385b862951" />

## SDWebUI/Forge (No longer support in 1.6.0)

**from v1.2.0**

<img width=600 src="https://github.com/user-attachments/assets/b788c3f5-4ddc-460e-90de-93ff70c99307" />
      
## How to install

<details>
<summary><i>[click to expand]</i> <b>ComfyUI</b></summary>

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

    <img width=600 src="doc/image/in-comfy.png" />


</details>
<details>
<summary><i>[click to expand]</i> <b>SD-WebUI or SD-Forge</b></summary>

1. install in A1111's `extension` tab or clone this repository into `<your-sd-directory>/extensions`

    <img width=800 src="https://github.com/zombieyang/sd-ppp/assets/5595819/e19dc61a-0232-4fac-af61-5ba7c436a0eb" />

2. install Photoshop plugin
    1. by CCX:
        1. download `.ccx` in any getting/sending dialog or in SDWebUI's setting tab.

            <img width=600 src="https://github.com/user-attachments/assets/785707f6-edc8-4a53-b0f7-52e4780cf4a4" />

            ------

            <img width=600 src="https://github.com/user-attachments/assets/82edecba-23fd-4dab-9027-214fbbdeed1e" />
        2. [option1] double click the `.ccx` file if you have Adobe Creative Cloud. 
        3. [option2] rename `.ccx` to `.zip` and extract it into photoshop's `Plug-ins` directory or `Plug-ins/Generator` directory [like this](https://github.com/zombieyang/sd-ppp/assets/5595819/a86862bb-1e4e-45cb-a869-5c08edad47a8).

    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. [optional] Run `npm install` and `npm build` in `photoshop` directory. (if you want to debug or modify the code)
        3. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

4. connect to Stable diffusion in Photoshop

    <img width=300 src="https://github.com/user-attachments/assets/89c40c4c-d70f-4bcf-b0e1-d8067cd40d9c" />

5. Select a specific layer to get pictures from Photoshop in any image element.

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/02f559d8-19e0-409e-a4f2-42928abb6548" />
    2. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/43c95692-8c73-44ba-a516-78d3cb5e2e03" />
    3. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/da05e786-3562-4d43-b2c1-8783162c6fd7" />

6. select a specific layer to send pictures to Photoshop

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/60864fea-2ef0-4ada-8aca-4db3cf44598e" />

</details>

-----------------------------

## More Resources

[**ComfyUI Nodes Manual**](https://github.com/zombieyang/sd-ppp/wiki/All-ComfyUI-Nodes-Manual)

### ComfyUI workflows


| Basic SDXL or Flux.dev | Lasso inpaint | Light Control | Regional Prompt |
| -- | -- | -- | -- |
| <img width=200 src="https://cdn.openart.ai/workflow_thumbnails/GwQjoI1nEKDeKY2cuCn3/image_njKwFHDd_1735096352026_raw.jpg" /> | <img width=200 src="https://github.com/user-attachments/assets/ec64430f-0e6d-41cf-9b62-99ea1d9ddf0d" /> | <img width=200 src="https://github.com/user-attachments/assets/1afd47be-dc76-4ab9-ac70-ab519050fe04" /> | <img width=200 src="https://github.com/user-attachments/assets/2e23d221-1f24-4e3f-acf4-124d3c4de7be" /> |
| [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-sdxl-by-ui-widgets-ui/2HTFV9wKjCmrmOJuVicZ) [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-fluxdev-by-ui-widgets-ui/OgNATIBYgoZhk5DHRwE4) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-lasso-inpaint-inpaint/p6rsG9IVzGk2OP7RoGVE) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-light-control/oNzznyLtfPPXQsEbeF4p) | [> OpenArt.ai](https://openart.ai/workflows/tiger_vicious_50/photoshop-regional-prompt/R2RIyZxRw91KFEpN9MnI) |
| [> Quark夸克盘](https://pan.quark.cn/s/a0aaa54f4521) | [> Quark夸克盘](https://pan.quark.cn/s/79cb8c91ef29) | [> Quark夸克盘](https://pan.quark.cn/s/882e139fbcc8) | [> Quark夸克盘](https://pan.quark.cn/s/0f0474a2f194) |

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
| zombieyang | =>[Youtube](https://youtu.be/tQWqvpIuk_s) |
| zombieyang | =>[Youtube (some are outdated)](https://youtu.be/QUK1X_TbDjM?si=eGn61GsWlC942Doe) |

2. 汉语
   
| Author | Link |
| -- | -- |
| zombieyang | =>[BiliBili](https://www.bilibili.com/video/BV1kKUkYSEwK) |
| zombieyang | =>[BiliBili](https://www.bilibili.com/video/BV1npy5Y8E9j) |
| zombieyang | =>[BiliBili](https://www.bilibili.com/video/BV1nvWCeGEbK) |
| zombieyang | =>[BiliBili (部分过时)](https://www.bilibili.com/video/BV1qBvse2ErN) |
| [BlueBomm](https://space.bilibili.com/17280004) | =>[BiliBili](https://www.bilibili.com/video/BV15bbpeWEf8/) |
| [猫咪老师](https://www.xiaohongshu.com/user/profile/59f1fcc411be101aba7f048f) |=>[Xiaohongshu](https://www.xiaohongshu.com/explore/6735c4a5000000001a01de1d?source=webshare&xhsshare=pc_web&xsec_token=AB38DXnYsvST_3h7a_hfNcXbzWw4LYyMmLuiFXFTt75kQ=&xsec_source=pc_share)|
| [猫咪老师](https://space.bilibili.com/1054925384) |=>[BiliBili](https://www.bilibili.com/video/BV17fs2ejE3s)|
| [鸡肉爱土豆](https://space.bilibili.com/403361177) |=>[BiliBili](https://www.bilibili.com/video/BV1shakevEbf)|



## Thanks
@AbdullahAlfaraj
@tianlang0704
@猫咪老师
