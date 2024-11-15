import numpy as np
import time
import torch
import json
from ..protocols.photoshop import ProtocolPhotoshop
from PIL import Image, ImageOps, ImageSequence, ImageFile

class SDPPPOptional(dict):
    def __init__(self, optional_dict):
        super().__init__()
        # self.contains_key_arr = args[0] # list of keys that can be existed in the dict
        self.contains_key_arr = optional_dict.keys()
        self.optional_dict = optional_dict

    def __contains__(self, key):
        return key in self.contains_key_arr

    def __getitem__(self, key):
        
        if key in self.contains_key_arr:
            return self.optional_dict[key]
        return None

def check_linked_in_prompt(prompt, unique_id, name):
    node_prompt = prompt[0][unique_id[0]]
    return isinstance(node_prompt['inputs'][name], list)

def sdppp_get_prompt_item_from_list(l, index):
    if not isinstance(l, list):
        return l
    if len(l) <= index:
        index = 0

    if len(l) == 0:
        return ''
    elif len(l) == 1:
        return l[0]
    else:
        return l[index]

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
        RETURN_NAMES = ("opacity", "bound_left", "bound_top", "bound_width", "bound_height")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_info": ("LAYER_INFO", {"default": None, "sdppp_type": "LAYER_INFO"}),
                }
            }

        def action(self, layer_info):
            return (layer_info['opacity'], layer_info['bound_left'], layer_info['bound_top'], layer_info['bound_width'], layer_info['bound_height'])

    class GetDocumentNode:
        RETURN_TYPES = ("DOCUMENT", "BOUND", "BOUND")
        RETURN_NAMES = ("document", "document boundary", "selection boundary")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document_name": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"})
                }
            }

        def action(self, document_name):
            document = json.loads(document_name)
            return (document, '### The Canvas ###', '### Selection ###')

    class GetLayerNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document": ("DOCUMENT", {"default": None, "sdppp_type": "DOCUMENT"}),
                    "layer_or_group": ("STRING", {"default": "", "sdppp_type": "LAYER_select"})
                },
                "optional": SDPPPOptional({
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, document, layer_or_group, **kwargs):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_layer_info(
                    sdppp.backend_instances[document['instance_id']], 
                    document['identify'], 
                    layer_identify=layer_or_group
                )
            )
                
            return ({
                "document": document,
                "layer_identify": result['identify']
            }, result['identify'], result)
        
    class GetLayersInGroupNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        OUTPUT_IS_LIST = (True, True, True)
        INPUT_IS_LIST = True
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None, "sdppp_type": "LAYER"}),
                    "select": (['all', 'text', 'image', 'first'], {"default": "all"}),
                },
                "optional": SDPPPOptional({
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, layer_or_group, select, **kwargs):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')

            document = layer_or_group[0]['document']
            layer_identifies = [item['layer_identify'] for item in layer_or_group]

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_layers_in_group(
                    backend_instance=sdppp.backend_instances[document['instance_id']],
                    document_identify=document['identify'], 
                    select=select[0],
                    layer_identifies=layer_identifies
                )
            )
            return (
                [{ "document": document, "layer_identify": item } for item in result['layer_identifies']], 
                result['layer_identifies'], 
                result['layer_infos']
            )
        
    class GetLinkedLayersNode:
        RETURN_TYPES = ("LAYER", "BOUND", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_bound", "layer_info")
        OUTPUT_IS_LIST = (True, True, True)
        INPUT_IS_LIST = True
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None, "sdppp_type": "LAYER"}),
                    "select": (['all', 'text', 'image', 'first'], {"default": "all"}),
                },
                "optional": SDPPPOptional({
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, layer_or_group, select, **kwargs):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')

            document = layer_or_group[0]['document']
            layer_identifies = [item['layer_identify'] for item in layer_or_group]

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_linked_layers(
                    backend_instance=sdppp.backend_instances[document['instance_id']],
                    document_identify=document['identify'], 
                    select=select[0],
                    layer_identifies=layer_identifies
                )
            )
            return (
                [{ "document": document, "layer_identify": item } for item in result['layer_identifies']], 
                result['layer_identifies'], 
                result['layer_infos']
            )


    class GetSelectionNode:
        RETURN_TYPES = ("MASK",)
        RETURN_NAMES = ("mask",)
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document": ("DOCUMENT", {"default": None, "sdppp_type": "DOCUMENT"}),
                },
                "optional": {
                    "bound": ('BOUND', {"default": None}),
                }
            }
        
        def action(self, document, bound="", **kwargs):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_selection(
                    backend_instance=sdppp.backend_instances[document['instance_id']],
                    document_identify=document['identify'],
                    bound_identify=bound,
                )
            )
            return self._load_mask(
                result['blob'],
                result['width'],
                result['height']
            )

        # modify from Comfyui/nodes.py LoadImage
        def _load_mask(self, imagebuffer, width, height):
            output_images = []
            output_masks = []
            w, h = None, None

            excluded_formats = ['MPO']
            
            image_mode = "L"

            i = Image.frombytes(image_mode, (width, height), imagebuffer, "raw")
            
            if i.mode == 'I':
                i = i.point(lambda i: i * (1 / 255))

            if len(output_images) == 0:
                w = i.size[0]
                h = i.size[1]
                
            if i.size[0] != w or i.size[1] != h:
                return (None, )
            mask = np.array(i.getchannel('L')).astype(np.float32) / 255.0
            mask = torch.from_numpy(mask)
            output_mask = mask.unsqueeze(0)

            return (output_mask, )

        
    class GetTextFromLayerNode:
        RETURN_TYPES = ("STRING",)
        RETURN_NAMES = ("text",)
        OUTPUT_IS_LIST = (True,)
        INPUT_IS_LIST = True
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None, "sdppp_type": "LAYER"}),
                },
                "optional": {
                    "document": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"})
                },
                "hidden": {
                    "unique_id": "UNIQUE_ID",
                    "prompt": "PROMPT", 
                }
            }
        
        def action(self, layer_or_group, unique_id, prompt, document = None, **kwargs):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')

            linked_style = check_linked_in_prompt(prompt, unique_id, 'layer_or_group')
            if not linked_style:
                document = json.loads(document)
            else:
                document = layer_or_group[0]['document']
                
            if document['instance_id'] not in sdppp.backend_instances:
                raise ValueError(f'Photoshop instance {document["instance_id"]} not found')

            res_text = []
            for i, item_layer in enumerate(layer_or_group):
                if linked_style:
                    item_layer = item_layer['layer_identify']

                text = call_async_func_in_server_thread(
                    ProtocolPhotoshop.get_text(
                        backend_instance=sdppp.backend_instances[document['instance_id']],
                        document_identify=document['identify'], 
                        layer_identify=item_layer
                    )
                )
                res_text.append(text)
            
            return (res_text,)

    return {
        'SDPPP Get Document': GetDocumentNode,
        'SDPPP Get Layer By ID': GetLayerNode,
        'SDPPP Get Linked Layers': GetLinkedLayersNode,
        'SDPPP Get Layers In Group': GetLayersInGroupNode,
        'SDPPP Get Text From Layer': GetTextFromLayerNode,
        'SDPPP Get Selection': GetSelectionNode,

        'SDPPP Parse Layer Info': ParseLayerInfoNode,
    }
