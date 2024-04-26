import os
import shutil
from server import PromptServer
from aiohttp import web, WSMsgType
import json
import asyncio
import threading
import torch
from io import BytesIO
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageSequence
from nodes import LoadImage

class WSCallsManager:
    ws = None
    def __init__(self, ws):
        self.calls = dict()
        self.call_id = 0
        self.ws = ws
    
    async def call(self, action, params, timeout=30):
        self.call_id += 1
        payload = {
            'call_id': self.call_id,
            'action': action,
            'params': params
        }
        call = self.calls[self.call_id] = asyncio.Future()
        
        await self.ws.send_str(json.dumps(payload))
        start_time = asyncio.get_event_loop().time()
        while (call.done() == False):
            if (asyncio.get_event_loop().time() - start_time > timeout):
                call.cancel()
                raise ValueError('call timed out')
            await asyncio.sleep(0.1)    
        return call.result()
    
    def handle_call(self, call_id, result=None, error=None):
        call = self._get_call_and_remove(call_id)
        if (call.cancelled()):
            return
        
        if (error is not None):
            call.set_exception(ValueError(error))
        else:
            call.set_result(result)
    
    def _get_call_and_remove(self, call_id):
        call = self.calls.get(call_id, None)
        if call is not None:
            self.calls.pop(call_id)
        else:
            raise ValueError(f'call {call_id} not found')
        return call
    

class PhotoshopInstance:
    instance = None
    
    def __init__(self, ws):
        PhotoshopInstance.instance = self
        self.wsCallsManager = WSCallsManager(ws)
        self.destroyed = False
        self.layers = []
        self.reset_change_tracker()
        
    async def poll_layers(self):
        await asyncio.sleep(1)
        while (self.destroyed == False and self.wsCallsManager.ws.closed == False):
            try:
                # print('start poll layers')
                self.layers = await self.get_layers()
                # print('layers done')
            except Exception as e:
                await asyncio.sleep(3)
            finally:
                await asyncio.sleep(1)

    async def run_server_loop(self):
        print('Photoshop Connected')
        
        threading.Thread(target=lambda: asyncio.run(self.poll_layers())).start()
        try:
            async for msg in self.wsCallsManager.ws:
                if (self.destroyed): break
                                                                                                     
                if msg.type == WSMsgType.TEXT:
                    payload = json.loads(msg.data)
                    if 'push_data' in payload:
                        push_data = payload['push_data']
                        self.push_data.update(push_data)
                    if 'call_id' in payload:
                        call_id = payload['call_id']
                        if 'error' in payload:
                            self.wsCallsManager.handle_call(call_id, error=payload['error'])
                        elif 'result' in payload:
                            self.wsCallsManager.handle_call(call_id, result=payload['result'])
                        else:
                            await self.wsCallsManager.ws.send_str(json.dumps({ call_id: call_id, 'error': 'result not found in payload'}))
                    else: 
                        await self.wsCallsManager.ws.send_str(json.dumps({ 'error': 'call_id not found in payload'}))
                        
                elif msg.type == WSMsgType.ERROR:
                    print('ws connection closed with exception %s' % self.wsCallsManager.ws.exception())
                    
                else:
                    await self.wsCallsManager.ws.send_str('invalid msg type')
        finally:
            print('Photoshop Disconnected')
            PhotoshopInstance.instance = None
    
    async def check_layer_bounds_combo_changed(self, layer, use_layer_bounds):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        layer_bounds_history_state_id = self.change_tracker.get(layer_bounds_combo, None)
        if layer_bounds_history_state_id is None:
            return True
        latest_state_id = self.get_push_history_state_id() or await self.get_active_history_state_id()
        if latest_state_id > layer_bounds_history_state_id:
            return True, latest_state_id
        #didn't change, use last value
        comfyui_last_value = self.comfyui_last_value_tracker.get(layer_bounds_combo, None) or layer_bounds_history_state_id
        return False, comfyui_last_value
    
    # have to track this value because comfyui determines if the value is changed by comparing it with the last value.
    # can't use the real history id because sending images changes the history id, and comfyui will think the value is changed when it's not
    def update_comfyui_last_value(self, layer, use_layer_bounds, value):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        self.comfyui_last_value_tracker[layer_bounds_combo] = value

    async def update_layer_bounds_history_state_id(self, layer, use_layer_bounds):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        latest_state_id = self.get_push_history_state_id() or await self.get_active_history_state_id()
        self.change_tracker[layer_bounds_combo] = latest_state_id
        return latest_state_id
    
    async def update_history_state_id_after_send(self):
        old_history_state_id = self.get_img_state_id
        history_state_id = await self.get_active_history_state_id() # need to get new id after operation, it causes history change
        self.get_img_state_id = history_state_id # it gets into a loop if get img state is not updated
        if old_history_state_id is not None: # udpate all the change trackers with the new history state id
            self.change_tracker = {k: history_state_id for k, v in self.change_tracker.items() if v == old_history_state_id}

    async def get_layers(self):
        result = await self.wsCallsManager.call('get_layers', {})
        layers = result['layers']                           
        return layers
        
    async def get_image(self, layer_id, bounds_id=False):
        is_changed = await self.check_layer_bounds_combo_changed(layer_id, bounds_id)
        if not is_changed and self.last_get_img_id is not None:
            return self.last_get_img_id
        result = await self.wsCallsManager.call('get_image', {'layer_id': layer_id, 'use_layer_bounds': bounds_id}, timeout=60)
        id = result['upload_name']
        layer_opacity = result['layer_opacity']
        history_state_id = await self.update_layer_bounds_history_state_id(layer_id, bounds_id)
        self.get_img_state_id = history_state_id
        self.last_get_img_id = id
        return id, layer_opacity
    
    async def is_ps_history_changed(self):
        push_state_id = self.get_push_history_state_id()
        if push_state_id is not None:
            return self.get_img_state_id < push_state_id
        current_id = await self.get_active_history_state_id()
        return self.get_img_state_id != current_id

    async def send_images(self, image_ids, layer_name=""):
        result = await self.wsCallsManager.call('send_images', {'image_ids': image_ids, 'layer_name': layer_name})
        await self.update_history_state_id_after_send()
        return result
    
    def get_push_history_state_id(self):
        return self.push_data.get('history_state_id', None)

    async def get_active_history_state_id(self):
        result = await self.wsCallsManager.call('get_active_history_state_id', {})
        id = result.get('history_state_id', None)
        return id
    
    def reset_change_tracker(self):
        self.push_data = {}
        self.get_img_state_id = 0
        self.last_get_img_id = None
        self.change_tracker = {}
        self.comfyui_last_value_tracker = {}
            
    async def destroy(self):
        await self.wsCallsManager.ws.close()
        self.destroyed = True
    
class ImageCache:
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
    
# @PromptServer.instance.routes.post('/photoshop_upload')
# async def upload_handler(request):
#     try:
#         start_time = asyncio.get_event_loop().time()
#         pixels = await request.read()
#         print('readed pixels in ' + str(asyncio.get_event_loop().time() - start_time) + ' s')
#         # get url param 'width'
#         width = int(request.query.get('width'))
#         if (width == 0 or width is None):
#             return web.json_response({
#                 'error': 'width is required'
#             })
        
        
#         pixels = [x for x in pixels]
#         arr = np.array(pixels, dtype=np.uint8)
#         arr = np.reshape(arr, (-1, width, 4))
#         image = Image.fromarray(arr)
#         # print(f'Parsed image width: {image.width}, height: {image.height} in {asyncio.get_event_loop().time() - start_time} ms')
        
#         image = image.convert("RGB")
#         image = np.array(image).astype(np.float32) / 255.0
#         image = torch.from_numpy(image)[None,]
#         # print(f'image to latent in {asyncio.get_event_loop().time() - start_time} ms')
        
#         global image_id_inc
#         image_id_inc += 1
#         ImageCache.data[image_id_inc] = image
        
#     except Exception as e:
#         return web.json_response({
#             'error': str(e)
#         })
    
#     return web.json_response({
#         'name': image_id_inc
#     })

@PromptServer.instance.routes.get('/photoshop_instance')
async def websocket_handler(request):
    # get version from query
    print('try connect: ' + str(request.query))
    version = int(request.query.get('version', 0))
    EXPECTED_VERSION = 1
    
    if (version is not EXPECTED_VERSION):
        if (version == 0):
            return web.json_response({ 
                'error': f'version is not provided.',
            })
        else:
            return web.json_response({ 
                'error': f'version {version} not supported.',
            })
        
    if (PhotoshopInstance.instance is not None):
        # return web.json_response({ 
        #     'error': 'only one instance of Photoshop is allowed at a time. Please close the current instance first.',
        # })
        print('destroying previous instance')
        await PhotoshopInstance.instance.destroy()
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    
    PhotoshopInstance(ws)
    await PhotoshopInstance.instance.run_server_loop()

def get_layers_str():
    layer_strs = []
    bounds_strs = []
    if PhotoshopInstance.instance is not None:
        layer_strs = list(map(lambda layer: f"{layer['name']} (id:{layer['id']})", PhotoshopInstance.instance.layers))
        layer_strs.insert(0, 'Use canvas')
        bounds_strs = list(layer_strs)
        bounds_strs.insert(0, 'Use selection')
        bounds_strs.insert(0, 'Same as layer')
    return layer_strs, bounds_strs

class GetImageFromPhotoshopLayerNode:
    @classmethod
    def VALIDATE_INPUTS(s, layer):
        if (PhotoshopInstance.instance is None):
            return 'Photoshop is not connected'
        return True
    
    @classmethod
    def IS_CHANGED(self, layer, use_layer_bounds):
        if (PhotoshopInstance.instance is None):
            return np.random.rand()
        else:
            id, bounds_id = self.LAYER_BOUNDS_NAME_TO_ID(layer, use_layer_bounds)
            is_changed, history_state_id = asyncio.run(PhotoshopInstance.instance.check_layer_bounds_combo_changed(id, bounds_id))
            if is_changed and history_state_id is None:
                return np.random.rand()
            PhotoshopInstance.instance.update_comfyui_last_value(id, bounds_id, history_state_id)
            return history_state_id
    
    @classmethod
    def INPUT_TYPES(cls):
        layer_strs, bounds_strs = get_layers_str()
        return {
            "required": {
                "layer": (layer_strs, {"default": layer_strs[0] if len(layer_strs) > 0 else None}),
                "use_layer_bounds": (bounds_strs, {"default": bounds_strs[0] if len(bounds_strs) > 0 else None}),
            }
        }
    
    @classmethod
    def LAYER_BOUNDS_NAME_TO_ID(self, layer, use_layer_bounds):
        id = 0
        if layer == 'Canvas':
            id = 0
        else:
            layer_name_and_id_split = layer.split('(id:')
            id = int(layer_name_and_id_split.pop().strip()[:-1])
        bounds_id = 0
        if use_layer_bounds == 'Canvas':
            bounds_id = 0
        elif use_layer_bounds == 'Use selection':
            bounds_id = -1
        elif use_layer_bounds == 'Same as layer':
            bounds_id = id
        else:
            bounds_layer_name_and_id_split = use_layer_bounds.split('(id:')
            bounds_id = int(bounds_layer_name_and_id_split.pop().strip()[:-1])
        return id, bounds_id

    RETURN_TYPES = ("IMAGE", "MASK", "FLOAT")
    RETURN_NAMES = ("image_out", "mask_out", "layer_opacity")
    FUNCTION = "get_image"
    CATEGORY = "Photoshop"

    def get_image(self, layer, use_layer_bounds):
        if (PhotoshopInstance.instance is None):
            raise ValueError('Photoshop is not connected')

        id, bounds_id = self.LAYER_BOUNDS_NAME_TO_ID(layer, use_layer_bounds)
        image_id, layer_opacity = _invoke_async(PhotoshopInstance.instance.get_image(layer_id=id, bounds_id=bounds_id))
        
        loadImage = LoadImage()
        (output_image, output_mask) = loadImage.load_image(image_id)
        return (output_image, output_mask, layer_opacity / 100)

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
class SendImageToPhotoshopLayerNode:
    @classmethod
    def VALIDATE_INPUTS(s, images):
        if (PhotoshopInstance.instance is None):
            return 'Photoshop is not connected'
        return True
    
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
        if (PhotoshopInstance.instance is None):
            raise ValueError('Photoshop is not connected')
        
        ret = cache_images(images)
        
        threading.Thread(target=lambda: asyncio.run(PhotoshopInstance.instance.send_images(image_ids=ret))).start()
        return (None,)

class SendImageToPhotoshopSetLayerNode:
    @classmethod
    def VALIDATE_INPUTS(s, images):
        if (PhotoshopInstance.instance is None):
            return 'Photoshop is not connected'
        return True
    
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE", ),
                "layer_name": (("STRING", {"default": "COMFY RESULT"}))
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "send_image"
    CATEGORY = "Photoshop"
    OUTPUT_NODE = True

    def send_image(self, images, layer_name):
        if (PhotoshopInstance.instance is None):
            raise ValueError('Photoshop is not connected')
        
        ret = cache_images(images)
        
        threading.Thread(target=lambda: asyncio.run(PhotoshopInstance.instance.send_images(image_ids=ret, layer_name=layer_name))).start()
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

def _invoke_async(call):
    return asyncio.run(call)


@PromptServer.instance.routes.get("/sd-ppp/checkchanges")
async def check_changes(request):
    is_changed = False
    if (PhotoshopInstance.instance is not None):
        is_changed = await PhotoshopInstance.instance.is_ps_history_changed()
    return web.json_response({'is_changed': is_changed}, content_type='application/json')

@PromptServer.instance.routes.get("/sd-ppp/resetchanges")
async def reset_changes(request):
    if (PhotoshopInstance.instance is not None):
        PhotoshopInstance.instance.reset_change_tracker()
    return web.json_response({}, content_type='application/json')

@PromptServer.instance.routes.get("/sd-ppp/getlayers")
async def get_layers(request):
    layer_strs = []
    bounds_strs = []
    if (PhotoshopInstance.instance is not None):
        layer_strs, bounds_strs = get_layers_str()
    return web.json_response({'layer_strs': layer_strs, 'bounds_strs': bounds_strs}, content_type='application/json')

NODE_CLASS_MAPPINGS = { 
    'Get Image From Photoshop Layer': GetImageFromPhotoshopLayerNode,
    'Send Images To Photoshop': SendImageToPhotoshopLayerNode,
    'Send Images To Photoshop Set Layer': SendImageToPhotoshopSetLayerNode,
    'Image Times Opacity': ImageTimesOpacity,
    'Mask Times Opacity': MaskTimesOpacity,
}
NODE_DISPLAY_NAME_MAPPINGS = { 
    'Get Image From Photoshop Layer': 'Get image from Photoshop layer',
    'Send Images To Photoshop': 'Send images to Photoshop',
    'Send Images To Photoshop Set Layer': 'Send images to Photoshop And Set Layer',
    'Image Times Opacity': 'Image times opacity',
    'Mask Times Opacity': 'Mask times opacity',
}
WEB_DIRECTORY = 'comfy/plugins'
__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']