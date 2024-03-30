if (__file__.find('custom_nodes') != -1):
    from .comfy import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS, WEB_DIRECTORY, __all__
else:
    print('sd-PPP import failed, it does not being placed in custom_nodes')