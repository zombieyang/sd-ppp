# SD-PPP: Use Photoshop as your SD/ComfyUI's workspace

[![](https://dcbadge.limes.pink/api/server/https://discord.gg/9HeGjDvEmn?style=flat)](https://discord.gg/9HeGjDvEmn) | [![QQ group](https://img.shields.io/badge/QQ群密码是单数字-299257207-brightgreen.svg)](https://qm.qq.com/q/iQ6ydtJEGI) | ![GitHub Repo stars](https://img.shields.io/github/stars/zombieyang/sd-ppp) 

------ 
> ppp for Professional Photoshop Portal

this extension/custom_node is mainly focus on getting/sending elements from/to Photoshop in ComfyUI or SD. Let's manage your AI art by Photoshop.

I hope it can make Photoshop become the workspace of your SD/ComfyUI


#### SD/SDForge Showcase
    
<img width=600 src="https://github.com/zombieyang/sd-ppp/assets/5595819/e43a5b7d-a601-4733-9527-1005ec0fee63" />
<img width=600 src="https://github.com/zombieyang/sd-ppp/assets/5595819/fe64dd52-aa32-4cd9-b7b7-e39a7553899a" />

#### ComfyUI Showcase
    
<img width=600 src="https://github.com/zombieyang/sd-ppp/assets/5595819/69bb64a8-5865-44be-ac10-faf3d82ab97c" />
<img width=600 src="https://github.com/zombieyang/sd-ppp/assets/5595819/ae573b36-6f3e-43f2-9866-89216182665a" />

    
## How to install

<details>
<summary><b>ComfyUI</b></summary>

1. Use [ComfyManager](https://github.com/ltdrdata/ComfyUI-Manager) to install `sd-ppp` or clone this repository into `<your-comfy-directory>/custom_nodes`

    <img width=800 src="doc/image/comfymanager.png" />

2. install Photoshop plugin
    1. by CCX:
        1. download .ccx in ComfyUI's setting UI.

            <img width=600 src="https://github.com/user-attachments/assets/26d108a1-cad3-46d1-ba7d-294a5e57c6d1" />
        2. double click the `.ccx` file. OR rename it to `.zip` and extract it into photoshop's `Plug-ins` directory or `Plug-ins/Generator` directory [like this](https://github.com/zombieyang/sd-ppp/assets/5595819/a86862bb-1e4e-45cb-a869-5c08edad47a8).
    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. [optional] Run `npm install` and `npm build` in `photoshop` directory. (if you want to debug or modify the code)
        3. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

3. connect to comfyUI in Photoshop

    <img width=300 src="https://github.com/zombieyang/sd-ppp/assets/5595819/98c4f81d-100d-4393-af5e-feed67a1b822" />

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
        1. download .ccx in SDWebUI's setting tab.

            <img width=600 src="https://github.com/user-attachments/assets/82edecba-23fd-4dab-9027-214fbbdeed1e" />
        3. double click the `.ccx` file. OR rename it to `.zip` and extract it into photoshop's `Plug-ins` directory or `Plug-ins/Generator` directory [like this](https://github.com/zombieyang/sd-ppp/assets/5595819/a86862bb-1e4e-45cb-a869-5c08edad47a8).

    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. [optional] Run `npm install` and `npm build` in `photoshop` directory. (if you want to debug or modify the code)
        3. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

4. connect to Stable diffusion in Photoshop

    <img width=300 src="https://github.com/zombieyang/sd-ppp/assets/5595819/98c4f81d-100d-4393-af5e-feed67a1b822" />

5. Select a specific layer to get pictures from Photoshop in any image element.

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/02f559d8-19e0-409e-a4f2-42928abb6548" />
    2. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/43c95692-8c73-44ba-a516-78d3cb5e2e03" />
    3. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/da05e786-3562-4d43-b2c1-8783162c6fd7" />

6. select a specific layer to send pictures to Photoshop

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/60864fea-2ef0-4ada-8aca-4db3cf44598e" />

</details>

## Other showcase
0. live-painting
    
    <img width=400 src="https://github.com/user-attachments/assets/9e4fbb6e-67ff-45bf-8df0-47f7b692e522" />
1. inpaint
    
    <img width=400 src="https://github.com/user-attachments/assets/3a3da67e-003f-4838-b326-daa291353d31" />
2. controlnet
    
    <img width=400 src="https://github.com/user-attachments/assets/647757cc-4bdd-40f4-8956-6a399d9c0e2d" />
3. IC-light
    
    <img width=400 src="https://github.com/user-attachments/assets/24abf5de-dab1-4d84-bf9f-696cd09d8c5e" />
-----------------------------
### Tutorial

| Author | Link |
| -- | -- |
| zombieyang | =>[BiliBili](https://www.bilibili.com/video/BV1qBvse2ErN) |
| zombieyang | =>[Youtube](https://youtu.be/QUK1X_TbDjM?si=eGn61GsWlC942Doe) |
| [BlueBomm](https://space.bilibili.com/17280004) | =>[BiliBili](https://www.bilibili.com/video/BV15bbpeWEf8/) |

### Thanks
@AbdullahAlfaraj
@tianlang0704

-----------------------------

> attention: only PS 24.4.0+ is supported by now.
