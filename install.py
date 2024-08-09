#launch script for stable-diffusion
try:
    import launch

    package = 'python-socketio'
    if not launch.is_installed(package):
        launch.run_pip(f"install {package}", f"sd-ppp requirement: {package}")
except ImportError:
    pass