import socketio
import json
import asyncio
from socketio import exceptions
from .photoshop_instance import PhotoshopInstance
empty_queue = []

class SDPPP:
    def __init__(self, PromptServer):
        self.photoshop_instances = dict()
        self.comfyui_instances = dict()

        self.sio = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins="*")
        self.sio.attach(PromptServer.instance.app, socketio_path='/sd-ppp/')
        self.registerSocketListeners()

        self.loop = PromptServer.instance.loop

    def has_ps_instance(self):
        return len(self.photoshop_instances) > 0

    def get_ps_instance(self, sid = None):
        if len(self.photoshop_instances) == 0:
            return None
        if sid is None:
            sid = list(self.photoshop_instances.keys())[0]
        return self.photoshop_instances[sid]

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


        # only emit by photoshop instance
        @sio.event
        async def disconnect(sid):
            if sid in self.photoshop_instances:
                self.photoshop_instances.pop(sid, None)
            elif sid in self.comfyui_instances:
                self.comfyui_instances.pop(sid, None)

        # only emit by photoshop instance
        @sio.event
        async def sync_layers(sid, data):
            instance = self.get_ps_instance(sid)
            if instance is None:
                return
            instance.layers = data['layers']

            layer_strs = instance.get_base_layers()
            bounds_strs = instance.get_bounds_layers()
            set_layer_strs = instance.get_set_layers()
            for sid, instance in self.comfyui_instances.items():
                await sio.emit('sync_layers', {
                    'layer_strs': layer_strs,
                    'bound_strs': bounds_strs,
                    'set_layer_strs': set_layer_strs,
                }, to=sid)

        @sio.event
        async def check_changes(sid):
            instance = self.get_ps_instance()
            if instance is None:
                return
            if not await instance.is_ps_history_changed():
                return
            await sio.emit('trigger_graph_change', to=sid)
        
        @sio.event
        async def reset_changes(sid):
            instance = self.get_ps_instance()
            if instance is None:
                return
            instance.reset_change_tracker()

