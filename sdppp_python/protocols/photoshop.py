import time
async def protocol_call(ppp_instance, protocol_name, data):
    start = time.time()
    result = await ppp_instance.sdppp.sio.call(protocol_name, data=data, to=ppp_instance.sid, timeout=60)
    if not result:
        return None, None
    if 'error' in result:
        raise Exception('sdppp PS side error:' + result['error'])

    return result

class ProtocolPhotoshop:
    sdpppServer = None

    @classmethod
    def set_sdppp_server(cls, sdpppServer):
        cls.sdpppServer = sdpppServer

    @classmethod
    async def get_image(cls, instance_id, document_identify, layer_identify, boundary, quality=100.0):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getImage',
            'params': {
                'document_identify': document_identify, 
                'layer_identify': layer_identify, 
                'boundary': boundary,
                'quality': quality
            }
        })
        return result
    
    @classmethod
    async def send_images(cls, instance_id, document_identify, layer_identifies, boundaries, image_urls=[], image_blobs=[], new_layer_name=""):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'sendImages',
            'params': {
                'document_identify': document_identify, 
                'layer_identifies': layer_identifies,
                'boundaries': boundaries,
                'image_urls': image_urls,
                'image_blobs': image_blobs,
                'new_layer_name': new_layer_name
            }
        })
        return result
    
    @classmethod
    async def get_text(cls, instance_id, document_identify, layer_identify):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getText',
            'params': {
                'document_identify': document_identify, 
                'layer_identify': layer_identify
            }
        })
        return result['text']

    @classmethod
    async def send_text(cls, instance_id, document_identify, text, layer_identify):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'sendText',
            'params': {
                'document_identify': document_identify, 
                'text': text,
                'layer_identify': layer_identify
            }
        })
        return result

    @classmethod
    async def get_selection(cls, instance_id, document_identify, boundary):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getSelection',
            'params': {
                'document_identify': document_identify, 
                'boundary': boundary
            }
        })
        return result

    @classmethod    
    async def get_document_info(cls, instance_id, document_identify):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getDocumentInfo',
            'params': {
                'document_identify': document_identify
            }
        })
        return result

    @classmethod
    async def get_layer_info(cls, instance_id, document_identify, layer_identify=""):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getLayerInfo',
            'params': {
                'document_identify': document_identify, 
                'layer_identify': layer_identify
            }
        })
        return result

    @classmethod
    async def get_layers_in_group(cls, instance_id, document_identify, layer_identifies, select):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getLayersInGroup',
            'params': {
                'document_identify': document_identify, 
                'select': select,
                'layer_identifies': layer_identifies
            }
        })
        return result

    @classmethod
    async def get_linked_layers(cls, instance_id, document_identify, layer_identifies, select):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'getLinkedLayers',
            'params': {
                'document_identify': document_identify, 
                'select': select,
                'layer_identifies': layer_identifies
            }
        })
        return result

    @classmethod
    async def run_photoshop_action(cls, instance_id, document_identify, layer_identify, action):
        ppp_instance = cls.sdpppServer.ppp_instances[instance_id]
        start = time.time()
        result = await protocol_call(ppp_instance, 'B_photoshop', data={
            'action': 'runPhotoshopActionOnLayer',
            'params': {
                'document_identify': document_identify,
                'layer_identify': layer_identify,
                'action': action
            }
        })
        return result
