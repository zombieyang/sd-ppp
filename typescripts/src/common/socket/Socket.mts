import { io } from 'socket.io-client';
import { __GLOBAL_API_LEVEL__ } from '../version.mjs';
import { Socket as SocketIOClient } from 'socket.io-client';

export class Socket {
    protected readonly socket: SocketIOClient;
    constructor(url: string) {
        const path = '/' + [url.split('/').slice(3).filter(p => p).join('/'), 'sd-ppp/'].filter(p => p).join('/');
        url = url.split('/').slice(0, 3).join('/');

        this.socket = io(url, {
            // origin,
            transports: ["websocket"],
            path,
            query: {
                api_level: __GLOBAL_API_LEVEL__
            },
            rejectUnauthorized: false,
            autoConnect: false
        });
        this.socket.on('connect', () => {
            this.socket.io.engine.binaryType = "blob";
        });
    }

    public get id() {
        return this.socket.id;
    }

    public connect() {
        this.socket.connect();
    }

    public close() {
        this.socket.close();
    }
}

export type SocketConstructor<T> = new (...args: any[]) => T;

export function SocketMixin<T>(
    ...mixins: ((SocketClass: SocketConstructor<Socket>) => SocketConstructor<Socket>)[]
): new (...args: any[]) => Socket & T {
    return mixins.reduce((SocketClass, mixin) => mixin(SocketClass), Socket) as new (...args: any[]) => Socket & T;
}
