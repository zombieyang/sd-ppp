# entry for ComfyUI
import sys
import threading
import subprocess
import locale

# copy from comfyUI-Manager
def handle_stream(stream, prefix):
    stream.reconfigure(encoding=locale.getpreferredencoding(), errors='replace')
    for msg in stream:
        if prefix == '[!]' and ('it/s]' in msg or 's/it]' in msg) and ('%|' in msg or 'it [' in msg):
            if msg.startswith('100%'):
                print('\r' + msg, end="", file=sys.stderr),
            else:
                print('\r' + msg[:-1], end="", file=sys.stderr),
        else:
            if prefix == '[!]':
                print(prefix, msg, end="", file=sys.stderr)
            else:
                print(prefix, msg, end="")

def run_script(cmd, cwd='.'):
    if len(cmd) > 0 and cmd[0].startswith("#"):
        print(f"[ComfyUI-Manager] Unexpected behavior: `{cmd}`")
        return 0

    process = subprocess.Popen(cmd, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, bufsize=1)

    stdout_thread = threading.Thread(target=handle_stream, args=(process.stdout, ""))
    stderr_thread = threading.Thread(target=handle_stream, args=(process.stderr, "[!]"))

    stdout_thread.start()
    stderr_thread.start()

    stdout_thread.join()
    stderr_thread.join()

    return process.wait()
# end copy from comfyUI-Manager

if __file__.find('custom_nodes') == -1:
    print('sd-PPP import failed, it does not being placed in custom_nodes')
    
else:
    try:
        import socketio
    except:
        run_script([sys.executable, "-m", "pip", "install", 'python-socketio'])
    try:
        import jsonpatch
    except:
        run_script([sys.executable, "-m", "pip", "install", 'jsonpatch'])

    from .sdppp_python.sdppp import SDPPP
    if SDPPP.is_attached():
        print('sd-ppp is already attached')
        NODE_CLASS_MAPPINGS = { }
        NODE_DISPLAY_NAME_MAPPINGS = { }
        
        __all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']

    else: 
        from server import PromptServer

        sdppp = SDPPP()
        sdppp.attach_to_comfyui(PromptServer)
        from comfy.cli_args import args
        if (args.multi_user):
            sdppp.extra_server_info['multi_user'] = True

        from .sdppp_python.protocols.photoshop import ProtocolPhotoshop
        ProtocolPhotoshop.set_sdppp_server(sdppp)

        from .sdppp_python.comfy.nodes import define_comfyui_nodes
        from .sdppp_python.comfy.nodes_legacy import define_comfyui_nodes_legacy
        export_nodes_legacy = define_comfyui_nodes_legacy(sdppp)
        export_nodes = define_comfyui_nodes(sdppp)

        NODE_CLASS_MAPPINGS = { 
            'Get Image From Photoshop Layer': export_nodes_legacy['GetImageFromPhotoshopLayerNode'],
            'Send Images To Photoshop': export_nodes_legacy['SendImageToPhotoshopLayerNode'],
            'CLIP Text Encode PS Regional': export_nodes_legacy['CLIPTextEncodePSRegional'],
        }
        NODE_DISPLAY_NAME_MAPPINGS = { 
            'Get Image From Photoshop Layer': 'SDPPP Get Image From Photoshop',
            'Send Images To Photoshop': 'SDPPP Send Images To Photoshop',
            'CLIP Text Encode PS Regional': 'CLIP Text Encode PS Regional',
        }
        for (k, v) in export_nodes.items():
            NODE_CLASS_MAPPINGS[k] = v
            NODE_DISPLAY_NAME_MAPPINGS[k] = k
            
        WEB_DIRECTORY = 'javascript'
        __all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS', 'WEB_DIRECTORY']
    
