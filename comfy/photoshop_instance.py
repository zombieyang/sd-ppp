class PhotoshopInstance:
    def __init__(self, sdppp, sid):
        self.sdppp = sdppp
        self.sid = sid
        self.layers = []

    def _run_in_next_server_event(self, fn):
        handle = {
            'done': False,
            'result': None
        }
        self.sdppp.onNextEvent(fn, handle)
        while not handle['done']:
            pass
        return handle['result']

        
    def get_image(self, layer_id):
        async def _get_image(sio):
            return await sio.call('get_image', data={'layer_id': layer_id}, to=self.sid)
        id = self._run_in_next_server_event(_get_image)['upload_name']
        return id
    
    def send_images(self, image_ids):
        async def _send_images(sio):
            return await sio.call('send_images', data={'image_ids': image_ids}, to=self.sid)
        return self._run_in_next_server_event(_send_images)