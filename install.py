#launch script for stable-diffusion
import launch

package = 'python-socketio'
if not launch.is_installed(package):
    launch.run_pip(f"install {package}", f"sd-webui-infinite-image-browsing requirement: {package}")