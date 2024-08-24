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
        def IS_CHANGED(self, layer_or_group, bound):
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
