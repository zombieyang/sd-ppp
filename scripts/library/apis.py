try:
    from fastapi.responses import FileResponse, StreamingResponse
    from fastapi import UploadFile, File
except ImportError:
    print("SD-PPP: fastapi not found")
try:
    from aiohttp import web
except ImportError:
    print("SD-PPP: aiohttp not found")

import numpy as np
from io import BytesIO
from PIL import Image

# str => PIL.Image
image_cache = dict()

def consumeImageCache(name):
    res = image_cache[name]
    del image_cache[name]
    return res

def addImageCache(image, name = ''):
    if name == '':
        name = f'sdppp_{len(image_cache)}'
    image_cache[name] = image
    return name

def registerComfyHTTPEndpoints(sdppp, PromptServer):
    
    @PromptServer.instance.routes.get('/sdppp_download')
    async def sdppp_download(request):
        try:
            name = request.query.get('name')
            if (name is None):
                return web.json_response({
                    'error': 'name is required'
                })
            
            image = consumeImageCache(name)

            stream = BytesIO()
            image.save(stream, "PNG")
            return web.Response(body=stream.getvalue(), content_type='image/png')
        except Exception as e:
            print('=============error============', e)
            return web.json_response({
                'error': str(e)
            })
        
    
def registerSDHTTPEndpoints(sdppp, app):
    
    @app.get('/sdppp_download')
    def sdppp_download(name: str):
        res = consumeImageCache(name)
        if isinstance(res, str):
            return FileResponse(res, media_type='image/png')
        else:
            return StreamingResponse(BytesIO(res.tobytes()), media_type='image/png')
        
    @app.post('/sdppp_upload')
    def sdppp_upload(image: UploadFile = File(...)):
        name = addImageCache(Image.open(BytesIO(image.file.read())))
        return {'name': name}

def registerSocketEvents(sdppp, sio):
    @sio.event
    async def c_get_image(sid, data={}):
        if not sdppp.has_ps_instance():
            return
        photoshopInstance = sdppp.get_ps_instance()
        layer = data['layer_id']
        use_layer_bounds = data['use_layer_bounds']
        sd_elem_id = data['sd']['elem_id']

        id = photoshopInstance.layer_name_to_id(layer)
        bounds_id = photoshopInstance.layer_name_to_id(use_layer_bounds, id)

        upload_name, opacity = await photoshopInstance.get_image(layer_id=id, bounds_id=bounds_id)
        res = consumeImageCache(upload_name)
        addImageCache(res, sd_elem_id)
        return {}

    @sio.event
    async def c_send_image(sid, data={}):
        if not sdppp.has_ps_instance():
            return
        photoshopInstance = sdppp.get_ps_instance()

        layer = data['layer']
        layer_id = photoshopInstance.layer_name_to_id(layer)
        image_urls = data['sd']['image_urls']

        def load_image(image_url):
            if 'file=' in image_url:
                image_url = image_url.split('file=')[1].split('?')[0]
            else:
                raise Exception('Invalid image url')
            return addImageCache(image_url)
        image_ids = [load_image(image_url) for image_url in image_urls]
        await photoshopInstance.send_images(layer_id=layer_id, image_ids=image_ids)

    @sio.event
    async def c_get_layers(sid, data = {}):
        if not sdppp.has_ps_instance():
            return {}
        instance = sdppp.get_ps_instance()
        
        layer_strs = instance.get_base_layers()
        bounds_strs = instance.get_bounds_layers()
        set_layer_strs = instance.get_set_layers()
        return {
            'layer_strs': layer_strs,
            'bound_strs': bounds_strs,
            'set_layer_strs': set_layer_strs,
        }

    # only emit by photoshop instance
    @sio.event
    async def b_sync_layers(sid, data = {}):
        instance = sdppp.get_ps_instance(sid)
        if instance is None:
            return
        instance.layers = data['layers']

    @sio.event
    async def check_changes(sid):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return
        if not await instance.is_ps_history_changed():
            return
        await sio.emit('trigger_graph_change', to=sid)
    
    @sio.event
    async def reset_changes(sid):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return
        instance.reset_change_tracker()