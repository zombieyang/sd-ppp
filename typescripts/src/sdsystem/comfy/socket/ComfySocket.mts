import { MainStoreHolderSocket } from "../../../common/socket/mixins/MainStoreHolder.mjs";
import { StoreMapHolderSocket } from "../../../common/socket/mixins/StoreMapHolder.mjs";
import { Socket, SocketConstructor, SocketMixin } from "../../../common/socket/Socket.mjs";
import { pagePhotoshopStoreMap, pageStore } from "../../common/models/photoshopModels.mjs";
import { PhotoshopCaller, PhotoshopCallerSocket } from "../../common/socket/PhotoshopCaller.mjs";
import { WorkflowCallee, WorkflowCalleeSocket } from "./WorkflowCallee.mjs";

export class ComfySocket extends (SocketMixin(
    MainStoreHolderSocket(pageStore, 'comfy'),
    StoreMapHolderSocket(pagePhotoshopStoreMap, 'photoshop'),
    PhotoshopCallerSocket,
    WorkflowCalleeSocket
) as SocketConstructor<Socket & PhotoshopCaller & WorkflowCallee>) {
    static instance: ComfySocket;
    constructor() {
        super(location.href);
        ComfySocket.instance = this;
    }
}