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
    @sio.event
    async def B_photoshop(sid, payload = {}):
        if 'sid' not in payload or payload['sid'] not in sdppp.ppp_instances or sdppp.ppp_instances[payload['sid']].type != 'photoshop':
            return {"error": f"sid {payload['sid']} not found"}
        return await sdppp.sio.call('B_photoshop', payload, to=payload['sid'])

    @sio.event
    async def F_workflow(sid, payload = {}):
        if 'sid' not in payload or payload['sid'] not in sdppp.ppp_instances:
            return {"error": f"sid {sid} not found"}
        
        result = await sdppp.sio.call('F_workflow', payload, to=payload['sid'])
        return result

    @sio.event
    async def B_workflow(sid, payload = {}):
        if 'sid' not in payload or payload['sid'] not in sdppp.ppp_instances:
            return {"error": f"sid {sid} not found"}
        
        result = await sdppp.sio.call('B_workflow', payload, to=payload['sid'])
        return result

    @sio.event
    async def store_flush(sid, payload = {}):
        if sid not in sdppp.ppp_instances:
            return {"error": f"sid {sid} not found"}
        instance = sdppp.ppp_instances[sid]
        store = instance.store

        if store.patch_version_acceptable(payload['fromVersion']):
            store.patch_data(payload['operations'], payload['fromVersion'])
        else:
            result = await sio.call('store_request', {}, to=sid)
            store.sync_data(result['data'], result['version'])

        payload['sid'] = sid
        payload['type'] = instance.type
        if len(sdppp.ppp_instances):
            await sio.emit('store_flush', payload)

    @sio.event
    async def store_request(sid, payload = {}):
        if 'sid' in payload: # request single
            return {
                'sid': payload['sid'],
                'data': sdppp.ppp_instances[payload['sid']].store.data,
                'version': sdppp.ppp_instances[payload['sid']].store.version
            }

        elif 'type' in payload: # request all 
            ret = {}
            for ppp in sdppp.ppp_instances.values():
                if ppp.type == payload['type']:
                    ret[ppp.sid] = {
                        'data': ppp.store.data,
                        'version': ppp.store.version
                    }
            return ret