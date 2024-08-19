import time

class PhotoshopInstance:

    def __init__(self, sdppp, sid):
        self.sdppp = sdppp
        self.sid = sid
        self.layers = []
        self.reset_change_tracker()
    
    async def get_image(self, document_identify, layer_identify, bounds_identify):
        result = await self.sdppp.sio.call('s_get_image', data={
            'document_identify': document_identify, 
            'layer_identify': layer_identify, 
            'bounds_identify': bounds_identify
        }, to=self.sid)
        if not result:
            return None, None
        if 'error' in result:
            raise Exception('sdppp PS side error:' + result['error'])
        # history_state_id = await self._update_layer_bounds_history_state_id(layer_id, bounds_id)
        # await self._update_history_state_id_after_internal_change(history_state_id)

        return result['upload_name'], result['layer_opacity']
    
    async def send_images(self, image_ids, document_identify, layer_identify, bounds_identify):
        result = await self.sdppp.sio.call('s_send_images', data={
            'image_ids': image_ids, 
            'document_identify': document_identify, 
            'layer_identify': layer_identify,
            'bounds_identify': bounds_identify
        }, to=self.sid)
        # await self._update_history_state_id_after_internal_change()
        return result
    
    async def get_active_history_state_id(self):
        result = await self.sdppp.sio.call('s_get_active_history_state_id', data={}, to=self.sid)
        if result is None:
            return 0
        if 'error' in result:
            raise Exception('sdppp get_active_history_state_id PS side error:' + result['error'])
        id = result.get('history_state_id', 0)
        return id
    
    
    # ===
    def reset_change_tracker(self):
        self.get_img_state_id = 0
        self.change_tracker = {}
        self.comfyui_last_value_tracker = {}
    
    # for apis calls
    async def is_ps_history_changed(self):
        current_id = await self.get_active_history_state_id()
        return self.get_img_state_id != current_id and self.get_img_state_id < current_id

    async def check_layer_bounds_combo_changed(self, layer, bounds):
        layer_bounds_combo = f"{layer}{bounds}"
        layer_bounds_history_state_id = self.change_tracker.get(layer_bounds_combo, None)
        if layer_bounds_history_state_id is None:
            return True
        latest_state_id = await self.get_active_history_state_id()
        if latest_state_id > layer_bounds_history_state_id:
            return True, latest_state_id
        #didn't change, use last value
        comfyui_last_value = self.comfyui_last_value_tracker.get(layer_bounds_combo, None) or layer_bounds_history_state_id
        return False, comfyui_last_value
    
    # have to track this value because comfyui determines if the value is changed by comparing it with the last value.
    # can't use the real history id because sending images changes the history id, and comfyui will think the value is changed when it's not
    def update_comfyui_last_value(self, layer, bounds, value):
        layer_bounds_combo = f"{layer}{bounds}"
        self.comfyui_last_value_tracker[layer_bounds_combo] = value
    
    # need to update history id after internal operation otherwise it might cause infinite change loop
    async def _update_history_state_id_after_internal_change(self, history_state_id=None):
        if history_state_id is None: # need to get new id after operation, it causes history change
            history_state_id = await self.get_active_history_state_id()
        if self.get_img_state_id is not None: # udpate all the change trackers with the new history state id
            self.change_tracker = {k: history_state_id for k, v in self.change_tracker.items() if v == self.get_img_state_id}
        self.get_img_state_id = history_state_id # it gets into a loop if get img state is not updated
        
    async def _update_layer_bounds_history_state_id(self, layer, bounds):
        layer_bounds_combo = f"{layer}{bounds}"
        latest_state_id = await self.get_active_history_state_id()
        self.change_tracker[layer_bounds_combo] = latest_state_id
        return latest_state_id
