try:
    from fastapi.responses import FileResponse, StreamingResponse
    from fastapi import UploadFile, File
    import urllib
except ImportError:
    print("SD-PPP: fastapi not found")
try:
    from aiohttp import web
except ImportError:
    print("SD-PPP: aiohttp not found")

import numpy as np
from io import BytesIO
from PIL import Image
from .protocols.photoshop import ProtocolPhotoshop

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
            return FileResponse(urllib.parse.unquote(res), media_type='image/png')
        else:
            return StreamingResponse(BytesIO(res.tobytes()), media_type='image/png')
        
    @app.post('/sdppp_upload')
    def sdppp_upload(image: UploadFile = File(...)):
        name = addImageCache(Image.open(BytesIO(image.file.read())))
        return {'name': name}

def registerSocketEvents(sdppp, sio):

    # only emit by sd webui instance
    @sio.event
    async def c_get_image(sid, payload={}):
        if not sdppp.has_ps_instance():
            return
        document = payload['document']

        backendInstance = sdppp.backend_instances[document['instance_id']]
        
        return await ProtocolPhotoshop.get_image(backendInstance, 
            document_identify=document['identify'], 
            layer_identify=payload['layer_identify'], 
            bound_identify=payload['bound_identify'],
        )

    # only emit by sd webui instance
    @sio.event
    async def c_send_image(sid, payload={}):
        if not sdppp.has_ps_instance():
            return
        document = payload['document']

        backendInstance = sdppp.backend_instances[document['instance_id']]

        await ProtocolPhotoshop.send_images(backendInstance, 
            document_identify=document['identify'], 
            layer_identifies=payload['layer_identifies'], 
            bounds_identify=payload['bounds_identify'],
            image_urls=payload['image_urls']
        )

    @sio.event
    async def c_psd(sid, payload = {}):
        if 'sid' not in payload:
            return {"error": "sid is not defined"}
        result = await sdppp.sio.call('c_psd', payload, to=payload['sid'])
        return result

    # only emit by photoshop instance
    @sio.event
    async def b_page_run(sid, payload = {}):
        await sdppp.sio.emit('b_page_run', to=payload['sid'])

    @sio.event
    async def b_flush_data(sid, payload = {}):
        store = sdppp.backend_instances[sid].store
        if store.patch_version_acceptable(payload['fromVersion']):
            store.patch_data(payload['operations'], payload['fromVersion'])
        else:
            result = await sio.call('s_request_data', {}, to=sid)
            sdppp.backend_instances[sid].store.sync_data(result['data'], result['version'])

        payload['sid'] = sid
        if len(sdppp.page_instances):
            await sio.emit('s_flush_data', payload, to=[page.sid for page in sdppp.page_instances.values()])

    @sio.event
    async def c_flush_data(sid, payload = {}):
        store = sdppp.page_instances[sid].store
        if store.patch_version_acceptable(payload['fromVersion']):
            store.patch_data(payload['operations'], payload['fromVersion'])
        else:
            result = await sio.call('s_request_data', {}, to=sid)
            sdppp.page_instances[sid].store.sync_data(result['data'], result['version'])

        payload['sid'] = sid
        if len(sdppp.backend_instances):
            await sio.emit('s_flush_data', payload, to=[backend.sid for backend in sdppp.backend_instances.values()])

    @sio.event
    async def c_request_data(sid, payload = {}):
        if 'sid' in payload:
            return {
                'sid': payload['sid'],
                'data': sdppp.backend_instances[payload['sid']].store.data,
                'version': sdppp.backend_instances[payload['sid']].store.version
            }
        else:
            ret = {}
            for backend in sdppp.backend_instances.values():
                ret[backend.sid] = {
                    'data': backend.store.data,
                    'version': backend.store.version
                }
            return ret

    @sio.event
    async def b_request_data(sid, payload = {}):
        if 'sid' in payload:
            return {
                'sid': payload['sid'],
                'data': sdppp.page_instances[payload['sid']].store.data,
                'version': sdppp.page_instances[payload['sid']].store.version
            }
        else:
            ret = {}
            for page in sdppp.page_instances.values():
                ret[page.sid] = {
                    'data': page.store.data,
                    'version': page.store.version
                }
            return ret
