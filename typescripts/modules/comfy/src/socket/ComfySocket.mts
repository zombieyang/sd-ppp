import { MainStoreHolderSocket } from "../../../../src/common/socket/mixins/MainStoreHolder.mts";
import { StoreMapHolderSocket } from "../../../../src/common/socket/mixins/StoreMapHolder.mts";
import { Socket, SocketConstructor, SocketMixin } from "../../../../src/common/socket/Socket.mts";
import { pagePhotoshopStoreMap, pageStore } from "../../photoshopModels.mts";
import { PhotoshopCallerSocket } from "../../../../src/socket/PhotoshopCaller.mts";
import { WorkflowCalleeSocket } from "./WorkflowCallee.mts";
import type { WorkflowCallee } from '../../../../src/socket/WorkflowCalleeInterface.mts';
import type { PhotoshopCaller } from '../../../../src/socket/PhotoshopCallerInterface.mts';

export class ComfySocket extends (SocketMixin(
    MainStoreHolderSocket(pageStore, 'comfy'),
    StoreMapHolderSocket(pagePhotoshopStoreMap, 'photoshop'),
    PhotoshopCallerSocket,
    WorkflowCalleeSocket
) as SocketConstructor<Socket & PhotoshopCaller & WorkflowCallee>) {
    static instance: ComfySocket;
    constructor() {
        super(location.href.split('?')[0].split('#')[0]);
        ComfySocket.instance = this;
    }
} 