import numpy as np
import time
from nodes import LoadImage
from PIL import Image
from .apis import addImageCache

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
        def VALIDATE_INPUTS(s, layer):
            return validate_sdppp()
        
        @classmethod
        def IS_CHANGED(self, layer, use_layer_bounds):
            if not sdppp.has_ps_instance():
                return np.random.rand()
            else:
                photoshopInstance = sdppp.get_ps_instance()
                id = photoshopInstance.layer_name_to_id(layer)
                bounds_id = photoshopInstance.layer_name_to_id(use_layer_bounds, id)
                start = time.time()
                is_changed, history_state_id = call_async_func_in_server_thread(photoshopInstance.check_layer_bounds_combo_changed(id, bounds_id))
                if is_changed and history_state_id is None:
                    return np.random.rand()
                photoshopInstance.update_comfyui_last_value(id, bounds_id, history_state_id)
                return history_state_id
        
        @classmethod
        def INPUT_TYPES(cls):
            if validate_sdppp() is not True:
                layer_strs = []
                bounds_strs = []
            else:
                layer_strs = sdppp.get_ps_instance().get_base_layers()
                bounds_strs = sdppp.get_ps_instance().get_bounds_layers()
                
            return {
                "required": {
                    "layer": (layer_strs, {"default": layer_strs[0] if len(layer_strs) > 0 else None}),
                    "use_layer_bounds": (bounds_strs, {"default": bounds_strs[0] if len(bounds_strs) > 0 else None}),
                }
            }

        RETURN_TYPES = ("IMAGE", "MASK", "FLOAT")
        RETURN_NAMES = ("image_out", "mask_out", "layer_opacity")
        FUNCTION = "get_image"
        CATEGORY = "Photoshop"

        def get_image(self, layer, use_layer_bounds):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()

            id = photoshopInstance.layer_name_to_id(layer)
            bounds_id = photoshopInstance.layer_name_to_id(use_layer_bounds, id)

            start = time.time()
            image_id, layer_opacity = call_async_func_in_server_thread(photoshopInstance.get_image(layer_id=id, bounds_id=bounds_id))

            loadImage = LoadImage()
            (output_image, output_mask) = loadImage.load_image(image_id)
            return (output_image, output_mask, layer_opacity / 100)


    class SendImageToPhotoshopLayerNode:
        @classmethod
        def VALIDATE_INPUTS(s, images):
            return validate_sdppp()
        
        @classmethod
        def INPUT_TYPES(cls):
            if validate_sdppp() is not True:
                layer_strs = []
            else:
                layer_strs = sdppp.get_ps_instance().get_set_layers()

            return {
                "required": {
                    "images": ("IMAGE", ),
                    "layer": (layer_strs, {"default": layer_strs[0] if len(layer_strs) > 0 else None}),
                }
            }

        RETURN_TYPES = ()
        FUNCTION = "send_image"
        CATEGORY = "Photoshop"
        OUTPUT_NODE = True

        def send_image(self, images, layer):
            if validate_sdppp() is not True:
                raise ValueError('Photoshop is not connected')
            photoshopInstance = sdppp.get_ps_instance()
            
            image_ids = []
            for (batch_number, image) in enumerate(images):
                i = 255. * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                image_ids.append(addImageCache(img))
            layer_id = photoshopInstance.layer_name_to_id(layer)
            call_async_func_in_server_thread(photoshopInstance.send_images(image_ids=image_ids, layer_id=layer_id), True)

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