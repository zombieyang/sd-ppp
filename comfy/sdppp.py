import socketio
import json
import asyncio
from socketio import exceptions
from .photoshop_manager import PhotoshopManager

class SDPPP:
    def __init__(self, PromptServer):
        self.photoshop_instances = dict()
        self.comfyui_instances = dict()
        self.sid_to_ip = dict()

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
    
    def get_client_info_from_event(self, sid, data):
        ip = self.sid_to_ip[sid]
        if not ip:
            return
        client_id = data.get('client_id', None)
        if not client_id:
            client_id = 0
        user_id = data.get('user_id', None)
        if not user_id:
            user_id = 0
        return ip, client_id, user_id

    def registerSocketListeners(self):
        sio = self.sio

        @sio.event
        async def connect(sid, environ):
            ip = self.sid_to_ip[sid] = environ['REMOTE_ADDR']
            qs = environ['QUERY_STRING']
            
            qsobj = dict(x.split('=') for x in qs.split('&'))
            if 'type' not in qsobj:
                raise exceptions.ConnectionRefusedError('instance type missed in query')

            elif qsobj['type'] == 'photoshop':
                user_id = qsobj.get('user_id', None)
                if not user_id:
                    user_id = 0
                self.photoshop_instances[sid] = await PhotoshopManager.instance().new_ps_instance(self, sid, ip, user_id)

            elif qsobj['type'] == 'comfyui':
                client_id = qsobj.get('client_id', None)
                if not client_id:
                    client_id = 0
                user_id = qsobj.get('user_id', None)
                if not user_id:
                    user_id = 0
                self.comfyui_instances[sid] = client_id
                PhotoshopManager.instance().instance_from_client_info(ip, client_id, user_id)

            else:
                raise exceptions.ConnectionRefusedError('unknown instance type ' + qsobj['type'])


        # only emit by photoshop instance
        @sio.event
        async def disconnect(sid):
            if sid in self.photoshop_instances:
                instance = self.photoshop_instances.pop(sid, None)
                instance.destroy()
            elif sid in self.comfyui_instances:
                self.comfyui_instances.pop(sid, None)
            self.sid_to_ip.pop(sid, None)

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
            for sid, client_id in self.comfyui_instances.items():
                check_instance = PhotoshopManager.instance().instance_from_client_id(client_id)
                if check_instance != instance:
                    continue
                await sio.emit('sync_layers', {
                    'layer_strs': layer_strs,
                    'bound_strs': bounds_strs,
                    'set_layer_strs': set_layer_strs,
                }, to=sid)

        @sio.event
        async def check_changes(sid, data):
            ip, client_id, user_id = self.get_client_info_from_event(sid, data)
            instance = PhotoshopManager.instance().instance_from_client_info(ip, client_id, user_id)
            if instance is None:
                return
            if not await instance.is_ps_history_changed():
                return
            await sio.emit('trigger_graph_change', to=sid)
        
        @sio.event
        async def init(sid, data):
            ip, client_id, user_id = self.get_client_info_from_event(sid, data)
            instance = PhotoshopManager.instance().instance_from_client_info(ip, client_id, user_id)
            if instance is None:
                return
            instance.reset_change_tracker()

