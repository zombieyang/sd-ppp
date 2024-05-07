import platform
import os
import platform
import shutil
import json

def auto_install_ps_plugin():
    system = platform.system()
    if system != 'Windows':
        print("SD-PPP: Auto install Photoshop plugin only support Windows")
        return
    ps_plugin_path = []
    try:
        import winreg
        aReg = winreg.ConnectRegistry(None, winreg.HKEY_LOCAL_MACHINE)
        aKey = winreg.OpenKey(aReg, r"SOFTWARE\Adobe\Photoshop")
        for i in range(1024):
            try:
                asubkey_name = winreg.EnumKey(aKey, i)
                asubkey = winreg.OpenKey(aKey, asubkey_name)
                val = winreg.QueryValueEx(asubkey, "PluginPath")
                ps_plugin_path.append(val[0])
            except EnvironmentError:
                break
    except Exception as e:
        print("SD-PPP: Failed to get Photoshop plugin path")
        print(e)
    if len(ps_plugin_path) <= 0:
        print("SD-PPP: Photoshop plugin path not found")
        return
    print("SD-PPP: Photoshop plugin path found")
    for path in ps_plugin_path:
        print("SD-PPP: Checking to install Photoshop plugin to path: " + path)
        try_install_ps_plugin(path)
    
def get_version_from_path(path):
    manifest_path = os.path.join(path, "manifest.json")
    if not os.path.exists(manifest_path):
        return None
    with open(manifest_path, "r") as f:
        data = json.load(f)
        return data.get("version", None)

def perpare_manifest(manifest_path):
    data = None
    with open(manifest_path, "r") as f:
        data = json.load(f)
        host = data.get("host", None)
        if host is None:
            return
        if not isinstance(host, list):
            return
        if len(host) <= 0:
            return
        data["host"] = host[0]
    with open(manifest_path, "w") as f:
        json.dump(data, f, indent=4)
        

FORCE_REINSTALL = False
def try_install_ps_plugin(ps_plugin_path):
    #check path exist
    if not os.path.exists(ps_plugin_path):
        print("SD-PPP: Photoshop plugin path not exist")
        return
    dst_extension_name = "sd-ppp_PS"
    dst_extension_path = os.path.join(ps_plugin_path, dst_extension_name)
    src_file_folder = os.path.dirname(os.path.abspath(__file__))
    src_extension_path = os.path.abspath(os.path.join(src_file_folder, "..", "photoshop", "dist"))
    if os.path.exists(dst_extension_path):
        if not FORCE_REINSTALL:
            #check version
            src_version = get_version_from_path(src_extension_path)
            dst_version = get_version_from_path(dst_extension_path)
            if src_version == dst_version:
                print("SD-PPP: Photoshop plugin already installed")
                return
            else:
                print("SD-PPP: Photoshop plugin version mismatch")
        #remove old folder
        shutil.rmtree(dst_extension_path)
    #fix manifest format
    perpare_manifest(os.path.join(src_extension_path, "manifest.json"))
    #clone directory to path
    try:
        shutil.copytree(src_extension_path, dst_extension_path)
    except Exception as e:
        print("SD-PPP: Photoshop plugin install failed")
        print(e)
        return
    print("SD-PPP: Photoshop plugin installed")


if __name__ == "__main__":
    auto_install_ps_plugin()