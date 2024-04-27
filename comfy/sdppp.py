import socketio
import json
import asyncio
from socketio import exceptions
from .photoshop_instance import PhotoshopInstance

class SDPPP:
    def __init__(self, app, loop):
        self.photoshop_instances = dict()

        self.sio = socketio.AsyncServer(async_mode='aiohttp', cors_allowed_origins="*")
        self.sio.attach(app, socketio_path='/sd-ppp/')
        self.registerSocketListeners()
        self.state = dict()

        self.loop = loop

        self.nextEventQueue = []

    def hasInstance(self):
        return len(self.photoshop_instances) > 0

    def getInstance(self, sid = None):
        if sid is None:
            sid = list(self.photoshop_instances.keys())[0]
        return self.photoshop_instances[sid]

    def onNextEvent(self, fn, handle):
        self.nextEventQueue.append((fn, handle))

    def registerSocketListeners(self):
        sio = self.sio

        @sio.event
        async def connect(sid, environ):
            if len(self.photoshop_instances) > 0:
                raise exceptions.ConnectionRefusedError('only 1 instance is allowed now')

            qs = environ['QUERY_STRING']
            qsobj = dict(x.split('=') for x in qs.split('&'))
            if 'type' not in qsobj:
                raise exceptions.ConnectionRefusedError('instance type missed in query')
            elif qsobj['type'] == 'photoshop':
                self.photoshop_instances[sid] = PhotoshopInstance(self, sid)
            else:
                raise exceptions.ConnectionRefusedError('unknown instance type ' + qsobj['type'])

            self.state[sid] = True
            async def selfEventLoop():
                while True:
                    if (self.state[sid] is False):
                        break
                    while len(self.nextEventQueue) > 0:
                        item = self.nextEventQueue.pop(0)
                        item[1]['result'] = await item[0](self.sio)
                        item[1]['done'] = True
                    await asyncio.sleep(0.5)
            self.loop.create_task(selfEventLoop())

        @sio.event
        def disconnect(sid):
            self.state[sid] = False
            self.photoshop_instances.pop(sid, None)

        @sio.event
        def sync_layers(sid, data):
            data = json.loads(data)
            instance = self.getInstance(sid)
            instance.layers = data['layers']
