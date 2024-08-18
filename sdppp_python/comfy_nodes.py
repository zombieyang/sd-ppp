import numpy as np
import time
from nodes import LoadImage
from PIL import Image
from .apis import addImageCache
from .data import get_sd_document_data, get_special_get_bound_layer_options, get_special_get_layer_options, get_special_send_layer_options

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


    class GetImageFromPhotoshopLayerNode:

        @classmethod
        def VALIDATE_INPUTS(s):
            return validate_sdppp()
        
        @classmethod
        def IS_CHANGED(self, layer_or_group, use_layer_bounds):
            if not sdppp.has_ps_instance():
                return np.random.rand()
            else:
                photoshopInstance = sdppp.get_ps_instance()
                is_changed, history_state_id = call_async_func_in_server_thread(
                    photoshopInstance.check_layer_bounds_combo_changed(layer, use_layer_bounds)
                )
                if is_changed and history_state_id is None:
                    return np.random.rand()
                photoshopInstance.update_comfyui_last_value(layer, use_layer_bounds, history_state_id)
                return history_state_id
        
        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            document_data_keys = document_data.keys()
            list_of_list_of_layers = [document_data[key]['layers'] for key in document_data_keys]
            return {
                "required": {},
                "optional": {
                    "document": (list(document_data_keys), {"default": None}),
                    "layer_or_group": ([
                        *get_special_get_layer_options(),
                        *(item['name'] for sublist in list_of_list_of_layers for item in sublist)
                    ], {"default": None}),
                    "use_layer_bounds": ([
                        *get_special_get_bound_layer_options(),
                        *(item['name'] for sublist in list_of_list_of_layers for item in sublist)
                    ], {"default": None}),
                }
            }

        RETURN_TYPES = ("IMAGE", "MASK", "FLOAT")
        RETURN_NAMES = ("image_out", "mask_out", "layer_opacity")
        FUNCTION = "get_image"
        CATEGORY = "Photoshop"

        def get_image(self, document, layer_or_group, use_layer_bounds):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            image_id, layer_opacity = call_async_func_in_server_thread(
                photoshopInstance.get_image(document_identify=document, layer_identify=layer_or_group, bound_layer_identify=use_layer_bounds)
            )

            loadImage = LoadImage()
            (output_image, output_mask) = loadImage.load_image(image_id)
            return (output_image, output_mask, layer_opacity / 100)


    class SendImageToPhotoshopLayerNode:

        @classmethod
        def VALIDATE_INPUTS(s):
            return validate_sdppp()
        
        @classmethod
        def INPUT_TYPES(cls):
            document_data = get_sd_document_data()
            document_data_keys = document_data.keys()
            list_of_list_of_layers = [document_data[key]['layers'] for key in document_data_keys]
            return {
                "required": {},
                "optional": {
                    "images": ("IMAGE", ),
                    # documents_options
                    "document": (list(document_data), {"default": None}),
                    "layer_or_group": ([
                        *get_special_send_layer_options(), 
                        *(item['name'] for sublist in list_of_list_of_layers for item in sublist)
                    ], {"default": None}),
                }
            }

        RETURN_TYPES = ()
        FUNCTION = "send_image"
        CATEGORY = "Photoshop"
        OUTPUT_NODE = True

        def send_image(self, images, document, layer_or_group):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()
            
            image_ids = []
            for (batch_number, image) in enumerate(images):
                i = 255. * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                image_ids.append(addImageCache(img))
                
            call_async_func_in_server_thread(photoshopInstance.send_images(
                image_ids=image_ids, document_identify=document, layer_identify=layer_or_group
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
