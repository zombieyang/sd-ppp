try:
    from server import PromptServer

    from .library.sdppp import SDPPP
    sdppp = SDPPP()
    sdppp.attach_to_comfyui(PromptServer)

    from .nodes import define_comfyui_nodes
    export_nodes = define_comfyui_nodes(sdppp)

    NODE_CLASS_MAPPINGS = { 
        'Get Image From Photoshop Layer': export_nodes['GetImageFromPhotoshopLayerNode'],
        'Send Images To Photoshop': export_nodes['SendImageToPhotoshopLayerNode'],
        'Image Times Opacity': export_nodes['ImageTimesOpacity'],
        'Mask Times Opacity': export_nodes['MaskTimesOpacity'],
    }
    NODE_DISPLAY_NAME_MAPPINGS = { 
        'Get Image From Photoshop Layer': 'Get image from Photoshop layer',
        'Send Images To Photoshop': 'Send images to Photoshop',
        'Image Times Opacity': 'Image times opacity',
        'Mask Times Opacity': 'Mask times opacity',
    }
    WEB_DIRECTORY = 'javascript'
    __all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']
    
except:
    pass