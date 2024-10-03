from .store.store import Store
class BackendInstance:

    def __init__(self, sdppp, sid, type, data, version):
        self.sdppp = sdppp
        self.sid = sid
        self.type = type
        self.store = Store(data, version)

class PageInstance(BackendInstance):
    def __init__(self, sdppp, sid, type, data, version):
        super().__init__(sdppp, sid, type, data, version)
