import { Identify } from "../../store/photoshop.mts";


export function makeLayerIdentify(id: number, name: string, level = 0): Identify {
    return ('-'.repeat(level) + `${name} (id:${id})`) as any as never
}
export function makeDocumentIdentify(id: number, name: string): Identify {
    return (`${name} (id:${id})`) as any as never
}
export function parseLayerIdentify(identify: Identify | string): {name: string, id: number} {
    const splitter = (identify as string).split(' (id:');
    return {
        name: splitter[0],
        id: parseInt(splitter[1].slice(0, -1))
    }
}
export function parseDocumentIdentify(identify: Identify | string): {name: string, id: number} {
    return parseLayerIdentify(identify);
}