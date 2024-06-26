import socketio
from .photoshop_instance import PhotoshopInstance
from .apis import registerSocketEvents, registerComfyHTTPEndpoints, registerSDHTTPEndpoints

class SDPPP:
    def __init__(self):
        self.photoshop_instances = dict()
        self.comfyui_instances = dict()
        self.sd_instances = dict()

    def attach_to_comfyui(self, PromptServer):
        self.sio = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins="*")
        self.sio.attach(PromptServer.instance.app, socketio_path='/sd-ppp/')

        self.loop = PromptServer.instance.loop

        self._registerSocketListeners()
        registerComfyHTTPEndpoints(self, PromptServer)
        self.server_type = "comfy"

    def attach_to_SD(self, app):
        self.sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins="*")
        app_sdppp = socketio.ASGIApp(
            socketio_server=self.sio, socketio_path=''
        )
        app.mount('/sd-ppp', app_sdppp)
        self.app = app
        
        self._registerSocketListeners()
        registerSDHTTPEndpoints(self, app)
        self.server_type = "SD"

    def _registerSocketListeners(self):
        sio = self.sio

        @sio.event
        async def connect(sid, environ):
            qs = environ['QUERY_STRING']
            
            qsobj = dict(x.split('=') for x in qs.split('&'))
            if 'type' not in qsobj:
                raise socketio.exceptions.ConnectionRefusedError('instance type missed in query')

            elif qsobj['type'] == 'photoshop':
                if len(self.photoshop_instances) > 0:
                    raise socketio.exceptions.ConnectionRefusedError('only 1 instance is allowed now')
                self.photoshop_instances[sid] = PhotoshopInstance(self, sid)

            elif qsobj['type'] == 'comfyui':
                self.comfyui_instances[sid] = True

            elif qsobj['type'] == 'sd':
                self.sd_instances[sid] = True

            else:
                raise socketio.exceptions.ConnectionRefusedError('unknown instance type ' + qsobj['type'])

            await sio.emit('s_confirm', {
                "server_type": self.server_type
            })

        # only emit by photoshop instance
        @sio.event
        async def disconnect(sid):
            if sid in self.photoshop_instances:
                self.photoshop_instances.pop(sid, None)
            elif sid in self.comfyui_instances:
                self.comfyui_instances.pop(sid, None)

        registerSocketEvents(self, self.sio)
                
    def has_ps_instance(self):
        return len(self.photoshop_instances) > 0

    def get_ps_instance(self, sid = None):
        if len(self.photoshop_instances) == 0:
            return None
        if sid is None:
            sid = list(self.photoshop_instances.keys())[0]
        return self.photoshop_instances[sid]