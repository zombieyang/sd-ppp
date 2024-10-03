<<<<<<< HEAD:sdppp_python/comfy_nodes_legacy.py
import numpy as np
from nodes import LoadImage
from PIL import Image
from .apis import addImageCache
from .data import get_sd_document_data, get_special_get_bound_layer_options, get_special_get_layer_options, get_special_send_layer_options

def define_comfyui_nodes_legacy(sdppp):
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


    class GetImageFromPhotoshopLayerNode:

        @classmethod
        def VALIDATE_INPUTS(s):
            return validate_sdppp()
        
        @classmethod
        def IS_CHANGED(self, layer_or_group, bound, document=""):
            if not sdppp.has_ps_instance():
                return np.random.rand()
            else:
                photoshopInstance = sdppp.get_ps_instance()
                is_changed, history_state_id = call_async_func_in_server_thread(
                    photoshopInstance.check_layer_bounds_combo_changed(layer, bound)
                )
                if is_changed and history_state_id is None:
                    return np.random.rand()
                photoshopInstance.update_comfyui_last_value(layer, bound, history_state_id)
                return history_state_id
        
        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None}),
                    "bound": ('BOUND', {"default": None}),
                },
                "optional": {
                    # compat combo selection type
                    "document": (list(document_data), {"default": False}),
                }
            }

        RETURN_TYPES = ("IMAGE", "MASK")
        RETURN_NAMES = ("rgb_out", "alpha_out")
        FUNCTION = "get_image"
        CATEGORY = "Photoshop"

        def get_image(self, layer_or_group, bound, document=""):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            if not isinstance(layer_or_group, str):
                document = layer_or_group['document']
                layer_or_group = layer_or_group['layer_name']
            if not isinstance(bound, str):
                if document == "":
                    document = bound['document']
                elif bound['document'] != document:
                    raise 'bound and layer not in the same document'
                bound = bound['bound_name']

            image_id, layer_opacity = call_async_func_in_server_thread(
                photoshopInstance.get_image(document_identify=document, layer_identify=layer_or_group, bound_identify=bound)
            )

            loadImage = LoadImage()
            (output_image, output_mask) = loadImage.load_image(image_id)
            return (output_image, output_mask,)


    class SendImageToPhotoshopLayerNode:

        @classmethod
        def VALIDATE_INPUTS(s):
            return validate_sdppp()
        
        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            return {
                "required": {
                    "images": ("IMAGE", ),
                    "layer_or_group": ('LAYER', {"default": None}),
                    "bound": ('BOUND', {"default": None}),
                },
                "optional": {
                    # compat combo selection type
                    "document": (list(document_data), {"default": False}),
                }
            }

        RETURN_TYPES = ()
        FUNCTION = "send_image"
        CATEGORY = "Photoshop"
        OUTPUT_NODE = True

        def send_image(self, images, layer_or_group, bound, document=""):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            if not isinstance(layer_or_group, str):
                document = layer_or_group['document']
                layer_or_group = layer_or_group['layer_name']
            if not isinstance(bound, str):
                if document == "":
                    document = bound['document']
                elif bound['document'] != document:
                    raise 'bound and layer not in the same document'
                bound = bound['bound_name']
            
            image_ids = []
            for (batch_index, image) in enumerate(images):
                i = 255. * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                image_ids.append(addImageCache(img))
                
            call_async_func_in_server_thread(photoshopInstance.send_images(
                image_ids=image_ids,  
                document_identify=document, 
                layer_identify=layer_or_group, 
                bounds_identify=bound
            ), True)

            return (None,)
        
    class ImageTimesOpacity:
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "images": ("IMAGE", ),
                    "opacity": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 1.0, "step": 0.01}),
                }
            }

        RETURN_TYPES = ("IMAGE",)
        FUNCTION = "image_times_opacity"
        CATEGORY = "Photoshop"

        def image_times_opacity(self, images, opacity):
            image_out = images * opacity
            return (image_out,)
        
    class MaskTimesOpacity:
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "masks": ("MASK", ),
                    "opacity": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 1.0, "step": 0.01}),
                }
            }

        RETURN_TYPES = ("MASK",)
        FUNCTION = "mask_times_opacity"
        CATEGORY = "Photoshop"

        def mask_times_opacity(self, masks, opacity):
            mask_out = masks * opacity
            return (mask_out,)
        
    return {
        'GetImageFromPhotoshopLayerNode': GetImageFromPhotoshopLayerNode,
        'SendImageToPhotoshopLayerNode': SendImageToPhotoshopLayerNode,
        'ImageTimesOpacity': ImageTimesOpacity,
        'MaskTimesOpacity': MaskTimesOpacity,
    }
=======
import numpy as np
import time
from nodes import LoadImage
from .apis import cache_images
from .photoshop_manager import PhotoshopManager
from server import PromptServer
prompt_server = PromptServer.instance

def define_comfyui_nodes(sdppp):
    def call_async_func_in_server_thread(coro, dontwait = False):
        handle = {
            'done': False,
            'result': None
        }
        loop = sdppp.loop
        async def do_call():
            handle['result'] = await coro
            handle['done'] = True
        loop.call_soon(lambda: loop.create_task(do_call()))

        if not dontwait:
            while not handle['done']:
                pass
            return handle['result']
        else:
            return None


    class GetImageFromPhotoshopLayerNode:
        # !!!!do not validate because there's no client_id when validating, so we validate manually before execution!!!!
        # @classmethod
        # def VALIDATE_INPUTS():
        #    pass
        
        @classmethod
        def IS_CHANGED(self, layer, use_layer_bounds):
            photoshopInstance = PhotoshopManager.instance().instance_from_client_id(prompt_server.client_id)
            if not photoshopInstance:
                return np.random.rand()
            else:
                id = photoshopInstance.layer_name_to_id(layer)
                bounds_id = photoshopInstance.layer_name_to_id(use_layer_bounds, id)
                start = time.time()
                is_changed, history_state_id = call_async_func_in_server_thread(photoshopInstance.check_layer_bounds_combo_changed(id, bounds_id))
                if is_changed and history_state_id is None:
                    return photoshopInstance.update_comfyui_last_value(id, bounds_id, np.random.rand())
                return photoshopInstance.update_comfyui_last_value(id, bounds_id, history_state_id)
        
        @classmethod
        def INPUT_TYPES(cls):
            layer_strs = []
            bounds_strs = []
            return {
                "required": {},
                "optional": {
                    "layer": (layer_strs, {"default": layer_strs[0] if len(layer_strs) > 0 else None}),
                    "use_layer_bounds": (bounds_strs, {"default": bounds_strs[0] if len(bounds_strs) > 0 else None}),
                }
            }

        RETURN_TYPES = ("IMAGE", "MASK", "FLOAT")
        RETURN_NAMES = ("image_out", "mask_out", "layer_opacity")
        FUNCTION = "get_image"
        CATEGORY = "Photoshop"

        def get_image(self, layer, use_layer_bounds):
            photoshopInstance = PhotoshopManager.instance().instance_from_client_id(prompt_server.client_id)
            if not photoshopInstance:
                raise ValueError('Photoshop is not connected')
            layer_strs = photoshopInstance.get_base_layers()    
            if layer not in layer_strs:
                raise ValueError(f"Layer {layer} not found in Photoshop")
            bounds_strs = photoshopInstance.get_bounds_layers()
            if use_layer_bounds not in bounds_strs:
                raise ValueError(f"Layer {use_layer_bounds} not found in Photoshop")
            
            id = photoshopInstance.layer_name_to_id(layer)
            bounds_id = photoshopInstance.layer_name_to_id(use_layer_bounds, id)

            start = time.time()
            image_id, layer_opacity = call_async_func_in_server_thread(photoshopInstance.get_image(layer_id=id, bounds_id=bounds_id))

            loadImage = LoadImage()
            (output_image, output_mask) = loadImage.load_image(image_id)
            return (output_image, output_mask, layer_opacity / 100)


    class SendImageToPhotoshopLayerNode:
        # !!!!do not validate because there's no client_id when validating, so we validate manually before execution!!!!
        # @classmethod
        # def VALIDATE_INPUTS():
        #    pass
        
        @classmethod
        def INPUT_TYPES(cls):
            layer_strs = []

            return {
                "required": {},
                "optional": {
                    "images": ("IMAGE", ),
                    "layer": (layer_strs, {"default": layer_strs[0] if len(layer_strs) > 0 else None}),
                }
            }

        RETURN_TYPES = ()
        FUNCTION = "send_image"
        CATEGORY = "Photoshop"
        OUTPUT_NODE = True

        def send_image(self, images, layer):
            photoshopInstance = PhotoshopManager.instance().instance_from_client_id(prompt_server.client_id)
            if not photoshopInstance:
                raise ValueError('Photoshop is not connected')
            
            ret = cache_images(images)
            layer_id = photoshopInstance.layer_name_to_id(layer)
            call_async_func_in_server_thread(photoshopInstance.send_images(image_ids=ret, layer_id=layer_id), True)

            return (None,)
        
    class ImageTimesOpacity:
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "images": ("IMAGE", ),
                    "opacity": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 1.0, "step": 0.01}),
                }
            }

        RETURN_TYPES = ("IMAGE",)
        FUNCTION = "image_times_opacity"
        CATEGORY = "Photoshop"

        def image_times_opacity(self, images, opacity):
            image_out = images * opacity
            return (image_out,)
        
    class MaskTimesOpacity:
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "masks": ("MASK", ),
                    "opacity": ("FLOAT", {"default": 1.0, "min": 0.01, "max": 1.0, "step": 0.01}),
                }
            }

        RETURN_TYPES = ("MASK",)
        FUNCTION = "mask_times_opacity"
        CATEGORY = "Photoshop"

        def mask_times_opacity(self, masks, opacity):
            mask_out = masks * opacity
            return (mask_out,)
        
    return {
        'GetImageFromPhotoshopLayerNode': GetImageFromPhotoshopLayerNode,
        'SendImageToPhotoshopLayerNode': SendImageToPhotoshopLayerNode,
        'ImageTimesOpacity': ImageTimesOpacity,
        'MaskTimesOpacity': MaskTimesOpacity,
    }
>>>>>>> tl/develop_sio_multi_user:comfy/nodes.py
