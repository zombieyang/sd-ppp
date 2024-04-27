from server import PromptServer
from aiohttp import web
from io import BytesIO
import numpy as np
from PIL import Image
from nodes import LoadImage
from .sdppp import SDPPP

sdppp = SDPPP(PromptServer.instance.app, PromptServer.instance.loop)
    
class ImageSendCache:
    data = dict()
    image_id_inc = 0
    
@PromptServer.instance.routes.get('/finished_images')
async def download_handler(request):
    try:
        image_id = request.query.get('id')
        if (image_id is None):
            return web.json_response({
                'error': 'id is required'
            })
        
        image_id = int(image_id)
        if (image_id not in ImageSendCache.data):
            return web.json_response({
                'error': 'image not found'
            })
        
        image = ImageSendCache.data[image_id]
        ImageSendCache.data.pop(image_id)
        # image = image.tobytes()
        
        stream = BytesIO()
        image.save(stream, "PNG")
        
        return web.Response(body=stream.getvalue(), content_type='image/png')
    except Exception as e:
        print('=============error============', e)
        return web.json_response({
            'error': str(e)
        })

class GetImageFromPhotoshopLayerNode:
    @classmethod
    def VALIDATE_INPUTS(s, layer):
        return sdppp.hasInstance()
    
    @classmethod
    def IS_CHANGED(s, layer):
        return np.random.rand()
    
    @classmethod
    def INPUT_TYPES(cls):
        if not sdppp.hasInstance():
            layer_strs = []
        else:
            layer_strs = list(map(lambda layer: 
                f"{layer['name']} (id:{layer['id']})"
            , sdppp.getInstance().layers))
            
        return {
            "required": {
                "layer": (layer_strs, ),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image_out",)
    FUNCTION = "get_image"
    CATEGORY = "Photoshop"

    def get_image(self, layer):
        if not sdppp.hasInstance():
            raise ValueError('Photoshop is not connected')
        photoshopInstance = sdppp.getInstance()
        
        layer_name_and_id_split = layer.split('(id:')
        id = int(layer_name_and_id_split.pop().strip()[:-1])

        image_id = photoshopInstance.get_image(layer_id=id)
        
        loadImage = LoadImage()
        (output_image, output_mask) = loadImage.load_image(image_id)
        
        return (output_image,)
    
class SendImageToPhotoshopLayerNode:
    @classmethod
    def VALIDATE_INPUTS(s, images):
        return sdppp.hasInstance()
    
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", )
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "send_image"
    CATEGORY = "Photoshop"
    OUTPUT_NODE = True

    def send_image(self, images):
        if not sdppp.hasInstance():
            raise ValueError('Photoshop is not connected')
        photoshopInstance = sdppp.getInstance()
        
        ret = []
        for (batch_number, image) in enumerate(images):
            i = 255. * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            ImageSendCache.image_id_inc += 1
            image_id = ImageSendCache.image_id_inc
            ImageSendCache.data[image_id] = img
            ret.append(image_id)
        
        photoshopInstance.send_images(image_ids=ret)
        return (None,)

NODE_CLASS_MAPPINGS = { 
    'Get Image From Photoshop Layer': GetImageFromPhotoshopLayerNode,
    'Send Images To Photoshop': SendImageToPhotoshopLayerNode 
}
NODE_DISPLAY_NAME_MAPPINGS = { 
    'Get Image From Photoshop Layer': 'Get image from Photoshop layer',
    'Send Images To Photoshop': 'Send images to Photoshop' 
}
WEB_DIRECTORY = 'plugins'
__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']