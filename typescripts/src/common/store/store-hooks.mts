import { useState, useEffect } from "react";
import { Store } from "./store.mts";

export function useStore<T extends Object>(store: Store<T> | null, path: string | string[]) {
    const [state, setState] = useState<T | null>(store ? { ...store.data } : null)
    const [prevState, setPrevState] = useState(store ? {...store.data} : null)
    const paths = Array.isArray(path) ? path : [path];
    useEffect(() => {
        if (!store) {
            return;
        }
        setState({ ...store.data })
    }, [store])

    useEffect(() => {
        if (!store) {
            return;
        }
        const callbacks = paths.map(path => {
            const callback = () => {
                setPrevState(state)
                setState(store.data)
            }
            store.subscribe(path, callback)
            return callback;
        });

        // 组件卸载时执行清理函数
        return () => {
            callbacks.forEach(callback => {
                store.unsubscribe(callback)
            })
        }
    }, [store, path])


    return {
        state: state || null,
        prevState: prevState || null
    }
}