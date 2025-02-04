from .store.store import Store

class PPPInstance:
    def __init__(self, sdppp, sid, type, data, version):
        self.sdppp = sdppp
        self.sid = sid
        self.type = type
        self.store = Store(data, version)