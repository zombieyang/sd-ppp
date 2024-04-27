from aiohttp import web
from io import BytesIO
import numpy as np
from PIL import Image

class ImageCache:
    data = dict()
    image_id_inc = 0

def cache_images(images):
    ret = []
    for (batch_number, image) in enumerate(images):
        i = 255. * image.cpu().numpy()
        img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
        ImageCache.image_id_inc += 1
        image_id = ImageCache.image_id_inc
        ImageCache.data[image_id] = img
        ret.append(image_id)
    return ret

def define_http_endpoints(PromptServer, sdppp):
    @PromptServer.instance.routes.get('/finished_images')
    async def download_handler(request):
        try:
            image_id = request.query.get('id')
            if (image_id is None):
                return web.json_response({
                    'error': 'id is required'
                })
            
            image_id = int(image_id)
            if (image_id not in ImageCache.data):
                return web.json_response({
                    'error': 'image not found'
                })
            
            image = ImageCache.data[image_id]
            ImageCache.data.pop(image_id)
            # image = image.tobytes()
            
            stream = BytesIO()
            image.save(stream, "PNG")
            
            return web.Response(body=stream.getvalue(), content_type='image/png')
        except Exception as e:
            print('=============error============', e)
            return web.json_response({
                'error': str(e)
            })
        
    @PromptServer.instance.routes.get("/sd-ppp/checkchanges")
    async def check_changes(request):
        is_changed = False
        if sdppp.has_ps_instance():
            is_changed = await sdppp.get_ps_instance().is_ps_history_changed()
        return web.json_response({'is_changed': is_changed}, content_type='application/json')

    @PromptServer.instance.routes.get("/sd-ppp/resetchanges")
    async def reset_changes(request):
        if sdppp.has_ps_instance():
            sdppp.get_ps_instance().reset_change_tracker()
        return web.json_response({}, content_type='application/json')

    @PromptServer.instance.routes.get("/sd-ppp/getlayers")
    async def get_layers(request):
        layer_strs = []
        bounds_strs = []
        if sdppp.has_ps_instance():
            layer_strs, bounds_strs = sdppp.get_ps_instance().get_layers()
        return web.json_response({'layer_strs': layer_strs, 'bounds_strs': bounds_strs}, content_type='application/json')
