# SD-PPP  Photoshop Helper for ComfyUI

## How to use
1. Use ComfyManager to install sd-ppp

    ![cmanager](doc/image/comfymanager.png)

2. install photoshop plugin
    1. by CXX:
        1. download `http://<your-comfy-url>/extensions/sd-ppp/sd-ppp_PS.ccx`.
        2. double click it. Or place it to the photoshop plugin directory.
    2. by UXP develop Tool (you can debug the code by this way):
        1. clone this repository
        2. run `npm install` and `npm build` in `photoshop` directory.
        3. add plugin in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

3. connect to comfyUI in Photoshop

    ![connect](doc/image/connect.png)

4. add get/send node in ComfyUI

    ![in-comfy](doc/image/in-comfy.png)

    > in current version, each time you add/remove layer in Photoshop, you need to refresh the ComfyUI webpage to get the new layer names for selecting.


### Thanks to 
AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin
