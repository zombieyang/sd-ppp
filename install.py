#launch script for stable-diffusion webui
try:
    import launch

    package = 'python-socketio'
    if not launch.is_installed(package):
        launch.run_pip(f"install {package}", f"sd-ppp requirement: {package}")
    package = 'jsonpatch'
    if not launch.is_installed(package):
        launch.run_pip(f"install {package}", f"sd-ppp requirement: {package}")
except ImportError:
    pass
