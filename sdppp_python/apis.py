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

from .sd_data import get_sd_document_data, set_sd_document_data, set_sd_special_get_bound_layer_options, set_sd_special_get_layer_options, set_sd_special_send_layer_options
def registerSocketEvents(sdppp, sio):
    @sio.event
    async def c_set_sd_options(sid, data={}):
        set_sd_document_data(data['document_data'])
        set_sd_special_get_layer_options(data['special_get_layer_options'])
        set_sd_special_get_bound_layer_options(data['special_get_bound_layer_options'])
        set_sd_special_send_layer_options(data['special_send_layer_options'])

    # only emit by sd webui instance
    @sio.event
    async def c_get_image(sid, data={}):
        if not sdppp.has_ps_instance():
            return
        photoshopInstance = sdppp.get_ps_instance()
        document = data['document']
        layer = data['layer']
        use_layer_bounds = data['use_layer_bounds']
        sd_elem_id = data['sd']['elem_id']

        upload_name, opacity = await photoshopInstance.get_image(
            document_identify=document, layer_identify=layer, bound_layer_identify=use_layer_bounds
        )
        res = consumeImageCache(upload_name)
        addImageCache(res, sd_elem_id)
        return {}

    # only emit by sd webui instance
    @sio.event
    async def c_send_image(sid, data={}):
        if not sdppp.has_ps_instance():
            return
        photoshopInstance = sdppp.get_ps_instance()

        document = data['document']
        layer = data['layer']
        image_urls = data['sd']['image_urls']

        def load_image(image_url):
            if 'file=' in image_url:
                image_url = image_url.split('file=')[1].split('?')[0]
            else:
                raise Exception('Invalid image url')
            return addImageCache(image_url)
        image_ids = [load_image(image_url) for image_url in image_urls]
        await photoshopInstance.send_images(document_identify=document, layer_identify=layer, image_ids=image_ids)

    # only emit by photoshop instance
    @sio.event
    async def b_sync_layers(sid, data = {}):
        instance = sdppp.get_ps_instance(sid)
        if instance is None:
            return
        instance.layers = data['layers']

    # only emit by photoshop instance
    @sio.event
    async def b_get_pages(sid, data = {}):
        pages = []
        pages = list(sdppp.page_instances.values())
        pages.reverse()

        return {
            'pages': pages
        }

    # only emit by photoshop instance
    @sio.event
    async def b_page_run(sid, data = {}):
        await sdppp.sio.emit('s_run', to=data['sid'])

    @sio.event
    async def c_check_changes(sid):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return
        if not await instance.is_ps_history_changed():
            return
        await sio.emit('s_trigger_graph_change', to=sid)
    
    @sio.event
    async def c_reset_changes(sid):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return
        instance.reset_change_tracker()

    @sio.event
    async def c_reset_instance_name(sid, data):
        instance = sdppp.page_instances[sid]
        instance["name"] = data["name"]

    @sio.event
    async def c_progress(sid, data):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return
        photoshop_sid = instance.sid
        await sio.emit('c_progress', {
            'progress': data['progress'],
            'sid': sid
        }, to=photoshop_sid)

    @sio.event
    async def c_get_documents(sid, data = {}):
        instance = sdppp.get_ps_instance()
        if instance is None:
            return {}
        photoshop_sid = instance.sid
        return await sio.call('c_get_documents', data, to=photoshop_sid)
        
