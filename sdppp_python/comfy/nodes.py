import numpy as np
import time
import torch
import json
from ..protocols.photoshop import ProtocolPhotoshop
from PIL import Image, ImageOps, ImageSequence, ImageFile, ImageDraw

def sdppp_is_changed(sdppp, sdppp_arg, document_arg, key):
    document_instance_id = None
    try:
        sdppp_values = json.loads(sdppp_arg)
        if document_arg != '' and ('document' not in sdppp_values or sdppp_values['document'] == ''):
            document = json.loads(document_arg)
            document_instance_id = document['instance_id']
        else:
            document_instance_id = sdppp_values['document']['instance_id']
        return sdppp.ppp_instances[document_instance_id].store.data[key]
    except Exception as e:
        print('=============sdppp_is_changed error============', e)
        # print(sdppp_arg)
        # print(document_arg)
        return np.random.rand()

# def SDPPPOptional(visible_dict, hidden_dict):
#     visible_dict.__contains__ = lambda key: key in visible_dict.keys() or key in hidden_dict.keys()
#     visible_dict.__getitem__ = lambda key: visible_dict[key] if key in visible_dict.keys() else hidden_dict[key]
#     return visible_dict

class SDPPPOptional(dict):
    def __init__(self, visible_dict, optional_dict):
        super().__init__()
        # self.contains_key_arr = args[0] # list of keys that can be existed in the dict
        self.optional_dict = optional_dict
        self.visible_dict = visible_dict
        for key in self.visible_dict.keys():
            self[key] = self.visible_dict[key]
            
    def __contains__(self, key):
        return key in self.visible_dict.keys() or key in self.optional_dict.keys()

    def __getitem__(self, key):
        if key in self.visible_dict.keys():
            return self.visible_dict[key]
        return self.optional_dict[key]

class SDPPPMagicArray(list):
    def __contains__(self, key):
        return True

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

def convert_boundary_to_mask(boundary):
    left = boundary['left']
    top = boundary['top']
    right = boundary['right']
    bottom = boundary['bottom']
    width = boundary['width']
    height = boundary['height']

    # Create higher precision image (using 32-bit float instead of 8-bit integer)
    # Directly create numpy array instead of PIL image
    image = np.zeros((height + top + bottom, width + left + right), dtype=np.float32)
    # Fill rectangular area
    image[top:top+height, left:left+width] = 1.0
    
    # Convert to torch tensor
    mask = torch.from_numpy(image)
    output_mask = mask.unsqueeze(0)

    # Store original boundary information as metadata
    output_mask.boundary_info = boundary.copy()

    return output_mask

def convert_mask_to_boundary(mask):
    if mask is None or mask == '':
        return None
    
    # Check if there's stored original boundary information
    if hasattr(mask, 'boundary_info'):
        return mask.boundary_info
    
    # If no original information, use more precise method to calculate boundary
    # Use floating point threshold instead of integer conversion
    mask_np = mask.squeeze(0).numpy()
    
    # Use more precise threshold to find non-zero regions
    # Avoid rounding errors
    threshold = 0.5 / 255.0  # Use very small threshold
    y_indices, x_indices = np.where(mask_np > threshold)
    
    if len(y_indices) == 0 or len(x_indices) == 0:
        return None
    
    left = np.min(x_indices)
    top = np.min(y_indices)
    right = mask_np.shape[1] - np.max(x_indices) - 1
    bottom = mask_np.shape[0] - np.max(y_indices) - 1
    width = np.max(x_indices) - left + 1
    height = np.max(y_indices) - top + 1
    
    return {
        'left': int(left),
        'top': int(top),
        'width': int(width),
        'height': int(height),
        'right': int(right),
        'bottom': int(bottom),
    }

def define_comfyui_nodes(sdpppServer):
    def call_async_func_in_server_thread(coro, dontwait = False):
        handle = {
            'done': False,
            'result': None,
            'error': None
        }
        loop = sdpppServer.loop
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
        RETURN_TYPES = ("FLOAT", "INT", "INT", "INT", "INT", "STRING")
        RETURN_NAMES = ("opacity", "bound_left", "bound_top", "bound_width", "bound_height", "name")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, layer_info, **kwargs):
            return json.dumps(layer_info)

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_info": ("LAYER_INFO", {"default": None, "sdppp_type": "LAYER_INFO"}),
                },
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                })
            }

        def action(self, layer_info, **kwargs):
            return (
                layer_info['opacity'], 
                layer_info['boundary']['left'], 
                layer_info['boundary']['top'], 
                layer_info['boundary']['width'], 
                layer_info['boundary']['height'],
                layer_info['name']
            )

    class GetDocumentNode:
        RETURN_TYPES = ("DOCUMENT", "MASK", "MASK")
        RETURN_NAMES = ("document", "document boundary", "selection boundary")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, document_name, **kwargs):
            document = json.loads(document_name)
            return f"{document['identify']}_{document['selectionDirtyID']}"
                        
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document_name": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"})
                },
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                })
            }

        def action(self, document_name, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)

            document = json.loads(document_name)
            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_document_info(
                    instance_id=document['instance_id'], 
                    document_identify=document['identify']
                )
            )

            return (
                document, 
                convert_boundary_to_mask(result['document_boundary']), 
                convert_boundary_to_mask(result['selection_boundary'])
            )

    class GetLayerNode:
        RETURN_TYPES = ("LAYER", "MASK", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer boundary", "layer_info")
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, layer_or_group, **kwargs):
            layer = json.loads(layer_or_group)
            return f"{layer['identify']}_{layer['dirtyID']}"

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document": ("DOCUMENT", {"default": None, "sdppp_type": "DOCUMENT"}),
                    "layer_or_group": ("STRING", {"default": "", "sdppp_type": "LAYER_select"})
                },
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, document, layer_or_group, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)
            layer = json.loads(layer_or_group)

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_layer_info(
                    instance_id=document['instance_id'], 
                    document_identify=document['identify'], 
                    layer_identify=layer['identify']
                )
            )
                
            return ({
                "document": document,
                "layer_identify": result['identify'],
                "dirtyID": layer['dirtyID']
            }, convert_boundary_to_mask(result['boundary']), result)
        
    class GetLayersInGroupNode:
        RETURN_TYPES = ("LAYER", "MASK", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_boundary", "layer_info")
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
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, layer_or_group, select, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)

            document = layer_or_group[0]['document']
            layer_identifies = [item['layer_identify'] for item in layer_or_group]

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_layers_in_group(
                    instance_id=document['instance_id'],
                    document_identify=document['identify'], 
                    select=select[0],
                    layer_identifies=layer_identifies
                )
            )
            return (
                [{ "document": document, "layer_identify": item } for item in result['layer_identifies']], 
                [convert_boundary_to_mask(item) for item in result['layer_boundaries']], 
                result['layer_infos']
            )
        
    class GetLinkedLayersNode:
        RETURN_TYPES = ("LAYER", "MASK", "LAYER_INFO")
        RETURN_NAMES = ("layer_or_group", "layer_boundary", "layer_info")
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
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                })
            }
        
        def action(self, layer_or_group, select, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)

            document = layer_or_group[0]['document']
            layer_identifies = [item['layer_identify'] for item in layer_or_group]

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_linked_layers(
                    instance_id=document['instance_id'],
                    document_identify=document['identify'], 
                    select=select[0],
                    layer_identifies=layer_identifies
                )
            )
            return (
                [{ "document": document, "layer_identify": item } for item in result['layer_identifies']], 
                [convert_boundary_to_mask(item) for item in result['layer_boundaries']], 
                result['layer_infos']
            )

    class GetSelectionNode:
        RETURN_TYPES = ("MASK",)
        RETURN_NAMES = ("mask",)
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            sdppp_arg = kwargs['sdppp']
            document_arg = kwargs['document']
            return sdppp_is_changed(sdpppServer, sdppp_arg, document_arg, 'selectionStateID')

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "document": ("DOCUMENT", {"default": None, "sdppp_type": "DOCUMENT"}),
                },
                "optional": SDPPPOptional({
                    "bound": ('MASK', {"default": None}),
                }, {
                    "sdppp": ("STRING", {"default": ""}),
                }),
                "hidden": {
                    "unique_id": "UNIQUE_ID",
                    "prompt": "PROMPT", 
                }
            }
        
        def action(self, document, bound="", **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)

            result = call_async_func_in_server_thread(
                ProtocolPhotoshop.get_selection(
                    instance_id=document['instance_id'],
                    document_identify=document['identify'],
                    boundary=convert_mask_to_boundary(bound),
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

    # class SendTextToLayerNode:
    #     RETURN_TYPES = ("DOCUMENT",)
    #     OUTPUT_NODE = True
    #     FUNCTION = "action"
    #     CATEGORY = "SD-PPP"

    #     @classmethod
    #     def IS_CHANGED(self, **kwargs):
    #         return np.random.rand()

    #     @classmethod
    #     def INPUT_TYPES(cls):
    #         return {
    #             "required": {
    #                 "text": ('STRING', {"sdppp_type": "STRING"}),
    #                 "layer": ('LAYER', {"default": None, "sdppp_type": "LAYER"}),
    #             },
    #             "optional": SDPPPOptional({}, {
    #                 "sdppp": ("STRING", {"default": ""})
    #             }),
    #             "hidden": {
    #                 "unique_id": "UNIQUE_ID",
    #                 "prompt": "PROMPT", 
    #             }
    #         }

    #     def action(self, text, layer, **kwargs):
    #         sdpppServer.has_ps_instance(throw_error=True)
            
    #         document = layer['document']

    #         call_async_func_in_server_thread(ProtocolPhotoshop.send_text(
    #             instance_id=document['instance_id'],
    #             document_identify=document['identify'], 
    #             text=text,  
    #             layer_identify=layer['layer_identify'],
    #         ), True)

    #         return (document, )
        
    class GetTextFromLayerNode:
        RETURN_TYPES = ("STRING",)
        RETURN_NAMES = ("text",)
        OUTPUT_IS_LIST = (True,)
        INPUT_IS_LIST = True
        FUNCTION = "action"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, layer_or_group, **kwargs):
            return 1

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None, "sdppp_type": "LAYER"}),
                },
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""}),
                    "document": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"})
                }),
                "hidden": {
                    "unique_id": "UNIQUE_ID",
                    "prompt": "PROMPT", 
                }
            }
        
        def action(self, layer_or_group, unique_id, prompt, document = None, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)

            document = layer_or_group[0]['document']

            res_text = []
            for i, item_layer in enumerate(layer_or_group):
                item_layer = item_layer['layer_identify']

                text = call_async_func_in_server_thread(
                    ProtocolPhotoshop.get_text(
                        instance_id=document['instance_id'],
                        document_identify=document['identify'], 
                        layer_identify=item_layer
                    )
                )
                res_text.append(text)
            
            return (res_text,)

    class SelectLayerAndRunPSActionNode:
        RETURN_TYPES = ("LAYER",)
        RETURN_NAMES = ("layer_or_group",)
        INPUT_IS_LIST = False
        FUNCTION = "action"
        CATEGORY = "SD-PPP"
        OUTPUT_NODE = True

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()

        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ("LAYER", {"default": None, "sdppp_type": "LAYER"}),
                    "action": (SDPPPMagicArray([]), {"default": ''}),
                },
                "optional": SDPPPOptional({}, {
                    "sdppp": ("STRING", {"default": ""})
                })
            }
        
        def action(self, layer_or_group, action, **kwargs):
            sdpppServer.has_ps_instance(throw_error=True)
            
            start_time = time.time()
            result = call_async_func_in_server_thread(ProtocolPhotoshop.run_photoshop_action(
                instance_id=layer_or_group['document']['instance_id'],
                document_identify=layer_or_group['document']['identify'],
                layer_identify=layer_or_group['layer_identify'], 
                action=action
            ))
            return (layer_or_group, )

        
        

    # class SDPPPSettingsNode:
    #     RETURN_TYPES = ()
    #     FUNCTION = "action"
    #     CATEGORY = "SD-PPP"

    #     @classmethod
    #     def INPUT_TYPES(cls):
    #         return { 
    #             "required": {
    #                 "document": ("DOCUMENT", {"default": None, "sdppp_type": "DOCUMENT"}),
    #             }
    #         }

    #     def action(self, key, **kwargs):
    #         return (None,)

    return {
        'SDPPP Get Document': GetDocumentNode,
        'SDPPP Get Layer By ID': GetLayerNode,
        'SDPPP Get Linked Layers': GetLinkedLayersNode,
        'SDPPP Get Layers In Group': GetLayersInGroupNode,
        'SDPPP Get Text From Layer': GetTextFromLayerNode,
        # 'SDPPP Send Text To Layer': SendTextToLayerNode,
        'SDPPP Get Selection': GetSelectionNode,
        'SDPPP Parse Layer Info': ParseLayerInfoNode,
        'SDPPP Select Layer And Run PS Action': SelectLayerAndRunPSActionNode,
        # 'SDPPP Settings': SDPPPSettingsNode,
    }
