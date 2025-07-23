try:
    from fastapi.responses import FileResponse, StreamingResponse
    from fastapi import UploadFile, File
    import urllib
except ImportError:
    print("SD-PPP: fastapi not found")
try:
    from aiohttp import web
    from aiohttp.web import static
except ImportError:
    print("SD-PPP: aiohttp not found")

import numpy as np
from io import BytesIO
from PIL import Image
from .protocols.photoshop import ProtocolPhotoshop
import json

import os.path as path
projectRoot = path.dirname(path.dirname(__file__))

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
    
    @PromptServer.instance.routes.get('/sd-ppp-static/{tail:.*}')
    async def sdppp_static(request):
        return web.FileResponse(path.join(projectRoot, 'static', request.match_info['tail']))
        
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
            return web.json_response({
                'error': str(e)
            })

    @PromptServer.instance.routes.post('/sdppp_upload2')
    async def sdppp_upload(request):
        post = await request.post()
        image = post.get('image')
        filename = post.get('filename')
        if filename is None:
            filename = image.filename or 'uploaded_image'
        
        # Read the file data from the FileField object
        image_data = image.file.read()
        
        # 将filename传递给addImageCache作为name参数
        result = await upload_image(sdppp, image_data, filename)
        return web.json_response({
            'name': result['name'], 
            'subfolder': result['subfolder'], 
            'type': result['type']
        })

    @PromptServer.instance.routes.get('/sdppp_version')
    async def sdppp_version(request):
        # 读取相对于本文件./version2.txt
        version_file = path.join(projectRoot, 'sdppp_python/version2.txt')
        if not path.exists(version_file):
            return web.json_response({
                'error': 'version file not found'
            })
        with open(version_file, 'r') as f:
            version = f.read().strip()
        if not version.isdigit():
            return web.json_response({
                'error': 'version file is not a valid number'
            })
        version = int(version)
        # 返回版本号
        
        return web.json_response({
            'version': version
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
    async def F_photoshop(sid, payload = {}):
        if 'sid' not in payload or payload['sid'] not in sdppp.ppp_instances:
            return {"error": f"sid {payload['sid']} not found"}
        
        if payload['action'] == 'uploadImage':
            image = payload['params']['image']
            filename = payload['params']['filename']
            result = await upload_image(sdppp, image, filename)
            return result
        else:
            return await sdppp.sio.call('F_photoshop', payload, to=payload['sid'])

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

async def upload_image(sdppp, image, filename):
    # 找到 image_upload 处理函数
    upload_handler = None
    for route in sdppp.PromptServer.instance.routes:
        if (isinstance(route, web.RouteDef) and 
            route.method == "POST" and 
            route.path == "/upload/image"):
            upload_handler = route.handler
            break
        
    if upload_handler is None:
        return {"error": "Upload handler not found"}
    
    # 创建模拟请求对象
    class MockFile:
        def __init__(self, data):
            self.file = BytesIO(data)
            self.filename = filename

    class MockPost:
        def __init__(self, image):
            self.data = {}
            self.data["image"] = MockFile(image)
            self.data["overwrite"] = "true"
            self.data['subfolder'] = 'sdppp'
        
        async def post(self):
            return self
        
        def get(self, key, default=None):
            return self.data.get(key, default)

    # 调用上传处理函数
    post = MockPost(image)
    result = await upload_handler(post)
    
    # 如果返回是 JSON 响应，获取实际数据
    if isinstance(result, web.Response):
        return json.loads(result.text)
    pass
