import socketio
import os.path as path
from .instances import PPPInstance
from .apis import registerSocketEvents, registerComfyHTTPEndpoints, registerSDHTTPEndpoints
import re
import threading
from nodes import NODE_CLASS_MAPPINGS

# Define projectRoot as parent directory of current file
projectRoot = path.dirname(path.dirname(__file__))

class SDPPP:
    @classmethod
    def is_attached(cls):
        return 'SDPPP Get Document' in NODE_CLASS_MAPPINGS

    def __init__(self):
        self.ppp_instances = dict()

        self.extra_server_info = {}

        self.PromptServer = None

    def attach_to_comfyui(self, PromptServer):
        self.PromptServer = PromptServer

        self.sio = socketio.AsyncServer(
            async_mode='aiohttp', 
            cors_allowed_origins="*",
            max_http_buffer_size=524288000,
            ping_interval=60,
            ping_timeout=50
        )
        self.sio.attach(
            PromptServer.instance.app, 
            socketio_path='/sd-ppp/'
        )

        self.loop = PromptServer.instance.loop

        self._registerSocketListeners()
        registerComfyHTTPEndpoints(self, PromptServer)
        self.server_type = "comfy"

    def _registerSocketListeners(self):
        sio = self.sio

        @sio.event
        def connect_error(data):
            print("The connection failed!")
            print(data)
            
        @sio.event
        async def connect(sid, environ):
            qs = environ['QUERY_STRING']
            
            qsobj = dict(x.split('=') for x in qs.split('&'))
            api_level = None
            with open(path.join(projectRoot, 'sdppp_python', 'version.txt'), 'r') as f:
                api_level = f.read().strip()
            if api_level is not None and ('api_level' not in qsobj or qsobj['api_level'] != api_level):
                if api_level is not None and 'api_level' in qsobj: 
                    print(f'api_level: {api_level}, qsobj: {qsobj["api_level"]}')
                raise socketio.exceptions.ConnectionRefusedError('version mismatch, please reinstall PS plugin')

        @sio.event
        async def sdppp_init(sid, payload):
            if 'type' not in payload:
                raise socketio.exceptions.ConnectionRefusedError('instance type not recognized')

            elif payload['type'] == 'photoshop' or payload['type'] == 'comfy' or payload['type'] == 'a1111':
                instance = self.ppp_instances[sid] = PPPInstance(self, sid, payload['type'], payload['data'], payload['version'])

            else:
                raise socketio.exceptions.ConnectionRefusedError('unknown instance type ' + payload['type'])
                
            ret = {
                "server_type": self.server_type,
                **self.extra_server_info
            }
            await sio.emit('sdppp_inited', ret, to=sid)

        @sio.event
        async def disconnect(sid):
            if sid in self.ppp_instances:
                self.ppp_instances.pop(sid, None)
            await sio.emit('store_remove', {'sid': sid})

        registerSocketEvents(self, self.sio)
                
    def has_ps_instance(self, throw_error = False):
        return True
