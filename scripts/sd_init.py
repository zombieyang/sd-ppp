# sd script init
from modules import script_callbacks, shared
from modules.ui_components import ToolButton
from sdppp_python.sdppp import SDPPP
from sdppp_python.apis import consumeImageCache
from sdppp_python.data import get_sd_document_data, get_special_get_bound_layer_options, get_special_get_layer_options, get_special_send_layer_options, get_special_send_bound_layer_options
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

    def update_document_dropdown(origin):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        choices = list(get_sd_document_data().keys())
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_layers_dropdown(origin, document):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        choices = [*get_special_get_layer_options(), *(x['name'] for x in get_sd_document_data()[document]['layers'])]
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_bounds_dropdown(origin, document):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        choices = [*get_special_get_bound_layer_options(), *(x['name'] for x in get_sd_document_data()[document]['layers'])]
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_send_layers_dropdown(origin, document):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        choices = [*get_special_send_layer_options(), *(x['name'] for x in get_sd_document_data()[document]['layers'])]
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

    def update_send_bounds_dropdown(origin, document):
        if not sdppp.has_ps_instance():
            return ['==please connect SD in photoshop by sdppp first==']
        choices = [*get_special_send_bound_layer_options(), *(x['name'] for x in get_sd_document_data()[document]['layers'])]
        value = choices[0] if origin not in choices else origin
        return gr.Dropdown.update(choices=choices, value=value, interactive=True)

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
        with gr.Box(elem_id=f"sdppp_getter_dialog", elem_classes="popup-dialog") as sdppp_getter_dialog:
            with gr.Row():
                get_document = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_get_document", elem_id=f'sdppp_get_document', interactive=True)
                update_get_document = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_get_document", tooltip=f"refresh sdppp documents")
                update_get_document.click(update_document_dropdown, inputs=[get_document], outputs=[get_document])
            with gr.Row():
                layers = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_layers", elem_id=f'sdppp_layers', interactive=True)
                update_layers = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_layers", tooltip=f"refresh sdppp layers")
                update_layers.click(update_layers_dropdown, inputs=[layers, get_document], outputs=[layers])
                get_document.change(update_layers_dropdown, inputs=[layers, get_document], outputs=[layers])
            with gr.Row():
                bounds = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_bounds", elem_id=f'sdppp_bounds', interactive=True)
                update_bounds = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_bounds", tooltip=f"refresh sdppp bounds")
                update_bounds.click(update_bounds_dropdown, inputs=[bounds, get_document], outputs=[bounds])
                get_document.change(update_bounds_dropdown, inputs=[bounds, get_document], outputs=[bounds])
            with gr.Row():
                close = gr.Button('Save And Run Get', variant='secondary', elem_id=f'sdppp_getter_dialog_close')

        with gr.Box(elem_id=f"sdppp_sender_dialog", elem_classes="popup-dialog") as sdppp_sender_dialog:
            with gr.Row():
                send_document = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_send_document", elem_id=f'sdppp_send_document', interactive=True)
                update_send_document = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_send_document", tooltip=f"refresh sdppp documents")
                update_send_document.click(update_document_dropdown, inputs=[send_document], outputs=[send_document])
            with gr.Row():
                send_layers = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_send_layers", elem_id=f'sdppp_send_layers', interactive=True)
                update_send_layers = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_send_layers", tooltip=f"refresh sdppp send layers")
                update_send_layers.click(update_send_layers_dropdown, inputs=[send_layers, send_document], outputs=[send_layers])
                send_document.change(update_send_layers_dropdown, inputs=[send_layers, send_document], outputs=[send_layers])
            with gr.Row():
                send_bounds = gr.Dropdown(choices=['==please connect SD in photoshop by sdppp first=='], label="sdppp_send_bounds", elem_id=f'sdppp_send_bounds', interactive=True)
                update_send_bounds = ToolButton(value=refresh_symbol, elem_id="refresh_sdppp_send_bounds", tooltip=f"refresh sdppp send bounds")
                update_send_bounds.click(update_send_bounds_dropdown, inputs=[send_bounds, send_document], outputs=[send_bounds])
                send_document.change(update_send_bounds_dropdown, inputs=[send_bounds, send_document], outputs=[send_bounds])
            with gr.Row():
                close = gr.Button('Save And Run Send', variant='secondary', elem_id=f'sdppp_sender_dialog_close')
        sdppp_getter_dialog.visible = False
        sdppp_sender_dialog.visible = False

        def registerGradioGlobalJSFunction(name, callback, elems):
            elem = gr.Button(f'sdppp_{name}', variant='secondary', elem_id=f'sdppp_{name}', visible=False).click(lambda: callback(*elems), inputs=[], outputs=elems)

        for i in all_images:
            elem = all_images[i]
            registerGradioGlobalJSFunction(f'get_image_{elem.elem_id}', sdppp_get, [elem])
        for i in all_forge_input:
            elem = all_forge_input[i]
            registerGradioGlobalJSFunction(f'get_image_forge_{elem.elem_id}', sdppp_get_forge, [elem])
            
        registerGradioGlobalJSFunction(f'show_getter_dialog', lambda i: sdppp_getter_dialog.update(visible=True), [sdppp_getter_dialog])
        registerGradioGlobalJSFunction(f'show_sender_dialog', lambda i: sdppp_sender_dialog.update(visible=True), [sdppp_sender_dialog])


script_callbacks.on_app_started(on_app_started)


shared.options_templates.update(
    shared.options_section(('sd-ppp', "SD-PPP", "ui"), {
        "sd-ppp_download": shared.OptionInfo([], "Download PS plugin", gr.Button)
    })
)
