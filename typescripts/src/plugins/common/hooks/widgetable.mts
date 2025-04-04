
export function storeWidgetValue(title: string, widgetIndex: number, value: any, outputType: string) {
    localStorage.setItem(`widgetValue_${title}_${widgetIndex}`, JSON.stringify({
        value,
        outputType
    }))
}
export function getStoredWidgetValue(title: string, widgetIndex: number): {
    value: any,
    outputType: string
} | null {
    const storedValue = localStorage.getItem(`widgetValue_${title}_${widgetIndex}`)
    if (!storedValue) return null;
    const { value, outputType } = JSON.parse(storedValue);
    // if (outputType == "IMAGE" || outputType == "MASK") {
    //     console.log("getStoredWidgetValue", value, outputType)
    // }
    return {
        value,
        outputType
    }
}