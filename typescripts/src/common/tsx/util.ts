import { useEffect, useRef } from "react";

export function computeUIWeightCSS(uiWeight: number | undefined) {
    uiWeight = uiWeight || 12;
    return { 
        flex: `${uiWeight} 0 calc(${uiWeight / 12 * 100}% - 10px)`,
        maxWidth: `100%`
    }
}


// 添加这个自定义 hook 来跟踪依赖项变化
export function useTraceUpdate(name: string, props: any) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps: any, [k, v]) => {
            if (prev.current[k] !== v) {
                ps[k] = [prev.current[k], v];
            }
            return ps;
        }, {});
        
        if (Object.keys(changedProps).length > 0) {
            console.log(`${name} Changed props:`, changedProps);
        }
        
        prev.current = props;
    });
}