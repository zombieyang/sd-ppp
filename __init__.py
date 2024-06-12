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


    from server import PromptServer

    from .sdppp_python.sdppp import SDPPP
    sdppp = SDPPP()
    sdppp.attach_to_comfyui(PromptServer)

    from .sdppp_python.comfy_nodes import define_comfyui_nodes
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
    