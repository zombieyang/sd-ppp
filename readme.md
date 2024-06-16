# SD-PPP: Easily use photoshop in your StableDiffusion/ComfyUI
> ppp for Professional Photoshop transPorter

this extension/custom_node is mainly focus on getting/sending picture from/to Photoshop in ComfyUI or SD

<details>
<summary>ComfyUI Showcase</summary>
    
![comfy_get](https://github.com/zombieyang/sd-ppp/assets/5595819/69bb64a8-5865-44be-ac10-faf3d82ab97c)
![comfy_send](https://github.com/zombieyang/sd-ppp/assets/5595819/ae573b36-6f3e-43f2-9866-89216182665a)

</details>

<details>
<summary>SD/SDForge Showcase</summary>
    
![sd-get](https://github.com/zombieyang/sd-ppp/assets/5595819/e43a5b7d-a601-4733-9527-1005ec0fee63)
![sd-set](https://github.com/zombieyang/sd-ppp/assets/5595819/fe64dd52-aa32-4cd9-b7b7-e39a7553899a)

</details>
    
## How to install

<details>
<summary><b>ComfyUI</b></summary>

1. Use [ComfyManager](https://github.com/ltdrdata/ComfyUI-Manager) to install `sd-ppp` or clone this repository into `<your-comfy-directory>/custom_nodes`

    <img width=800 src="doc/image/comfymanager.png" />

2. install Photoshop plugin
    1. by CCX:
        1. download `http://<your-comfy-url>/extensions/sd-ppp/plugins/sd-ppp_PS.ccx`.
           > for example: `http://127.0.0.1:8188/extensions/sd-ppp/plugins/sd-ppp_PS.ccx`
       
        3. double click the `.ccx` file. Or place it into photoshop's plugin directory.
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
<summary><b>StableDiffusion or SD-Forge</b></summary>

1. install in SD's `extension` tab or clone this repository into `<your-sd-directory>/extensions`
    <img width=800 src="https://github.com/zombieyang/sd-ppp/assets/5595819/e19dc61a-0232-4fac-af61-5ba7c436a0eb" />

2. install Photoshop plugin
    1. by CCX:
        1. download `http://<your-sd-url>/file=extensions/sd-ppp/javascript/plugins/sd-ppp_PS.ccx`.
           > for example: `http://127.0.0.1:7860/file=extensions/sd-ppp/javascript/plugins/sd-ppp_PS.ccx`
        3. double click the `.ccx` file. Or place it into photoshop's plugin directory.
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

-----------------------------

### Ask for help
[Discord](https://discord.gg/5wmUQ3aZ)

### Concept
In contrast to the plugin that I contributed before [AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin](https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin), which "runs" the SD/Comfy in Photoshop. This tool provides another option that makes Photoshop a helper of SD/ComfyUI. Because I think SD/Comfy will keep growing fast in the future, it is hard to inject the entire SD/Comfy Ecology into Photoshop with a single plugin.

Still, shout out to AbdullahAlfaraj's plugin and I inherited some of the code using Photoshop's API in it.
