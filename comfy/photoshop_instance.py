class PhotoshopInstance:
    def __init__(self, sdppp, sid):
        self.sdppp = sdppp
        self.sid = sid
        self.layers = []
        self.reset_change_tracker()

    def _run_in_next_server_event(self, fn):
        handle = {
            'done': False,
            'result': None
        }
        self.sdppp.onNextTick(fn, handle)
        while not handle['done']:
            pass
        return handle['result']

    def get_layers(self):
        layer_strs = []
        bounds_strs = []
        
        layer_strs = list(map(lambda layer: f"{layer['name']} (id:{layer['id']})", self.layers))
        layer_strs.insert(0, '### Use canvas ###')

        bounds_strs = list(layer_strs)
        bounds_strs.insert(1, '### Use selection ###')
        bounds_strs.insert(1, '### Same as layer ###')

        return layer_strs, bounds_strs
    
    # for nodes call    
    def get_image_from_remote(self, layer_id, bounds_id=False):
        async def _get_image(sio):
            return await sio.call('get_image', data={'layer_id': layer_id, 'use_layer_bounds': bounds_id}, to=self.sid)
        result = self._run_in_next_server_event(_get_image)
        
        history_state_id = self._update_layer_bounds_history_state_id(layer_id, bounds_id)
        self._update_history_state_id_after_internal_change(history_state_id)

        return result['upload_name'], result['layer_opacity']
    
    # for nodes call
    def send_images_to_remote(self, image_ids, layer_name=""):
        async def _send_images(sio):
            return await sio.call('send_images', data={'image_ids': image_ids, 'layer_name': layer_name}, to=self.sid)
        result = self._run_in_next_server_event(_send_images)
        self._update_history_state_id_after_internal_change()
        return result
    
    # for nodes call
    def get_active_history_state_id_from_remote(self):
        async def get_active_history_state_id_from_remote(sio):
            return await sio.call('get_active_history_state_id', data={}, to=self.sid)
        result = self._run_in_next_server_event(get_active_history_state_id_from_remote)
        id = result.get('history_state_id', None)
        return id
    
    # for apis call
    async def async_get_active_history_state_id_from_remote(self):
        result = await self.sdppp.sio.call('get_active_history_state_id', data={}, to=self.sid)
        id = result.get('history_state_id', None)
        return id
    
    
    # ===
    # for api calls and initialize
    def reset_change_tracker(self):
        self.push_data = {}
        self.get_img_state_id = 0
        self.last_get_img_id = None
        self.change_tracker = {}
        self.comfyui_last_value_tracker = {}
    
    # for apis calls
    async def is_ps_history_changed(self):
        push_state_id = await self.async_get_active_history_state_id_from_remote()
        if push_state_id is not None:
            return self.get_img_state_id < push_state_id
        current_id = await self.get_active_history_state_id_from_remote()
        return self.get_img_state_id != current_id

    # for nodes calls
    def check_layer_bounds_combo_changed(self, layer, use_layer_bounds):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        layer_bounds_history_state_id = self.change_tracker.get(layer_bounds_combo, None)
        if layer_bounds_history_state_id is None:
            return True
        latest_state_id = self._get_push_history_state_id() or self.get_active_history_state_id_from_remote()
        if latest_state_id > layer_bounds_history_state_id:
            return True, latest_state_id
        #didn't change, use last value
        comfyui_last_value = self.comfyui_last_value_tracker.get(layer_bounds_combo, None) or layer_bounds_history_state_id
        return False, comfyui_last_value
    
    # for nodes
    # have to track this value because comfyui determines if the value is changed by comparing it with the last value.
    # can't use the real history id because sending images changes the history id, and comfyui will think the value is changed when it's not
    def update_comfyui_last_value(self, layer, use_layer_bounds, value):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        self.comfyui_last_value_tracker[layer_bounds_combo] = value
    
    # for nodes call
    # need to update history id after internal operation otherwise it might cause infinite change loop
    def _update_history_state_id_after_internal_change(self, history_state_id=None):
        if history_state_id is None: # need to get new id after operation, it causes history change
            history_state_id = self.get_active_history_state_id_from_remote()
        if self.get_img_state_id is not None: # udpate all the change trackers with the new history state id
            self.change_tracker = {k: history_state_id for k, v in self.change_tracker.items() if v == self.get_img_state_id}
        self.get_img_state_id = history_state_id # it gets into a loop if get img state is not updated
        
    # for nodes call
    def _update_layer_bounds_history_state_id(self, layer, use_layer_bounds):
        layer_bounds_combo = f"{layer}{use_layer_bounds}"
        latest_state_id = self.get_active_history_state_id_from_remote()
        self.change_tracker[layer_bounds_combo] = latest_state_id
        return latest_state_id
    
    # for nodes call
    def _get_push_history_state_id(self):
        return self.push_data.get('history_state_id', None)