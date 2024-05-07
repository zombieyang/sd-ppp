from server import PromptServer
from aiohttp import web, WSMsgType
import json
import asyncio
import threading
import numpy as np
from .utils import auto_install_ps_plugin
auto_install_ps_plugin()

from .sdppp import SDPPP
sdppp = SDPPP(PromptServer)

from .apis import cache_images, define_http_endpoints
define_http_endpoints(PromptServer, sdppp)

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
WEB_DIRECTORY = 'comfy/static'
__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']