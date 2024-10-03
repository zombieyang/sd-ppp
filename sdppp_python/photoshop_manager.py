import asyncio
from .photoshop_instance import PhotoshopInstance
DEFAULT_ID = 0

class PhotoshopManager:
    _instance = None

    @classmethod
    def instance(cls) -> 'PhotoshopManager':
        if cls._instance is None:
            cls._instance = PhotoshopManager()
        return cls._instance

    def __init__(self):
        # client id info
        self.ip_to_client_id_list = {}
        self.client_id_to_userid = {}
        # ps instance info
        self.ip_to_ps_instance_list = {}
        # final match
        self.client_id_to_ps_instance = {}

    # get instance from client information, match new instance if not exist
    def instance_from_client_info(self, ip, client_id, user_id) -> PhotoshopInstance:
        if not ip: return None
        if not client_id: user_id = 0
        if not user_id: user_id = 0
        instance = self.instance_from_client_id(client_id)
        if instance is not None:
            return instance
        self._add_new_client(ip, client_id, user_id)
        self._client_match_ps(ip, client_id, user_id)
        return self.instance_from_client_id(client_id)
    
    # get instance from client id
    def instance_from_client_id(self, client_id) -> PhotoshopInstance:
        return self.client_id_to_ps_instance.get(client_id, None)

    # create new instance and record
    async def new_ps_instance(self, sdppp, sid, ip, user_id) -> PhotoshopInstance:
        if not ip: return None
        if not user_id: user_id = 0
        # create new instance
        instance = PhotoshopInstance(sdppp, sid, user_id)
        instance.on_destroy = self._on_instance_destroy
        # record new instance
        await self._add_new_ps_instance(ip, instance)
        return instance

    #------------------------------------------------------------------------------------------------------------------------------------------------
    # callback when instance is destroyed and remove from record
    def _on_instance_destroy(self, instance):
        self._remove_instance(instance)

    # record new ps instance for matching
    async def _add_new_ps_instance(self, ip, instance):
        # find old one and destroy
        same_ip_list = self.ip_to_ps_instance_list.get(ip, [])
        for check_instance in same_ip_list:
            if check_instance.uid == instance.uid:
                await check_instance.destroy()
        # record ip to instance
        ps_instance_list = self.ip_to_ps_instance_list.get(ip, [])
        if instance not in ps_instance_list:
            ps_instance_list.append(instance)
        self.ip_to_ps_instance_list[ip] = ps_instance_list

    # record new client id
    def _add_new_client(self, ip, client_id, user_id):
        # record client id, if exist, do nothing
        client_id_list = self.ip_to_client_id_list.get(ip, [])
        if client_id in client_id_list:
            return
        client_id_list.append(client_id)
        self.ip_to_client_id_list[ip] = client_id_list
        # record user_id
        self.client_id_to_userid[client_id] = user_id

    # match client id to ps instance for prompt use
    # there are several ways to match:
    # 1. one to one match(local network most likely): same ip client and ps instance, assign to it
    # 2. multiple ps instance under the same ip(remote service most likely), check user id
    def _client_match_ps(self, ip, client_id, user_id):
        # check existing pair
        instance = self.client_id_to_ps_instance.get(client_id, None)
        if instance is not None:
            return
        # check same ip  ps instance
        ps_instance_list = self.ip_to_ps_instance_list.get(ip, [])
        count = len(ps_instance_list)
        if count <= 0:
            return
        # if only one same ip ps instance, assign client id
        if count == 1:
            self.client_id_to_ps_instance[client_id] = ps_instance_list[0]
            return
        # if more than one same ip ps instance, check same user_id, same ip + same user id = same ps instance
        ps_user_id_list = [instance.uid for instance in ps_instance_list]
        try:
            check_index = ps_user_id_list.index(user_id)
        except:
            check_index = None
        if check_index is None:
            return
        self.client_id_to_ps_instance[client_id] = ps_instance_list[check_index]

    def _remove_instance(self, instance):
        # remove id from ip to instance list
        for ip, ps_instance_list in self.ip_to_ps_instance_list.items():
            if instance in ps_instance_list:
                ps_instance_list.remove(instance)
        # remove instance from client id to instance
        for client_id in list(self.client_id_to_ps_instance.keys()):
            check_instance = self.client_id_to_ps_instance.get(client_id, None)
            if check_instance == instance:
                self.client_id_to_ps_instance.pop(client_id, None)