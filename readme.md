# SD-PPP: Photoshop Helper for ComfyUI

## How to use
1. Use ComfyManager to install `sd-ppp`

    ![cmanager](doc/image/comfymanager.png)

2. install Photoshop plugin
    1. by CCX:
        1. download `http://<your-comfy-url>/extensions/sd-ppp/plugins/sd-ppp_PS.ccx`. (for example: `http://127.0.0.1:8188/extensions/sd-ppp/plugins/sd-ppp_PS.ccx`)
        2. double click the `.ccx` file. Or place it into photoshop's plugin directory.
    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. [optional] Run `npm install` and `npm build` in `photoshop` directory. (if you want to debug or modify the code)
        3. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

3. connect to comfyUI in Photoshop

    ![connect](doc/image/connect.png)

   > if your comfyUI is running locally. make sure you are using `http` instead of `https`

5. add get/send node in ComfyUI

    ![in-comfy](doc/image/in-comfy.png)

## Ask for help
[Discord](https://discord.gg/5wmUQ3aZ)

### Thanks to 
AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin
