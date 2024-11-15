# sd script init
from modules import script_callbacks, shared
from modules.ui_components import ToolButton
from sdppp_python.sdppp import SDPPP
from sdppp_python.apis import consumeImageCache
import gradio as gr
try:
    from modules_forge.forge_canvas.canvas import LogicalImage
    inForge = True
except:
    inForge = False
    pass

refresh_symbol = '\U0001f504'  # 🔄
config_symbol = '\U0001F527'  # 🔧

def on_app_started(blocks: gr.Blocks, app):

    sdppp = SDPPP()
    sdppp.attach_to_SD(app)

    def sdppp_get(elem):
        res = consumeImageCache(elem.elem_id)
        return gr.Image.update(value=res)
    
    def sdppp_get_forge(elem):
        res = consumeImageCache(elem.elem_id)
        # maybe a convert to base64 is needed
        return gr.Textbox.update(value=res)

    sdppp.all_images = all_images = dict()
    sdppp.all_galleries = all_galleries = dict()
    sdppp.all_forge_input = all_forge_input = dict()
    for k in blocks.blocks:
        elem = blocks.blocks[k]
        if elem.elem_id == '' or elem.elem_id == None: continue
        if isinstance(elem, gr.Image):
            all_images[elem.elem_id] = elem
        if isinstance(elem, gr.Gallery):
            all_galleries[elem.elem_id] = elem
        if inForge and isinstance(elem, LogicalImage) and elem.label == 'background':
            all_forge_input[elem.elem_id] = elem
    with blocks:
        with gr.Box(elem_id=f"sdppp_dialog", elem_classes="popup-dialog") as sdppp_dialog:
            with gr.Row():
                pass
            
script_callbacks.on_app_started(on_app_started)
# shared.options_templates.update(
#     shared.options_section(('sd-ppp', "SD-PPP", "ui"), {
#         "sd-ppp_download": shared.OptionInfo([], "Download PS plugin", gr.Button)
#     })
# )
