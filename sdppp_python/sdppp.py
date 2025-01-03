import socketio
import os.path as path
from .instances import BackendInstance, PageInstance
from .apis import registerSocketEvents, registerComfyHTTPEndpoints, registerSDHTTPEndpoints
import re
import threading

# Define projectRoot as parent directory of current file
projectRoot = path.dirname(path.dirname(__file__))

class SDPPP:
    def __init__(self):
        self.page_instances = dict()
        self.backend_instances = dict()

        self.extra_server_info = {}

    def attach_to_comfyui(self, PromptServer):
        self.sio = socketio.AsyncServer(
            async_mode='aiohttp', 
            cors_allowed_origins="*",
            max_http_buffer_size=524288000
        )
        self.sio.attach(
            PromptServer.instance.app, 
            socketio_path='/sd-ppp/'
        )

        self.loop = PromptServer.instance.loop

        self._registerSocketListeners()
        registerComfyHTTPEndpoints(self, PromptServer)
        self.server_type = "comfy"

        # serve static
        PromptServer.instance.app.router.add_static(
            '/sd-ppp-static', 
            path.join(projectRoot, 'plugins'),
            show_index=True  # Enable directory listing
        )

    def attach_to_SD(self, app):
        self.sio = socketio.AsyncServer(
            async_mode='asgi', 
            cors_allowed_origins="*",
            max_http_buffer_size=524288000
        )
        app_sdppp = socketio.ASGIApp(
            socketio_server=self.sio, 
            socketio_path=''
        )
        app.mount('/sd-ppp', app_sdppp)
        self.app = app
        
        self._registerSocketListeners()
        registerSDHTTPEndpoints(self, app)
        self.server_type = "a1111"

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
                api_level = f.read()
            if api_level is not None and ('api_level' not in qsobj or qsobj['api_level'] != api_level):
                raise socketio.exceptions.ConnectionRefusedError('version mismatch, please reinstall PS plugin')

        @sio.event
        async def init(sid, payload):
            if 'type' not in payload:
                raise socketio.exceptions.ConnectionRefusedError('instance type not recognized')

            elif payload['type'] == 'photoshop':
                instance = self.backend_instances[sid] = BackendInstance(self, sid, "photoshop", payload['data'], payload['version'])

            elif payload['type'] == 'comfyui':
                instance = self.page_instances[sid] = PageInstance(self, sid, "comfy", payload['data'], payload['version'])

            elif payload['type'] == 'a1111':
                instance = self.page_instances[sid] = PageInstance(self, sid, "a1111", payload['data'], payload['version'])

            else:
                raise socketio.exceptions.ConnectionRefusedError('unknown instance type ' + payload['type'])
                
            ret = {
                "server_type": self.server_type,
                **self.extra_server_info
            }

            return ret


        @sio.event
        async def disconnect(sid):
            if sid in self.backend_instances:
                self.backend_instances.pop(sid, None)
            if sid in self.page_instances:
                self.page_instances.pop(sid, None)
            await sio.emit('s_remove_data', {'sid': sid})

        registerSocketEvents(self, self.sio)
                
    def has_ps_instance(self, throw_error = False):
        return True
        # for instance in self.backend_instances.values():
        #     if instance.type == 'photoshop':
        #         return True
        # if throw_error:
        #     raise ValueError('no Photoshop instance found')
        # return False

    