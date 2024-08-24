import numpy as np
import time
from nodes import LoadImage
from PIL import Image
from .apis import addImageCache
from .data import get_sd_document_data, get_special_get_bound_layer_options, get_special_get_layer_options, get_special_send_layer_options, get_special_send_bound_layer_options

def define_comfyui_nodes(sdppp):
    def validate_sdppp():
        if not sdppp.has_ps_instance():
            return 'Photoshop is not connected'
        return True

    def call_async_func_in_server_thread(coro, dontwait = False):
        handle = {
            'done': False,
            'result': None,
            'error': None
        }
        loop = sdppp.loop
        async def do_call():
            try: 
                handle['result'] = await coro
            except Exception as e:
                handle['error'] = e
            finally:
                handle['done'] = True
        loop.create_task(do_call())

        if not dontwait:
            while not handle['done']:
                pass
            if handle['error'] is not None:
                raise handle['error']
            else:
                return handle['result']
        else:
            return None

    class ParseLayerInfoNode:
        RETURN_TYPES = ("FLOAT", "INT", "INT", "INT", "INT")
        RETURN_NAMES = ("opacity", "center_x", "center_y", "bound_width", "bound_height")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_info": ("LAYER_INFO", {"default": None}),
                }
            }
        def action(self, layer_info):
            return (layer_info['opacity'], layer_info['center_x'], layer_info['center_y'], layer_info['bound_width'], layer_info['bound_height'])

    class GetDocumentNode:
        RETURN_TYPES = ("DOCUMENT", "BOUND")
        RETURN_NAMES = ("document", "canvas_bound")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            document_data_keys = document_data.keys()
            return {
                "required": {
                    "document_name": (list(document_data_keys), {"default": None, "tooltip": "select sd-ppp document"}),
                }
            }

        def action(self, document_name):
            return (document_name, {
                "document": document_name,
                "bound_name": '### The Canvas ###'
            })

    class GetLayerByIDNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            document_data_keys = document_data.keys()
            list_of_list_of_layers = [document_data[key]['layers'] for key in document_data_keys]
            return {
                "required": {
                    "document": ("DOCUMENT", {"default": None}),
                    "layer_nameid": ([
                        *get_special_get_layer_options(),
                        *(item['name'] for sublist in list_of_list_of_layers for item in sublist)
                    ], {"default": None, "tooltip": "select sd-ppp layer"}),
                }
            }
        
        def action(self, document, layer_nameid):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            result = call_async_func_in_server_thread(
                photoshopInstance.get_layer_info(document_identify=document, layer_identify=layer_nameid)
            )
            return ({
                "document": document,
                "layer_name": layer_nameid
            }, {
                "document": document,
                "bound_name": layer_nameid
            }, result)
        
    class GetLayersInGroupNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None}),
                }
            }
        
        def action(self, layer_or_group):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            document = layer_or_group['document']
            layer_or_group = layer_or_group['layer_name']

            result = call_async_func_in_server_thread(
                photoshopInstance.get_layers_in_group(document_identify=document, layer_identify=layer_nameid)
            )
            # return ([{ "document": document, "layer_name": item } for item in result['layer_identifies']], result['layer_identifies'], result['layer_infos'])
            if len(result['layer_identifies']) == 0:
                return (None, None, None)
            return (
                { "document": document, "layer_name": result['layer_identifies'][0] }, 
                { "document": document, "bound_name": result['layer_identifies'][0] }, 
                result['layer_infos'][0]
            )
        
    class GetLinkedLayersNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None}),
                }
            }
        
        def action(self, layer_or_group):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            document = layer_or_group['document']
            layer_or_group = layer_or_group['layer_name']

            result = call_async_func_in_server_thread(
                photoshopInstance.get_linked_layers(document_identify=document, layer_identify=layer_or_group)
            )
            # return ([{ "document": document, "layer_name": item } for item in result['layer_identifies']], result['layer_identifies'], result['layer_infos'])
            if len(result['layer_identifies']) == 0:
                return (None, None, None)
            return (
                { "document": document, "layer_name": result['layer_identifies'][0] }, 
                { "document": document, "bound_name": result['layer_identifies'][0] }, 
                result['layer_infos'][0]
            )
        
    class GetTextFromLayerNode:
        RETURN_TYPES = ("STRING",)
        RETURN_NAMES = ("text",)
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None}),
                },
                "optional": {
                    # compat combo selection type
                    "document": (list(document_data), {"default": False}),
                }
            }
        
        def action(self, layer_or_group, document = ""):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()
            if not isinstance(layer_or_group, str):
                document = layer_or_group['document']
                layer_or_group = layer_or_group['layer_name']

            text = call_async_func_in_server_thread(
                photoshopInstance.get_text(document_identify=document, layer_identify=layer_or_group)
            )
            return (text,)

    return {
        'SDPPP Get Document': GetDocumentNode,
        'SDPPP Get Layer By ID': GetLayerByIDNode,
        'SDPPP Get Linked Layers': GetLinkedLayersNode,
        'SDPPP Get Layers In Group': GetLayersInGroupNode,
        'SDPPP Get Text From Layer': GetTextFromLayerNode,

        'SDPPP Parse Layer Info': ParseLayerInfoNode,
    }
