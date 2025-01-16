export default function(sdppp) {
    /**
     * Handle SDPPP Get Document
     * 处理 SDPPP Get Document
     * 
     * only keep the first widget, set the output type to DOCUMENT
     * 只保留第一个控件, 将输出类型设置为 DOCUMENT
     */
    sdppp.widgetable.add('SDPPP Get Document', (node) => {
        return {
            title: node.title,
            widgets: [{
                value: node.widgets[0].value,
                outputType: "DOCUMENT"
            }]
        }
    })
    /**
     * Handle SDPPP Get Layer By ID
     * 处理 SDPPP Get Layer By ID
     * 
     * only keep the first widget, set the output type to LAYER
     * 只保留第一个控件, 将输出类型设置为 LAYER
     */
    sdppp.widgetable.add('SDPPP Get Layer By ID', (node) => {
        return {
            title: node.title,
            widgets: [{
                value: widgets[0].value,
                outputType: "LAYER"
            }]
        }
    })
    /**
     * Handle PrimitiveNode
     * 处理 PrimitiveNode
     * 
     * first use the name of the connected output as title, if not connected then use the node title
     * 首先标题优先使用它所连接的输出的名称，如果没有连接就使用节点的标题
     * 
     * Then, if there are multiple widgets, only keep the first two
     * 其次，如果有多个控件，则只保留前两个控件。
     * 
     * If the first widget is a number type and suitable for dragging, only keep the first widget
     * 如果第一个控件是数字类型且适用拖动控件，则只保留第一个控件
     */
    sdppp.widgetable.add('PrimitiveNode', (node) => {
        let title = node.title.startsWith("Primitive") ? nameByTitleOrConnectedOutput(node) : node.title;
        if (!node.widgets || node.widgets.length == 0) {
            return null;
        }
        let widgets = node.widgets.slice(0, 2)
            .map((widget, index) => ({
                value: widget.value,
                name: widget.label || widget.name,
                outputType: widget.type || "string",
                options: widget.options,
                uiWeight: index == 0 ? 2 : 0.8
            }))
        if (widgets[0].outputType == "number") {
            let isStepRangeTooBig = ((widgets[0].options.max - widgets[0].options.min) / widgets[0].options.step) > 1000;
            if (!isStepRangeTooBig) {
                widgets = widgets.slice(0, 1);
            }
        }
        return {
            title,
            widgets
        }
    })
    /**
     * Handle rgthree nodes
     * 处理 rgthree 系列节点
     * 
     * FastMute nodes only have one checkbox, so we can omit the widget name
     * FastMute节点只有一个勾选框，所以可以不保留控件名字
     */
    sdppp.widgetable.add('*rgthree*', (node) => {
        return {
            title: node.title,
            widgets: node.widgets.map((widget) => ({
                value: widget.value,
                name: '',
                outputType: widget.type || "toggle",
                options: widget.options
            }))
        }
    })
}


/**
 * get the name of the input where this node is connected to, or the title of the node if not connected
 * 获取到这个节点连接的输入的名称，或者如果没有连接就返回节点的标题
 * 
 * @param {*} node 
 * @returns 
 */
function nameByTitleOrConnectedOutput(node) {
    return node.outputs?.[0].widget?.name || node.title;
}
