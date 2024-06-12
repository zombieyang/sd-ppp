# sd script init
from modules import script_callbacks
from modules.ui_components import ToolButton
from sdppp_python.sdppp import SDPPP
from sdppp_python.apis import consumeImageCache
import gradio as gr

refresh_symbol = '\U0001f504'  # 🔄
config_symbol = '\U0001F527'  # 🔧

def on_app_started(blocks: gr.Blocks, app):

    sdppp = SDPPP()
    sdppp.attach_to_SD(app)

    def update_layers_dropdown(origin):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        instance = sdppp.get_ps_instance()
        choices = instance.get_base_layers()
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_bounds_dropdown(origin):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        instance = sdppp.get_ps_instance()
        choices=instance.get_bounds_layers()
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_send_layers_dropdown(origin):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        instance = sdppp.get_ps_instance()
        choices = instance.get_set_layers()
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def sdppp_get(elem):
        res = consumeImageCache(elem.elem_id)
        return gr.Image.update(value=res)

    sdppp.all_images = all_images = dict()
    sdppp.all_galleries = all_galleries = dict()
    for k in blocks.blocks:
        elem = blocks.blocks[k]
        if elem.elem_id == '' or elem.elem_id == None: continue
        if isinstance(elem, gr.Image):
            all_images[elem.elem_id] = elem
        if isinstance(elem, gr.Gallery):
            all_galleries[elem.elem_id] = elem

    with blocks:
        with gr.Box(elem_id=f"sdppp_getter_dialog", elem_classes="popup-dialog") as sdppp_getter_dialog:
            with gr.Row():
                layers = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_layers", elem_id=f'sdppp_layers', interactive=True)
                update_layers = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_layers", tooltip=f"refresh sdppp layers")
                update_layers.click(update_layers_dropdown, inputs=[layers], outputs=[layers])
            with gr.Row():
                bounds = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_bounds", elem_id=f'sdppp_bounds', interactive=True)
                update_bounds = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_bounds", tooltip=f"refresh sdppp bounds")
                update_bounds.click(update_bounds_dropdown, inputs=[bounds], outputs=[bounds])
            with gr.Row():
                close = gr.Button('Save And Run Get', variant='secondary', elem_id=f'sdppp_getter_dialog_close')

        with gr.Box(elem_id=f"sdppp_sender_dialog", elem_classes="popup-dialog") as sdppp_sender_dialog:
            with gr.Row():
                send_layers = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_send_layers", elem_id=f'sdppp_send_layers', interactive=True)
                update_send_layers = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_send_layers", tooltip=f"refresh sdppp send layers")
                update_send_layers.click(update_send_layers_dropdown, inputs=[send_layers], outputs=[send_layers])
            with gr.Row():
                close = gr.Button('Save And Run Send', variant='secondary', elem_id=f'sdppp_sender_dialog_close')
        sdppp_getter_dialog.visible = False
        sdppp_sender_dialog.visible = False

        def registerGradioGlobalJSFunction(name, callback, elems):
            elem = gr.Button(f'sdppp_{name}', variant='secondary', elem_id=f'sdppp_{name}', visible=False).click(lambda: callback(*elems), inputs=[], outputs=elems)

        for i in all_images:
            elem = all_images[i]
            registerGradioGlobalJSFunction(f'get_image_{elem.elem_id}', sdppp_get, [elem])
            
        registerGradioGlobalJSFunction(f'show_getter_dialog', lambda i: sdppp_getter_dialog.update(visible=True), [sdppp_getter_dialog])
        registerGradioGlobalJSFunction(f'show_sender_dialog', lambda i: sdppp_sender_dialog.update(visible=True), [sdppp_sender_dialog])

        




script_callbacks.on_app_started(on_app_started)
