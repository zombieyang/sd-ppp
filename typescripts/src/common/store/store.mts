import { applyPatch, compare, deepClone, getValueByPointer, Operation } from "fast-json-patch";

export interface StoreSubscriber {
    (cur: any, prev: any): any
}
const STORE_MUTATIONS = Symbol('STORE_MUTATIONS');

export class Store<T extends Object> {
    protected readonly _data: T;
    // public data: Readonly<T>;
    protected _mutationRecords: Operation[] = []
    protected storedMinVersion = 0; // the version of the data that has been sent to the server
    protected _version = 0; // the version of the data that has been modified but not sent to the server
    public get version() {
        return this._version;
    }
    public flush() {
        return {
            operations: this._mutationRecords.slice(0),
            fromVersion: this.storedMinVersion,
            toVersion: this.version
        }
    } 
    public flushDone(version: number) {
        this._mutationRecords = this._mutationRecords.slice(version - this.storedMinVersion);
        this.storedMinVersion = version;
    }
    public patchVersionAcceptable(fromVersion: number) {
        return this._version != -1 && fromVersion <= this._version;
    }

    public patchData(operations: Operation[]) {
        // if (this.storedMinVersion < this._version) {
        //     operations = operations.slice(this.storedMinVersion - this._version);
        // }
        const originData = deepClone(this._data);
        applyPatch(this._data, operations);
        this._version += operations.length;
        this.storedMinVersion = this._version;
        this.dispatch(operations, originData);
    }

    public get data(): T {
        return deepClone(this._data);
    }

    static [STORE_MUTATIONS]: string[] = [];
    constructor(data: T) {
        this._data = deepClone(data);
    }

    public sync(data: T, version: number) {
        const originData = this._data;
        const operations = compare(originData, data);

        Object.assign(this._data, data);
        this.storedMinVersion = this._version = version;

        this.dispatch(operations, originData);
    }

    protected subscribers: [string, StoreSubscriber][] = [];
    public subscribe(path: string, callback: StoreSubscriber) {
        this.subscribers.push([path, callback]);
    }
    public unsubscribe(callback: StoreSubscriber) {
        this.subscribers = this.subscribers.filter(([path, cb]) => {
            return cb != callback;
        })
    }
    protected dispatch(operations: Operation[], originData: any) {
        // Track changed paths and their original values
        const changedPaths = new Map<string, any>();
        
        // Record all changes first
        operations.forEach(op => {
            this.subscribers.forEach(([path, _]) => {
                if (op.path.startsWith(path) && !changedPaths.has(path)) {
                    changedPaths.set(path, JSON.stringify(path === "/" ? originData : getValueByPointer(originData, path)));
                }
            });
        });

        // Then trigger callbacks for paths that actually changed
        changedPaths.forEach((originValueJSON, path) => {
            const newValue = path === "/" ? this._data : getValueByPointer(this._data, path);
            // Only trigger if values are different
            if (originValueJSON !== JSON.stringify(newValue)) {
                this.subscribers
                    .filter(([subPath, _]) => {
                        return subPath === path
                    })
                    .forEach(([_, callback]) => {
                        let res = {}
                        try {
                            res = callback(newValue, JSON.parse(originValueJSON || {}));
                        } catch (e: any) {
                            console.error(e.stack || e.message || e);
                        }
                        if (res instanceof Promise) {
                            res.catch((e: any) => {
                                console.error(e.stack || e.message || e);
                            });
                        }
                    });
            }
        });
    }
}
export function StoreMutation(target: any, propertyKey: string, originalDescriptor: any) {
    if (!target.constructor[STORE_MUTATIONS]) {
        target.constructor[STORE_MUTATIONS] = [];
    }
    target.constructor[STORE_MUTATIONS].push(propertyKey);
    
    return {
        value: function(this: Store<any>, ...args: any[]) {
            const originData = deepClone(this._data);
            originalDescriptor.value.apply(this, args);
            const operations = compare(originData, this._data);
            if (operations.length == 0) return;
            this._mutationRecords.push(...operations);
            this._version += operations.length;

            this.dispatch(operations, originData);
        }
    }
};

interface MainStoreData {   
    sid: string
    ssid: string
}
export class MainStore<T extends Object> extends Store<T & MainStoreData> {
    constructor(data: T) {
        super(Object.assign({
            sid: '',
            ssid: ''
        }, data || {}));
    }

    @StoreMutation
    setSID(sid: string) {
        this._data.sid = sid;
        this._data.ssid = sid.slice(0, 4);
    }
}