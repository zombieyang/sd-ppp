import { io } from 'socket.io-client';
import { __GLOBAL_API_LEVEL__ } from '../version.mjs';

export class Socket {
    protected readonly socket: any;
    constructor(url: string) {
        url = url.split('?')[0].split('#')[0];
        const path = '/' + [url.split('/').slice(3).filter(p => p).join('/'), 'sd-ppp/'].filter(p => p).join('/');

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
