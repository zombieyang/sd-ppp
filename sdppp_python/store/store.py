import jsonpatch

class Store:
    def __init__(self, data, version):
        self.sync_data(data, version)

    def sync_data(self, data, version):
        self.data = data
        self.version = version

    def patch_version_acceptable(self, version):
        return self.version != -1 and version <= self.version

    def patch_data(self, operations, version):
        if (version < self.version):
            operations = operations[self.version - version:len(operations)]
        
        self.data = jsonpatch.apply_patch(self.data, operations)
        self.version += len(operations)
