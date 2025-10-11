/**
 * This file defines how SDPPP reads ComfyUI workflow and converts it into a form with widgets.
 * 本文件用于定义SDPPP如何读取ComfyUI工作流并转换为控件式表单。包括如何控制控件的占用空间、换行方式等
 * 
 * 
 * ### outputType -- the type of the widget
 * ### outputType -- 控件的类型
 * toggle: 勾选框
 * number: 数字
 * string/customtext: 字符串
 * combo: 下拉框
 * IMAGE_PATH: 图片路径
 * MASK_PATH: 遮罩路径
 * PS_DOCUMENT: Photoshop 文档
 * PS_LAYER: Photoshop 图层
 * 
 * 
 * ### How to control the space of widgets and line breaks?
 * Each line can contain 12 uiWeight widgets, if it exceeds, it will break the line
 * For example, if there are two widgets with uiWeight of 8 and 4, they will occupy one line, occupying two-thirds and one-third of the space respectively
 * If there are three widgets with uiWeight of 4, 4, and 4, they will share the space of one line equally
 * The default uiWeight of each widget is 12, which means they will occupy one line by default
 * ### 如何控制控件的占用空间、换行方式?
 * 每一行，能容纳下uiWeight总和为12的控件，如果超了就会换行
 * 参见PrimitiveNumber有两个控件，uiWeight分别为8和4，那么这两个控件就会占用一行，分别占用三分之二和三分之一的空间
 * 如果有三个控件，uiWeight分别为4、4、4，那么它们就会平均分配一行的空间
 * 默认情况下，控件的uiWidget就是12，代表它们默认就会占用一行。
 */


export default function (sdppp, version = 1) {
    /**
     * Handle SDPPP Get Document
     * 处理 SDPPP Get Document
     * 
     * only keep the first widget, set the output type to PS_DOCUMENT
     * 只保留第一个控件, 将输出类型设置为 PS_DOCUMENT
     */
    sdppp.widgetable.add('SDPPP Get Document', {
        formatter: (node) => {
            return {
                title: getTitle(node),
                widgets: [{
                    value: node.widgets[0].value,
                    outputType: "PS_DOCUMENT",
                    options: {
                        values: typeof node.widgets[0].options.values == 'function' ? node.widgets[0].options.values() : node.widgets[0].options.values
                    }
                }]
            }
        }
    })
    /**
     * Handle SDPPP Get Layer By ID
     * 处理 SDPPP Get Layer By ID
     * 
     * only keep the first widget, set the output type to PS_LAYER
     * 只保留第一个控件, 将输出类型设置为 PS_LAYER
     */
    sdppp.widgetable.add('SDPPP Get Layer By ID', {
        formatter: (node) => {
            return {
                title: getTitle(node),
                widgets: [{
                    value: node.widgets[0].value,
                    outputType: "PS_LAYER",
                    options: {
                        values: node.widgets[0].options.values,
                        documentNodeID: sdpppX.findDocumentNodeRecursive(node)?.id || 0
                    }
                }]
            }
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
     * 如果第一个控件是数字类型且其精度适用拖动控件，则只保留第一个控件
     */
    sdppp.widgetable.add('PrimitiveNode', {
        formatter: (node) => {
            let title = node.title.startsWith("Primitive") ? nameByConnectedOutputOrTitle(node) : getTitle(node);
            if (!node.widgets || node.widgets.length == 0) {
                return null;
            }
            let sliceNum = 2;
            if (node.widgets.length == 2 && node.widgets[1].name == "control_after_generate" && node.widgets[1].value == 'fixed') {
                sliceNum = 1;
            }
            let widgets = node.widgets.slice(0, sliceNum)
                .map((widget, index) => {
                    const ret = {
                        value: widget.value,
                        outputType: widget.type || "string",
                        options: widget.options,
                        uiWeight: 12
                    }
                    if (widget.type == "number" || widget.type == "combo") {
                        ret.uiWeight = index == 0 ? (sliceNum == 2 ? 8 : 6) : 4
                    }
                    if (widget.type == "toggle") {
                        ret.uiWeight = 4;
                        ret.name = widget.label || widget.name
                    }
                    return ret
                })
                .filter(Boolean)
            return {
                title,
                widgets
            }
        }
    })
    /**
     * Handle rgthree nodes
     * 处理 rgthree 系列节点
     * 
     * FastMute nodes only have one checkbox, so we can omit the widget name
     * FastMute节点只有一个勾选框，所以可以不保留控件名字
     */
    sdppp.widgetable.add('*rgthree*', {
        formatter: (node) => {
            if (node.type.startsWith('Power Lora Loader')) {
                return {
                    title: getTitle(node),
                    widgets: node.widgets
                        .filter(widget => widget.name.startsWith('lora_'))
                        .map((widget) => ({
                            value: widget.value.on,
                            name: widget.value.lora,
                            outputType: 'toggle',
                            options: { on: true, off: false },
                            uiWeight: 12
                        }))
                }
            }
            if (node.properties['toggleRestriction'] == 'always one' && node.widgets.length > 1) {
                const selected = node.widgets.find(widget => {
                    return fixRGthreeWidgetValue(widget.type, widget.value)
                }) || node.widgets[0];
                return {
                    title: getTitle(node),
                    widgets: [{
                        value: removeEnablePrefix(selected.label || selected.name),
                        name: '',
                        outputType: node.widgets.length == 2 ? 'segment' : 'combo',
                        options: {
                            values: node.widgets.map((widget) => (
                                removeEnablePrefix(widget.label || widget.name)
                            ))
                        },
                        uiWeight: 12
                    }]
                }
            }
            return {
                title: getTitle(node),
                widgets: node.widgets.map((widget) => ({
                    value: fixRGthreeWidgetValue(widget.type, widget.value),
                    name: removeEnablePrefix(widget.label || widget.name),
                    outputType: fixRGthreeWidgetType(widget.type),
                    options: widget.options,
                    uiWeight: 12
                }))
            }
            function fixRGthreeWidgetValue(type, value) {
                if (type == 'custom') {
                    return value.toggled
                }
                return value
            }
            function fixRGthreeWidgetType(type) {
                if (type == 'custom') {
                    return 'toggle'
                }
                return type || 'toggle'
            }
            function removeEnablePrefix(value) {
                return value.replace(/^(enable[-_ ]?)?/gi, '');
            }
        },
        setter: (node, widgetIndex, value) => {
            if (node.type.startsWith('Power Lora Loader')) {
                const ws = node.widgets.filter(widget => widget.name.startsWith('lora_'));
                if (ws[widgetIndex].name.startsWith('lora_')) {
                    if (ws[widgetIndex].value.on != value) {
                        ws[widgetIndex].value.on = value;
                    }
                }
                return true;

            } else if (
                node.properties['toggleRestriction'] == 'always one'
            ) {
                const groupName = value;
                node.widgets.forEach((widget, index) => {
                    if ((widget.label || widget.name) == 'Enable ' + groupName) {
                        if (!fixRGthreeWidgetValue(widget.type, widget.value)) {
                            changeRGthreeWidgetValue(widget, true);
                        }
                    } else {
                        if (fixRGthreeWidgetValue(widget.type, widget.value)) {
                            changeRGthreeWidgetValue(widget, false);
                        }
                    }
                });
                return true;

            } else if (node.widgets[widgetIndex].type == 'custom') {
                if (node.widgets[widgetIndex].value.toggled != value) {
                    node.widgets[widgetIndex].doModeChange();
                }
                return true
            }
            return false;
            function fixRGthreeWidgetValue(type, value) {
                if (type == 'custom') {
                    return value.toggled
                }
                return value
            }
            function changeRGthreeWidgetValue(widget, value) {
                if (widget.type == 'custom') {
                    if (widget.value.toggled != value) {
                        widget.doModeChange();
                    }
                } else {
                    if (widget.doModeChange && widget.value != value) {
                        widget.doModeChange();

                    } else {
                        widget.value = value;
                        widget.callback();
                    }
                }
            }
        }
    })

    function switchFormatter(node) {
        if (!node.widgets.length || node.widgets[0].options.max > 50) return null;
        const max = node.widgets[0].options.max;
        const ret = {
            title: getTitle(node),
            widgets: [
                {
                    value: node.widgets[0].value,
                    outputType: "combo",
                    options: {
                        values: Array.from({ length: max }, (_, i) => i + 1)
                    },
                    uiWeight: 12
                }
            ]
        }
        return ret;

    }
    sdppp.widgetable.add("ImpactInversedSwitch", {
        formatter: switchFormatter
    })
    sdppp.widgetable.add("ImpactSwitch", {
        formatter: switchFormatter
    })

    /**
     * Handle LoadImage
     * 处理 LoadImage 节点
     * 
     */
    sdppp.widgetable.add('LoadImage', {
        formatter: (node) => {
            if (version == 2) {
                return {
                    title: getTitle(node),
                    widgets: [{
                        value: node.widgets[0].value,
                        outputType: "images",
                        options: node.widgets[0].options
                    }]
                }

            } else if (version == 1) {
                return {
                    title: getTitle(node),
                    widgets: [{
                        value: node.widgets[0].value,
                        outputType: "IMAGE_PATH",
                        options: node.widgets[0].options
                    }]
                }

            }
        },
        setter: (node, widgetIndex, value) => {
            return false;
        }
    })
    /**
     * Handle LoadImageMask
     * 处理 LoadImageMask
     * 
     */
    sdppp.widgetable.add('LoadImageMask', {
        formatter: (node) => {
            if (version == 2) {
                return {
                    title: getTitle(node),
                    widgets: [{
                        value: node.widgets[0].value,
                        outputType: "masks",
                        options: node.widgets[0].options
                    }]
                }

            } else if (version == 1) {
                return {
                    title: getTitle(node),
                    widgets: [{
                        value: node.widgets[0].value,
                        outputType: "MASK_PATH",
                        options: node.widgets[0].options
                    }]
                }

            }
        },
        setter: (node, widgetIndex, value) => {
            return false;
        }
    })

    sdppp.widgetable.add("CheckpointLoaderSimple", {
        formatter: (node) => {
            return {
                title: getTitle(node),
                widgets: [{
                    value: node.widgets[0].value,
                    outputType: "combo",
                    options: node.widgets[0].options
                }]
            }
        }
    })

    // krita的
    sdppp.widgetable.add('ETN_Parameter', {
        formatter: (node) => {
            const outputTypeMap = {
                'number (integer)': { type: "number", step: 1 },
                'prompt (positive)': { type: "text", subType: "positive-prompt" },
                'toggle': { type: "toggle" },
                // ...其他类型映射
            };

            const paramType = node.widgets[1].value;
            const mappedType = outputTypeMap[paramType] || { type: paramType } || { type: "string" };

            return {
                title: getTitle(node),
                widgets: [{
                    value: node.widgets[2].value, // 主值widget
                    name: node.widgets[0].value,   // 参数名widget
                    outputType: mappedType.type,
                    options: {
                        ...node.widgets[2].options,
                        min: node.widgets[3].value,
                        max: node.widgets[4].value,
                        ...mappedType
                    },
                    uiWeight: 12 // 独占整行
                }]
            }
        }
    });

    const floatFormatter = (node) => {
        if (!('sdppp_max' in node.properties)) {
            node.setProperty('sdppp_max', 100);
        }
        if (!('sdppp_min' in node.properties)) {
            node.setProperty('sdppp_min', 0);
        }
        if (!('sdppp_step' in node.properties)) {
            node.setProperty('sdppp_step', 0.01);
        }
        return {
            title: getTitle(node),
            widgets: [{
                value: node.widgets[0].value, // 主值widget
                name: '',   // 参数名widget
                outputType: "number",
                options: {
                    max: node.properties.sdppp_max,
                    min: node.properties.sdppp_min,
                    step: node.properties.sdppp_step,
                    slider: true
                },
                uiWeight: 12 // 独占整行
            }]
        }
    }
    sdppp.widgetable.add("easy float", {
        formatter: floatFormatter
    })
    sdppp.widgetable.add("ImpactFloat", {
        formatter: floatFormatter
    })
    function intFormatter(node) {
        if (!('sdppp_max' in node.properties)) {
            node.setProperty('sdppp_max', 100);
        }
        if (!('sdppp_min' in node.properties)) {
            node.setProperty('sdppp_min', 0);
        }
        return {
            title: getTitle(node),
            widgets: [{
                value: node.widgets[0].value, // 主值widget
                name: '',   // 参数名widget
                outputType: "number",
                options: {
                    max: node.properties.sdppp_max,
                    min: node.properties.sdppp_min,
                    step: 1,
                    slider: true 
                },
                uiWeight: 12 // 独占整行
            }]
        }
    }
    sdppp.widgetable.add("easy int", {
        formatter: intFormatter
    })
    sdppp.widgetable.add("ImpactInt", {
        formatter: intFormatter
    })



    sdppp.widgetable.add("ImpactStringSelector", {
        formatter: (node) => {
            node.constructor["@sdppp_type"] = {
              type: "combo",
              values: ["combo", "segment"],
            };
            
            if (node.widgets[1] && node.widgets[1].value) {
                throw new Error("multiline string selector is not supported");
            }
            if (!node.properties["sdppp_type"]) {
                node.setProperty("sdppp_type", "combo");
            }
            const options = node.widgets[0].value.split('\n');
            const selecting = node.widgets[2].value;

            return {
                title: getTitle(node),
                widgets: [{
                    value: options[selecting], // 主值widget
                    name: '',   // 参数名widget
                    outputType: node.properties["sdppp_type"] || "combo",
                    options: {
                        values: options 
                    },
                    uiWeight: 12 // 独占整行
                }]
            }
        },
        setter: (node, widgetIndex, value) => {
            const options = node.widgets[0].value.split('\n');
            const index = options.indexOf(value);
            node.widgets[2].value = index == -1 ? 0 : index;
            return true;
        }
    })

    sdppp.widgetable.add("ShowText|pysssss", {
        formatter: (node) => {
            return {
                title: getTitle(node),
                widgets: [{
                    value: node.widgets[1]?.value || node.widgets[0]?.value || '',
                    outputType: "string"
                }]
            }
        }
    })

    sdppp.widgetable.add('__DEFAULT__', {
        formatter: (node) => {
            return {
                id: node.id,
                title: getTitle(node),
                widgets: node.widgets.map((widget) => {
                    if (widget.type == "speak_and_recognation_type") return null;
                    const ret = {
                        outputType: widget.type || "string",
                        value: widget.value,
                        options: widget.options,
                        uiWeight: widget.uiWeight || 12
                    }
                    if (node.widgets.length != 1) {
                        ret.name = widget.label || widget.name;
                    }

                    return ret;
                }).filter(Boolean)
            };
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
function nameByConnectedOutputOrTitle(node) {
    return sdpppX.getNodeTitle(node, node.outputs?.[0].widget?.name);
}
/**
 * get the title of the node, with priority to avoid conflicts with the hidden property sdppp_widgetable_title
 * 获取节点的标题, 优先用于规避冲突的隐藏属性sdppp_widgetable_title
 * 
 * @param {*} node 
 * @returns 
 */
function getTitle(node) {
    return sdpppX.getNodeTitle(node);
}
