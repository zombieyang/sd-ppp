# SD-PPP: Use Photoshop as your A1111/ComfyUI's workspace

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/9HeGjDvEmn?style=flat)](https://discord.gg/9HeGjDvEmn) | [![QQ group](https://img.shields.io/badge/QQ群密码是单数字-299257207-brightgreen.svg)](https://qm.qq.com/q/iQ6ydtJEGI) | ![GitHub Repo stars](https://img.shields.io/github/stars/zombieyang/sd-ppp) 

------ 
> ppp for Professional Portal Protocol

### Communicate between Photoshop and ComfyUI/SDWebUI/Forge

* ✅ Multi layer supported (including text layer/image layer)
* ✅ Multi document supported
* ✅ Multi Photoshop supported
* ✅ Work in specific region of your Document

I hope it can make Photoshop become the workspace of your SD/ComfyUI


#### SDWebUI/Forge Showcase
    
<img width=600 src="https://github.com/user-attachments/assets/b788c3f5-4ddc-460e-90de-93ff70c99307" />

#### ComfyUI Showcase
    
<img width=600 src="https://github.com/user-attachments/assets/d5d8f673-78d8-4d3f-9a7a-0a385b862951" />

    
## How to install

<details>
<summary><b>ComfyUI</b></summary>

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
        2. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

3. connect to ComfyUI in Photoshop

    <img width=300 src="https://github.com/user-attachments/assets/89c40c4c-d70f-4bcf-b0e1-d8067cd40d9c" />

   > If you cannot connect ComfyUI via `https`, use `http` instead

5. add get/send node in ComfyUI

    <img width=600 src="doc/image/in-comfy.png" />


</details>
<details>
<summary><b>SD-WebUI or SD-Forge</b></summary>

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

## Other showcase
0. regional prompting
    
    [>> tutorial](https://github.com/zombieyang/sd-ppp/wiki/Tutorial:-regional-prompting-in-Photoshop-by-SD%E2%80%90PPP)
   
    <img width=600 src="https://github.com/user-attachments/assets/e7dac3ed-f292-4d4a-9a72-8774d5928607" />
2. live-painting
    
    <img width=400 src="https://github.com/user-attachments/assets/9e4fbb6e-67ff-45bf-8df0-47f7b692e522" />
3. controlnet
    
    <img width=400 src="https://github.com/user-attachments/assets/647757cc-4bdd-40f4-8956-6a399d9c0e2d" />
4. IC-light
    
    <img width=400 src="https://github.com/user-attachments/assets/24abf5de-dab1-4d84-bf9f-696cd09d8c5e" />
-----------------------------
### Tutorial

| Author | Link |
| -- | -- |
| zombieyang | =>[BiliBili](https://www.bilibili.com/video/BV1qBvse2ErN) |
| zombieyang | =>[Youtube](https://youtu.be/QUK1X_TbDjM?si=eGn61GsWlC942Doe) |
| [BlueBomm](https://space.bilibili.com/17280004) | =>[BiliBili](https://www.bilibili.com/video/BV15bbpeWEf8/) |
| [猫咪老师](https://www.xiaohongshu.com/user/profile/59f1fcc411be101aba7f048f) |=>[Xiaohongshu](https://www.xiaohongshu.com/explore/66f0efa0000000001b0205ca)|

* [ComfyUI Nodes Manual](https://github.com/zombieyang/sd-ppp/wiki/All-ComfyUI-Nodes-Manual)
* Sample work flows on my [Discord](https://discord.com/channels/983223079226470410/1277931809740689443)
### Thanks
@AbdullahAlfaraj
@tianlang0704

-----------------------------

> attention: only PS 24.4.0+ is supported by now.
