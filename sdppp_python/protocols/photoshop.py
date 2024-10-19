import time
async def protocol_call(backend_instance, protocol_name, data):
    start = time.time()
    result = await backend_instance.sdppp.sio.call(protocol_name, data=data, to=backend_instance.sid)
    if not result:
        return None, None
    if 'error' in result:
        raise Exception('sdppp PS side error:' + result['error'])

    return result

class ProtocolPhotoshop:
    @classmethod
    async def get_image(cls, backend_instance, document_identify, layer_identify, bound_identify, selection_only=False):
        result = await protocol_call(backend_instance, 's_get_image', data={
            'document_identify': document_identify, 
            'layer_identify': layer_identify, 
            'bound_identify': bound_identify, 
            'selection_only': selection_only
        })
        return result
    
    @classmethod
    async def send_images(cls, backend_instance, document_identify, layer_identifies, bounds_identifies, image_urls=[], image_blobs=[]):
        result = await protocol_call(backend_instance, 's_send_images', data={
            'document_identify': document_identify, 
            'layer_identifies': layer_identifies,
            'bounds_identifies': bounds_identifies,
            'image_urls': image_urls,
            'image_blobs': image_blobs
        })
        return result
    
    @classmethod
    async def get_text(cls, backend_instance, document_identify, layer_identify):
        result = await protocol_call(backend_instance, 's_get_text', data={
            'document_identify': document_identify, 
            'layer_identify': layer_identify
        })
        return result['text']

    @classmethod
    async def get_layer_info(cls, backend_instance, document_identify, layer_identify="", layer_name=""):
        result = await protocol_call(backend_instance, 's_get_layer_info', data={
            'document_identify': document_identify, 
            'layer_identify': layer_identify,
            'layer_name': layer_name
        })
        return result

    @classmethod
    async def get_layers_in_group(cls, backend_instance, document_identify, layer_identifies, select):
        result = await protocol_call(backend_instance, 's_get_layers_in_group', data={
            'document_identify': document_identify, 
            'select': select,
            'layer_identifies': layer_identifies
        })
        return result

    @classmethod
    async def get_linked_layers(cls, backend_instance, document_identify, layer_identifies, select):
        result = await protocol_call(backend_instance, 's_get_linked_layers', data={
            'document_identify': document_identify, 
            'select': select,
            'layer_identifies': layer_identifies
        })
        return result
    