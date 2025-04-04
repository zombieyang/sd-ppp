import { StoreSubscriber } from "./store.mjs";

export interface StoreMapSubscriber {
    (key: string, cur: any, prev: any): any
};

export abstract class StoreMap<U> {
    protected storeMap: Map<string, U> = new Map<string, U>();

    abstract createStore(data: any, version: number): U;

    public storeCount(): number {
        return this.storeMap.size;
    }
    public getStore(key: string): U | undefined {
        return this.storeMap.get(key);
    }
    public getAllStore(): Record<string, U> {
        return Object.fromEntries(this.storeMap.entries());
    }

    protected subscribers: [string, StoreMapSubscriber][] = [];
    protected subscribersWithoutKey: WeakMap<StoreMapSubscriber, { [key: string]: StoreSubscriber }> = new WeakMap();
    public subscribe(path: string, callback: StoreMapSubscriber) {
        this.subscribers.push([path, callback]);
        const subscribersWithoutKey: { [key: string]: StoreSubscriber } = {};
        this.subscribersWithoutKey.set(callback, subscribersWithoutKey);
        this.storeMap.forEach((store, key) => {
            subscribersWithoutKey[key] = callback.bind(this, key);
            (store as any).subscribe(path, subscribersWithoutKey[key]);
        })
    }
    public unsubscribe(callback: StoreMapSubscriber) {
        this.subscribers = this.subscribers.filter(([path, cb]) => {
            return cb != callback;
        })
        const subscribersWithoutKey = this.subscribersWithoutKey.get(callback);
        if (!subscribersWithoutKey) return;
        this.storeMap.forEach((store, key) => {
            (store as any).unsubscribe(subscribersWithoutKey[key]);
        });
    }

    public addStore(key: string, data: any, version: number): void {
        const store = this.createStore(data, version)
        this.storeMap.set(key, store);
        this.subscribers.forEach(([path, callback]) => {
            let subscribersWithoutKey = this.subscribersWithoutKey.get(callback);
            if (!subscribersWithoutKey) {
                subscribersWithoutKey = {};
                this.subscribersWithoutKey.set(callback, subscribersWithoutKey);
            }
            subscribersWithoutKey[key] = callback.bind(this, key);
            (store as any).subscribe(path, subscribersWithoutKey[key]);

            if (path == "/") callback(key, data, null);
        });
    }
    public removeStore(key: string): void {
        const store = this.storeMap.get(key);
        if (!store) return;
        this.subscribers.forEach(([path, callback]) => {
            let subscribersWithoutKey = this.subscribersWithoutKey.get(callback);
            if (!subscribersWithoutKey) return;
            (store as any).unsubscribe(subscribersWithoutKey[key]);
            
            if (path == "/") callback(key, null, (store as any).data);
        });
        this.storeMap.delete(key);
    }

    public sync(payload: string[] | { [key: string]: { data: any, version: number } }): void {
        if (payload instanceof Array) {
            const currentKeys = Array.from(this.storeMap.keys());
            const addKeys = payload.filter(key => !currentKeys.includes(key));
            const removeKeys = currentKeys.filter(key => !payload.includes(key));
            addKeys.forEach(key => this.addStore(key, {}, 0));
            removeKeys.forEach(key => this.removeStore(key));

        } else {
            const removeKeys = Array.from(this.storeMap.keys()).filter(key => !Object.keys(payload).includes(key));
            removeKeys.forEach(key => this.removeStore(key));
            for (const key in payload) {
                const { data, version } = payload[key];
                if (this.storeMap.has(key)) {
                    // @ts-ignore
                    this.storeMap.get(key)?.sync(data, version);
                } else {
                    this.addStore(key, data, version);
                }
            }
        }

    }
}
