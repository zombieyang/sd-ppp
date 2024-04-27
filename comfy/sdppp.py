import socketio
import json
import asyncio
from socketio import exceptions
from .photoshop_instance import PhotoshopInstance

class SDPPP:
    def __init__(self, PromptServer):
        self.photoshop_instances = dict()
        self.comfyui_instances = dict()

        self.sio = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins="*")
        self.sio.attach(PromptServer.instance.app, socketio_path='/sd-ppp/')
        self.registerSocketListeners()
        self.state = dict()

        self.loop = PromptServer.instance.loop

        self.onNextTickQueue = []

    def has_ps_instance(self):
        return len(self.photoshop_instances) > 0

    def get_ps_instance(self, sid = None):
        if sid is None:
            sid = list(self.photoshop_instances.keys())[0]
        return self.photoshop_instances[sid]

    def onNextTick(self, fn, handle):
        self.onNextTickQueue.append((fn, handle))

    def registerSocketListeners(self):
        sio = self.sio

        @sio.event
        async def connect(sid, environ):
            qs = environ['QUERY_STRING']
            
            qsobj = dict(x.split('=') for x in qs.split('&'))
            if 'type' not in qsobj:
                raise exceptions.ConnectionRefusedError('instance type missed in query')

            elif qsobj['type'] == 'photoshop':
                if len(self.photoshop_instances) > 0:
                    raise exceptions.ConnectionRefusedError('only 1 instance is allowed now')
                self.photoshop_instances[sid] = PhotoshopInstance(self, sid)

            elif qsobj['type'] == 'comfyui':
                self.comfyui_instances[sid] = True

            else:
                raise exceptions.ConnectionRefusedError('unknown instance type ' + qsobj['type'])

            self.state[sid] = True
            async def selfEventLoop():
                while True:
                    if (self.state[sid] is False):
                        break
                    while len(self.onNextTickQueue) > 0:
                        item = self.onNextTickQueue.pop(0)
                        item[1]['result'] = await item[0](self.sio)
                        item[1]['done'] = True
                    await asyncio.sleep(0.5)
            self.loop.create_task(selfEventLoop())

        @sio.event
        def disconnect(sid):
            self.state[sid] = False
            self.photoshop_instances.pop(sid, None)

        @sio.event
        async def sync_layers(sid, data):
            data = json.loads(data)
            instance = self.get_ps_instance(sid)
            instance.layers = data['layers']

            layer_strs, bounds_strs = instance.get_layers()
            for sid, instance in self.comfyui_instances.items():
                await sio.emit('sync_layers', {
                    'layer_strs': layer_strs,
                    'bound_strs': bounds_strs
                }, to=sid)

        @sio.event
        def push_data(sid, data):
            instance = self.get_ps_instance(sid)
            instance.push_data.update(push_data)