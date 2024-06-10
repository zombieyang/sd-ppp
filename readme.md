# SD-PPP: Easily use photoshop in your StableDiffusion/ComfyUI
> ppp for Professional Photoshop transPorter 

## How to use

<details>
<summary><b>ComfyUI</b></summary>

1. Use [ComfyManager](https://github.com/ltdrdata/ComfyUI-Manager) to install `sd-ppp` or clone this repository into `<your-comfy-directory>/custom_nodes`

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

   > If you cannot connect ComfyUI via `https`, use `http` instead

5. add get/send node in ComfyUI

    ![in-comfy](doc/image/in-comfy.png)
</details>
<details>
<summary><b>StableDiffusion or SD-Forge</b></summary>

1. install in `extension` tab or clone this repository into `<your-sd-directory>/extensions`

2. install Photoshop plugin
    1. by CCX:
        1. download `http://<your-sd-url>/file=extensions/sd-ppp/javascript/plugins/sd-ppp_PS.ccx`. (for example: `http://127.0.0.1:7860/file=extensions/sd-ppp/javascript/plugins/sd-ppp_PS.ccx`)
        2. double click the `.ccx` file. Or place it into photoshop's plugin directory.
    2. by UXP develop Tool (you can debug the code this way):
        1. clone this repository
        2. [optional] Run `npm install` and `npm build` in `photoshop` directory. (if you want to debug or modify the code)
        3. click `Add Plugin` in UXP Develop Tool by selecting `photoshop/dist/manifest.json`.

4. connect to Stable diffusion in Photoshop

    ![image](https://github.com/zombieyang/sd-ppp/assets/5595819/98c4f81d-100d-4393-af5e-feed67a1b822)

5. Select a specific layer to get pictures from Photoshop in any image element.

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/02f559d8-19e0-409e-a4f2-42928abb6548" />
    2. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/43c95692-8c73-44ba-a516-78d3cb5e2e03" />
    3. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/da05e786-3562-4d43-b2c1-8783162c6fd7" />

6. select a specific layer to send pictures to Photoshop

    1. <img width=400 src="https://github.com/zombieyang/sd-ppp/assets/5595819/60864fea-2ef0-4ada-8aca-4db3cf44598e" />
    
</details>

## Ask for help
[Discord](https://discord.gg/5wmUQ3aZ)

## Concept
I think SD/Comfy will keep growing fast in the future. So, instead of running SD/Comfy in Photoshop, this tool provides a option that make Photoshop become a widget of SD/ComfyUI. To help you use SD/ComfyUI more easily.

### Thanks to 
AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin
