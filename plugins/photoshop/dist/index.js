"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // external-global-plugin:SDPPPInternal
  var require_SDPPPInternal = __commonJS({
    "external-global-plugin:SDPPPInternal"(exports, module) {
      "use strict";
      module.exports = window.SDPPPInternal;
    }
  });

  // external-global-plugin:react
  var require_react = __commonJS({
    "external-global-plugin:react"(exports, module) {
      "use strict";
      module.exports = window.React;
    }
  });

  // external-global-plugin:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "external-global-plugin:react/jsx-runtime"(exports, module) {
      "use strict";
      module.exports = window.ReactJSXRuntime;
    }
  });

  // external-global-plugin:react-dom/client
  var require_client = __commonJS({
    "external-global-plugin:react-dom/client"(exports, module) {
      "use strict";
      module.exports = window.ReactDOMClient;
    }
  });

  // typescripts/modules/photoshop/src/tsx/SDPPPInternalBridge.tsx
  var SDPPPInternalBridge_exports = {};
  __reExport(SDPPPInternalBridge_exports, __toESM(require_SDPPPInternal(), 1));

  // typescripts/src/common/en.mts
  var en_default = {
    "SDPPP Get Document": "SDPPP Get Document",
    "SDPPP Get Layer By ID": "SDPPP Get Layer",
    "SDPPP Get Linked Layers": "SDPPP Get Linked Layers",
    "SDPPP Get Layers In Group": "SDPPP Get Layers In Group",
    "SDPPP Get Text From Layer": "SDPPP Get Text From Layer",
    "SDPPP Parse Layer Info": "SDPPP Parse Layer Info",
    "SDPPP Get Selection": "SDPPP Get Selection",
    "SDPPP Get Image From Photoshop": "SDPPP Get Image From Photoshop",
    "SDPPP Send Images To Photoshop": "SDPPP Send Images To Photoshop",
    "SDPPP Settings": "SDPPP Settings/Misc"
  };

  // typescripts/src/common/zh-cn.mts
  var zh_cn_default = {
    // speicial document/ layer
    "### Active Document ###": "### \u5F53\u524D\u6587\u6863 ###",
    "### The Canvas ###": "### \u6574\u4E2A\u753B\u5E03 ###",
    "### New Layer ###": "### \u65B0\u56FE\u5C42 ###",
    "### Selected Layer ###": "### \u6240\u9009\u56FE\u5C42 ###",
    "### Keep Size or Fit Canvas ###": "### \u4FDD\u6301\u5C3A\u5BF8\u6216\u9002\u5E94\u753B\u5E03 ###",
    "_SDPPP_PSD_": "_SDPPP_PSD_",
    // A1111 UI
    "Save and run immediately": "\u4FDD\u5B58\u5E76\u7ACB\u5373\u6267\u884C",
    "Close": "\u5173\u95ED",
    "Select a {0}": `\u9009\u62E9\u4E00\u4E2A {0}`,
    // comfyui dialog
    "How to use .ccx file": "\u5982\u4F55\u4F7F\u7528 .ccx \u6587\u4EF6",
    "1. If you have installed Adobe Creative Cloud": "1. \u5982\u679C\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 Adobe Creative Cloud",
    "Just double click the .ccx file, it will install the plugin automatically": "\u53CC\u51FB .ccx \u6587\u4EF6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5B89\u88C5",
    "2. If you don't have Adobe Creative Cloud": "2. \u5982\u679C\u4F60\u6CA1\u6709 Adobe Creative Cloud",
    "Rename .ccx to .zip and extract it into ": "\u5C06 .ccx \u91CD\u547D\u540D\u4E3A .zip \u5E76\u89E3\u538B\u5230",
    "or": "\u6216",
    "Photoshop directory": "Photoshop \u5B89\u88C5\u76EE\u5F55",
    // comfyui error
    "Cannot connect multiple different document widgets with same value": "\u4E0D\u80FD\u8FDE\u63A5\u591A\u4E2A\u5177\u6709\u76F8\u540C\u503C\u7684\u6587\u6863\u5C0F\u90E8\u4EF6",
    "You can only have one SDPPP Settings node in a workflow": "\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A SDPPP Settings \u8282\u70B9",
    "convert widget {0} failed:": "\u63A7\u4EF6{0}\u8F6C\u6362\u5931\u8D25\uFF1A",
    "hidden webview load failed: {0}, please select a browser page to continue": "\u5185\u7F6E webview \u52A0\u8F7D\u5931\u8D25: {0}\uFF0C\u8BF7\u9009\u62E9\u4E00\u4E2A\u6D4F\u89C8\u5668\u9875\u9762\u7EE7\u7EED",
    // comfy node title
    "SDPPP Get Document": "SDPPP\u83B7\u53D6\u6587\u6863(GetDocument)",
    "SDPPP Get Layer By ID": "SDPPP\u83B7\u53D6\u56FE\u5C42(GetLayer)",
    "SDPPP Get Linked Layers": "SDPPP\u83B7\u53D6\u94FE\u63A5\u56FE\u5C42(GetLinkedLayers)",
    "SDPPP Get Layers In Group": "SDPPP\u83B7\u53D6\u7EC4\u4E2D\u56FE\u5C42(GetLayersInGroup)",
    "SDPPP Get Text From Layer": "SDPPP\u83B7\u53D6\u56FE\u5C42\u6587\u672C(GetTextFromLayer)",
    "SDPPP Parse Layer Info": "SDPPP\u89E3\u6790\u56FE\u5C42\u4FE1\u606F(ParseLayerInfo)",
    "SDPPP Get Selection": "SDPPP\u83B7\u53D6\u9009\u533A(GetSelection)",
    "SDPPP Get Image From Photoshop": "SDPPP\u4ECEPS\u83B7\u53D6\u56FE\u50CF(GetImageFromPhotoshop)",
    "SDPPP Send Images To Photoshop": "SDPPP\u53D1\u9001\u56FE\u50CF\u5230PS(SendImagesToPhotoshop)",
    "SDPPP Send Text To Layer": "SDPPP\u53D1\u9001\u6587\u672C\u5230\u56FE\u5C42(SendTextToLayer)",
    "SDPPP Run Photoshop Action": "SDPPP\u8FD0\u884CPS Action(RunPhotoshopAction)",
    // comfy widget/input
    "download PS plugin (.ccx)": "\u4E0B\u8F7D Photoshop \u63D2\u4EF6 (.ccx)",
    "current ComfyUI pageid: {0}": "\u5F53\u524D ComfyUI \u9875\u9762ID: {0}",
    "current A1111 pageid: {0}": "\u5F53\u524D A1111 \u9875\u9762ID: {0}",
    "document linked": "\u6587\u6863\u53C2\u6570\u5DF2\u94FE\u63A5",
    "layer linked": "\u56FE\u5C42\u53C2\u6570\u5DF2\u94FE\u63A5",
    "bound linked": "\u8303\u56F4\u53C2\u6570\u5DF2\u94FE\u63A5",
    "document": "\u6587\u6863",
    "Document": "\u6587\u6863",
    "DOCUMENT": "\u6587\u6863",
    "document_name": "\u6587\u6863\u540D\u5B57id",
    "layer_nameid": "\u56FE\u5C42\u540D\u5B57id",
    "layer_name": "\u56FE\u5C42\u540D\u5B57",
    "layer_info": "\u56FE\u5C42\u4FE1\u606F",
    "bound_top": "\u8303\u56F4\u4E0A\u8FB9\u8DDD",
    "bound_left": "\u8303\u56F4\u5DE6\u8FB9\u8DDD",
    "bound_width": "\u8303\u56F4\u5BBD\u5EA6",
    "bound_height": "\u8303\u56F4\u9AD8\u5EA6",
    "center_x": "\u4E2D\u5FC3\u70B9x",
    "center_y": "\u4E2D\u5FC3\u70B9y",
    "opacity": "\u900F\u660E\u5EA6",
    "layer": "\u56FE\u5C42",
    "layer_or_group": "\u56FE\u5C42(\u6216\u7EC4)",
    "Layer_or_group": "\u56FE\u5C42(\u6216\u7EC4)",
    "bound": "\u8303\u56F4",
    "bounds": "\u8303\u56F4",
    "bounds [optional]": "\u8303\u56F4[\u53EF\u9009]",
    "boundary": "\u8303\u56F4",
    "Boundary": "\u8303\u56F4",
    "canvas_boundary": "\u753B\u5E03\u8303\u56F4",
    "canvas_bound": "\u753B\u5E03\u8303\u56F4",
    "layer_boundary": "\u56FE\u5C42\u8303\u56F4",
    "layer_bound": "\u56FE\u5C42\u8303\u56F4",
    "Photoshop Disconnected!": "Photoshop \u672A\u8FDE\u63A5\uFF01",
    "rgb_out": "RGB\u8F93\u51FA",
    "alpha_out": "Alpha\u8F93\u51FA",
    "images": "\u56FE\u50CF",
    "text": "\u6587\u672C",
    "ID_mode": "\u7CBE\u786EID\u6A21\u5F0F",
    "name_mode": "\u540D\u5B57\u5339\u914D\u6A21\u5F0F",
    "select": "\u9009\u62E9",
    "document boundary": "\u6587\u6863\u8303\u56F4",
    "layer boundary": "\u56FE\u5C42\u8303\u56F4",
    "selection boundary": "\u9009\u4E2D\u8303\u56F4",
    "save .psd to this workflow": "\u4FDD\u5B58.psd\u5230\u8FD9\u4E2A\u5DE5\u4F5C\u6D41",
    "extract saved .psd to Photoshop": "\u63D0\u53D6\u4FDD\u5B58\u7684.psd\u5230Photoshop",
    "sample .psd": "\u793A\u4F8B.psd",
    "mask": "\u906E\u7F69",
    "name": "\u540D\u79F0",
    "quality": "\u56FE\u50CF\u8D28\u91CF",
    // photoshop UI
    "timeout": "\u8D85\u65F6",
    "--multi-user activated, Not Login!": "--multi-user\u5DF2\u6FC0\u6D3B\uFF0C\u4F46\u672A\u767B\u5F55\uFF01",
    "Logout": "\u767B\u51FA",
    "User: ": "\u7528\u6237: ",
    "connect": "\u8FDE\u63A5",
    "connected": "\u5DF2\u8FDE\u63A5",
    "disconnect": "\u65AD\u5F00",
    "disconnected": "\u5DF2\u65AD\u5F00\u8FDE\u63A5",
    "reconnecting...": "\u91CD\u8FDE\u4E2D...",
    "connecting": "\u8FDE\u63A5\u4E2D",
    "webpages": "\u7F51\u9875\u5217\u8868",
    "workflows": "\u5DE5\u4F5C\u6D41",
    "workflow": "\u5DE5\u4F5C\u6D41",
    "auto run page [{0}] after change..": "\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u9875\u9762 {0}..",
    "auto run workflow [{0}] after change..": "\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u5DE5\u4F5C\u6D41 {0}..",
    "auto run workflow after change..": "\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u5DE5\u4F5C\u6D41..",
    "selection_only": "\u4EC5\u9009\u533A",
    "Queue:": "\u961F\u5217:",
    "Set As:": "\u8BBE\u7F6E\u4E3A:",
    "Error {0}... please contact me via Discord/Github": "\u51FA\u73B0\u9519\u8BEF {0}...\uFF0C\u8BF7\u901A\u8FC7 QQ/Github \u8054\u7CFB\u6211",
    "Webview initialize failed. Please report to me via Discord/Github with your ComfyURL, Operate System": "Webview \u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u901A\u8FC7 QQ/Github \u8054\u7CFB\u6211\u5E76\u9644\u4E0A\u4F60\u7684Comfy\u5730\u5740\u3001\u64CD\u4F5C\u7CFB\u7EDF",
    "Workflow List of ComfyUI with --multi-user is only available for sponsors": '\u5E26"--multi-user"\u7684ComfyUI\u4EC5\u5BF9\u8D5E\u52A9\u8005\u5F00\u653E',
    "Workflow Agent is loading...": "\u8FD0\u884C\u8F7D\u4F53\u5C1A\u5728\u52A0\u8F7D...",
    "(Page ID: {0})Queue: {1}": "(\u9875\u9762ID: {0}) \u961F\u5217\u957F\u5EA6 {1}",
    "no suitable node to control in this workflow": "\u8FD9\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\u6CA1\u6709\u80FD\u63A7\u5236\u7684\u8282\u70B9",
    "Save": "\u4FDD\u5B58",
    "Edit": "\u7F16\u8F91",
    "Edit in ComfyUI": "\u5728 ComfyUI \u4E2D\u7F16\u8F91",
    "using browser page [{0}] for workflow running": "\u6B63\u63A5\u7BA1\u7F51\u9875 [{0}] \u8FD0\u884C\u5DE5\u4F5C\u6D41",
    "workflow running by hidden webview": "\u5DE5\u4F5C\u6D41\u5728\u9690\u85CF\u7684webview\u4E2D\u8FD0\u884C",
    "Lock Image": "\u9501\u5B9A\u56FE\u50CF",
    "Unlock Image": "\u89E3\u9501\u56FE\u50CF",
    "search...": "\u641C\u7D22...",
    "disabled when running in browser page": "\u63A5\u7BA1\u7F51\u9875\u65F6\u4E0D\u53EF\u7528",
    "only supported in Photoshop": "\u4EC5\u5728 Photoshop \u4E2D\u652F\u6301",
    "Login": "\u767B\u5F55",
    "Invitation Code": "\u9080\u8BF7\u7801",
    "Username": "\u7528\u6237\u540D",
    "Password": "\u5BC6\u7801",
    "Please input invitation code": "\u8BF7\u8F93\u5165\u9080\u8BF7\u7801",
    "Please input username": "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
    "Please input password": "\u8BF7\u8F93\u5165\u5BC6\u7801",
    // photoshop connect error
    "502: Maybe the server is not running": "502: \u670D\u52A1\u5668\u53EF\u80FD\u672A\u8FD0\u884C",
    "404: Maybe SDPPP is not installed or failed to run in ComfyUI": "404: \u53EF\u80FD\u5728ComfyUI\u4E2DSDPPP\u672A\u5B89\u88C5\u6216\u8FD0\u884C\u5931\u8D25",
    "{0}. reconnecting...": "{0}. \u91CD\u8FDE\u4E2D...",
    "disconnected to {0} failed {1}": `\u65AD\u5F00\u8FDE\u63A5 {0} \u9519\u8BEF {1}`,
    "version mismatch, please reinstall PS plugin": "\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5 PS \u63D2\u4EF6",
    "instance type not recognized": "\u672A\u8BC6\u522B\u7684\u8F6F\u4EF6\u7C7B\u578B",
    "Error: {0}": "\u9519\u8BEF: {0}",
    "Verification Error": "\u9A8C\u8BC1\u9519\u8BEF",
    // photoshop event error
    "document {0} not found": "\u627E\u4E0D\u5230\u6587\u6863: {0}",
    'only layer kind "TEXT" is supported, invalid layer: {0}': "\u4E0D\u652F\u6301\u975E\u6587\u672C\u56FE\u5C42: {0}",
    "create layer failed": "\u521B\u5EFA\u56FE\u5C42\u5931\u8D25",
    "layer not found {0}": "\u627E\u4E0D\u5230\u56FE\u5C42: {0}",
    "no linked layer for {0}": "\u6CA1\u6709\u94FE\u63A5\u56FE\u5C42: {0}",
    "layer {0} is not a group": "\u56FE\u5C42 {0} \u4E0D\u662F\u4E00\u4E2A\u7EC4",
    "no layer in group {0}": "\u7EC4 {0} \u4E2D\u6CA1\u6709\u56FE\u5C42",
    "layer not found: {0}": "\u627E\u4E0D\u5230\u56FE\u5C42: {0}",
    "No upload_name": "\u4E0A\u4F20\u63A5\u53E3\u8FD4\u56DE\u4E86\u5931\u8D25",
    "get pixel of {0} failed": "\u83B7\u53D6\u50CF\u7D20\u5931\u8D25: {0}",
    "merge group failed": "\u5408\u5E76\u7EC4\u5931\u8D25",
    "invalid name: {0}": "\u975E\u6CD5\u7684\u540D\u79F0: {0}",
    "get_layer_info: layer_identify required": "get_layer_info: \u9700\u8981 layer_identify",
    "invalid action: {0}": "\u65E0\u6548\u7684\u64CD\u4F5C: {0}",
    "create document failed": "\u521B\u5EFA\u6587\u6863\u5931\u8D25",
    "create document for preview": "\u521B\u5EFA\u9884\u89C8\u6587\u6863",
    "resize document for preview": "\u8C03\u6574\u9884\u89C8\u6587\u6863\u5C3A\u5BF8",
    "no first related layer in {0}": "\u7EC4 {0} \u4E2D\u6CA1\u6709\u7B2C\u4E00\u4E2A\u76F8\u5173\u56FE\u5C42",
    "imageDataError: data length is not multiple of width * height": "\u56FE\u50CF\u6570\u636E\u6709\u8BEF: \u6570\u636E\u957F\u5EA6\u4E0D\u662F\u5BBD\u5EA6 * \u9AD8\u5EA6\u7684\u500D\u6570",
    "imageDataError: originComponents must be 1 or 3": "\u56FE\u50CF\u6570\u636E\u6709\u8BEF: originComponents \u5FC5\u987B\u662F 1 \u6216 3",
    "unexpected connection lost, please try to reconnect": "\u610F\u5916\u65AD\u5F00\u8FDE\u63A5\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5",
    "Workflow list is empty, please save a workflow by Comfy's lastest UI": "\u5DE5\u4F5C\u6D41\u5217\u8868\u4E3A\u7A7A\uFF0C\u8BF7\u5728Comfy\u7684\u65B0\u7248UI\u4E2D\u4FDD\u5B58\u4E00\u4E2A\u5DE5\u4F5C\u6D41",
    "No opened ComfyUI pages": "\u6CA1\u6709\u5DF2\u6253\u5F00\u7684ComfyUI\u9875\u9762",
    "comfyAPI is not initialized, maybe comfyUI is too old": "\u65E0\u6CD5\u83B7\u53D6 ComfyAPI\uFF0C\u53EF\u80FD ComfyUI \u7248\u672C\u592A\u65E7",
    "unsupported channel counts: {0}": "\u4E0D\u652F\u6301\u7684\u901A\u9053\u6570: {0}",
    "Timeout, Maybe the URL is wrong": "\u8D85\u65F6\uFF0C\u53EF\u80FD comfy\u5730\u5740 \u586B\u5199\u9519\u8BEF",
    "Workflow list loading failed: {0}": "\u5DE5\u4F5C\u6D41\u5217\u8868\u52A0\u8F7D\u5931\u8D25: {0}",
    "Please register a user in ComfyUI": "\u8BF7\u5728 ComfyUI \u4E2D\u6CE8\u518C\u4E00\u4E2A\u7528\u6237",
    "GetSelection need Photoshop version 25+": "GetSelection \u9700\u8981 Photoshop 25+ \u7248\u672C",
    "Action {0} not found": "Action {0} \u672A\u627E\u5230",
    "Action set {0} not found": "ActionSet {0} \u672A\u627E\u5230",
    // photoshop modal state
    "create document for sent images": "\u7ED9\u53D1\u9001\u7684\u56FE\u7247\u521B\u5EFA\u6587\u6863",
    "show sent images": "\u663E\u793A\u53D1\u9001\u7684\u56FE\u7247",
    "fallback show sent images": "\u53D6\u6D88\u663E\u793A\u53D1\u9001\u7684\u56FE\u7247",
    "get content of layer {0}": "\u83B7\u53D6\u56FE\u5C42 {0} \u7684\u5185\u5BB9",
    "fallback get content of layer {0}": "\u53D6\u6D88\u83B7\u53D6\u56FE\u5C42 {0} \u7684\u5185\u5BB9",
    "get layer info": "\u83B7\u53D6\u56FE\u5C42\u4FE1\u606F",
    "sdppp extract PSD": "sdppp \u5BFC\u5165 PSD",
    "sdppp get PSD": "sdppp \u83B7\u53D6 PSD",
    "set text to layer": "\u8BBE\u7F6E\u56FE\u5C42\u7684\u6587\u672C",
    "run Photoshop Action": "sdppp \u8FD0\u884C Photoshop Action",
    "select layer": "sdppp \u9009\u4E2D\u56FE\u5C42",
    // photoshop dialog/widget
    "{0} wants to extract a PSD file to Photoshop, are you sure?": "{0} \u60F3\u8981\u91CA\u653E\u4E00\u4E2A.psd\u6587\u4EF6\u5230Photoshop\uFF0C\u786E\u5B9A\u5417\uFF1F",
    "should sdppp refuse extracting PSD to Photoshop in this session anymore?": "\u662F\u5426\u8981\u8BA9 sdppp \u62D2\u7EDD\u672C\u6B21PS\u4F1A\u8BDD\u518D\u6B21\u63A5\u53D7.psd\u91CA\u653E\u8BF7\u6C42\uFF1F",
    "Wide Mode": "\u5BBD\u5C4F\u6A21\u5F0F",
    "Quick Set": "\u5FEB\u901F\u8BBE\u7F6E",
    "Selected Layer": "\u9009\u4E2D\u56FE\u5C42",
    "Selected Layer (invert)": "\u9009\u4E2D\u56FE\u5C42(\u53CD\u5411)",
    "Canvas": "\u753B\u5E03",
    "Selection": "\u9009\u533A",
    "Manual": "\u624B\u52A8\u6A21\u5F0F",
    "Auto": "\u81EA\u52A8\u6A21\u5F0F",
    // about
    "This plugin is based on sd-ppp": "\u672C\u63D2\u4EF6\u57FA\u4E8Esd-ppp\u5F00\u53D1",
    "And follows its open source license:": "\u5E76\u9075\u5FAA\u5176\u5F00\u6E90\u534F\u8BAE\uFF1A",
    "Cloud": "\u4E91\u7AEF\u63A8\u8350",
    "Sponsors": "\u8D5E\u52A9",
    "waiting...": "\u865A\u4F4D\u4EE5\u5F85",
    "Links": "\u53CB\u60C5\u94FE\u63A5",
    "Community": "\u793E\u533A",
    "LICENSE:": "\u8BB8\u53EF\u8BC1\uFF1A",
    "Official Site": "\u5B98\u65B9\u7F51\u7AD9",
    // comfy popup
    "upload": "\u4E0A\u4F20",
    "Simplify Workflow": "\u7B80\u5316\u5DE5\u4F5C\u6D41",
    "Photoshop": "Photoshop",
    "Photoshop plugin settings": "Photoshop \u63D2\u4EF6\u8BBE\u7F6E",
    "Photoshop plugin": "Photoshop \u63D2\u4EF6",
    "SDPPP Settings/Misc": "SDPPP \u8BBE\u7F6E/\u6742\u9879",
    "Sample .PSD for this workflow:": "\u793A\u4F8B.PSD",
    "Download Example .PSD": "\u4E0B\u8F7D\u793A\u4F8B.PSD",
    "Maximum Image Size (px):": "\u6700\u5927\u56FE\u50CF\u5C3A\u5BF8(px)",
    "Download": "\u4E0B\u8F7D",
    "Upload": "\u4E0A\u4F20",
    "Reset": "\u91CD\u7F6E",
    "Refresh": "\u5237\u65B0",
    "Comfy URL (You can copy it to connect ComfyUI in the plugin):": "Comfy\u5730\u5740(\u4F60\u53EF\u4EE5\u590D\u5236\u5B83\u5230\u63D2\u4EF6\u4E2D\u8FDE\u63A5ComfyUI):",
    "use slider for number widget:": "\u6570\u5B57\u63A7\u4EF6\u4F7F\u7528\u6ED1\u5757",
    "Photoshop is not connected": "Photoshop \u672A\u8FDE\u63A5",
    "select...": "\u8BF7\u9009\u62E9",
    "click to edit": "\u70B9\u51FB\u7F16\u8F91",
    // comfy call error
    "ComfyManager not found, cannot reboot": "Comfy Manager\u672A\u5B89\u88C5\uFF0C\u65E0\u6CD5\u91CD\u542F",
    "Failed to reboot ComfyUI": "\u91CD\u542FComfyUI\u5931\u8D25"
  };

  // typescripts/src/common/i18n.mts
  var require_ = typeof __require != "undefined" ? __require : void 0;
  var locale = "en";
  if (typeof navigator !== "undefined" && navigator.language) {
    locale = navigator.language == "zh-CN" ? "zhcn" : "en";
  } else if (require_) {
    locale = require_("uxp").host.uiLocale.startsWith("zh") ? "zhcn" : "en";
  }
  function i18n(key, ...args) {
    const formatStr = locale == "zhcn" ? zh_cn_default[key] : key in en_default ? en_default[key] : key;
    if (!formatStr) throw new Error(`i18n key not found: ${key}`);
    return formatStr.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  }
  function isValidI18nKey(key) {
    return key in zh_cn_default;
  }

  // typescripts/modules/photoshop/src/tsx/ActionButton.tsx
  var import_react = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var ActionButton = class extends import_react.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `action-button ${this.props.highlight ? "highlight" : ""}`, onClick: this.props.onClick, children: this.props.children });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/AgentIcon.tsx
  var import_react2 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var AgentIcon = class extends import_react2.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { slot: "icon", className: "sdppp-icon", onClick: this.props.onClick, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/LivePaintingIcon.tsx
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var LivePaintingIcon = class extends import_react3.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { slot: "icon", className: "sdppp-icon", onClick: this.props.onClick, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fill: "currentColor", d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M6.2 9.08L9.068 7 6.2 4.92v4.16zM5 4.214v5.574a.8.8 0 001.212.686l4.445-2.787a.8.8 0 000-1.372L6.212 3.527A.8.8 0 005 4.213z" })
      ] }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/PlayIcon.tsx
  var import_react4 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var PlayIcon = class extends import_react4.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { slot: "icon", className: "sdppp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M4.2 10.88L10.668 7 4.2 3.12v7.76zM3 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L4.212 1.727A.8.8 0 003 2.413z" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/WebPageListItem.tsx
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var WebPageListItem = ({
    pageInstance
  }) => {
    const {
      autoRunning,
      setAutoRunning,
      workflowAgentSID,
      setWorkflowAgentSID
    } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { runPage } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const isWorkflowAgent = workflowAgentSID == pageInstance.sid;
    const isAutoRunning = autoRunning?.value == pageInstance.sid;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { className: `client-list-item${isWorkflowAgent ? " show-tips" : ""}${isWorkflowAgent || isAutoRunning ? " checked" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("sp-label", { class: "client-list-item-left", onClick: () => {
        setWorkflowAgentSID(isWorkflowAgent ? "" : pageInstance.sid);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        "[",
        pageInstance.ssid,
        "] ",
        pageInstance.lastError ? pageInstance.lastError?.replace("sdppp PS side error:", "") : pageInstance.title
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "client-list-item-right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "tips-icon", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AgentIcon, { size: 0.6, onClick: () => {
          setWorkflowAgentSID(isWorkflowAgent ? "" : pageInstance.sid);
        } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ActionButton, { highlight: isAutoRunning, onClick: () => {
          setAutoRunning(isAutoRunning ? null : { type: "page", value: pageInstance.sid });
        }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LivePaintingIcon, { size: 0.6 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(ActionButton, { onClick: () => {
          runPage(pageInstance.sid);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlayIcon, { size: 0.6 }) })
      ] })
    ] });
  };
  var WebPageListItem_default = WebPageListItem;

  // typescripts/modules/photoshop/src/tsx/WebPageList.tsx
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var WebPageList = () => {
    const {
      autoRunning
    } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { pageInstances } = (0, SDPPPInternalBridge_exports.useSDPPPWebpageList)();
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "client-list-title", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: i18n("webpages") }) }),
      !pageInstances.length && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("sp-label", { children: i18n("No opened ComfyUI pages") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "client-list", children: pageInstances.map((item) => {
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(WebPageListItem_default, { pageInstance: item }, item.sid);
      }) }),
      autoRunning?.type == "page" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("sp-label", { class: "autorun-desc", children: i18n(`auto run page [{0}] after change..`, pageInstances.find((item) => item.sid == autoRunning?.value)?.title) }) : ""
    ] });
  };
  var WebPageList_default = WebPageList;

  // typescripts/modules/photoshop/src/tsx/icons/EditIcon.tsx
  var import_react5 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var EditIcon = class extends import_react5.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { slot: "icon", className: "sdppp-icon", onClick: this.props.onClick, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/FolderIcon.tsx
  var import_react6 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var FolderIcon = class extends import_react6.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { slot: "icon", className: "sdppp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/WorkflowListItem.tsx
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var WorkflowListItem = ({
    path,
    isDir,
    isChecked,
    workflow,
    onRun,
    dirname,
    onDirectorySet,
    setEditorMode
  }) => {
    const {
      setAutoRunning,
      workflowAgentSID
    } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const {
      openWorkflow
    } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    if (isDir) {
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("li", { className: "client-list-item", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("sp-label", { class: "client-list-item-left", onClick: () => {
        if (path == "../") {
          const directoryWithoutSuffix = dirname || "";
          const lastSlashIndex = directoryWithoutSuffix.lastIndexOf("/");
          if (lastSlashIndex == -1) {
            onDirectorySet?.("");
          } else {
            onDirectorySet?.(directoryWithoutSuffix.slice(0, lastSlashIndex));
          }
        } else {
          onDirectorySet?.(path);
        }
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FolderIcon, { size: 0.6 }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: path })
      ] }) });
    }
    if (!workflow) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: "client-list-item" + (isChecked ? " checked" : ""), children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("sp-label", { class: "client-list-item-left", onClick: () => {
        setEditorMode(true);
        openWorkflow(workflowAgentSID, workflow.path);
      }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: workflow.error ? workflow.error.replace("sdppp PS side error:", "") : workflow.path }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "client-list-item-right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "tips-icon", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(EditIcon, { size: 0.6, onClick: () => {
          setEditorMode(true);
          openWorkflow(workflowAgentSID, workflow.path);
        } }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ActionButton, { highlight: isChecked, onClick: () => {
          if (!isChecked) {
            setAutoRunning({ type: "workflow", value: path });
          } else {
            setAutoRunning(null);
          }
        }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(LivePaintingIcon, { size: 0.6 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ActionButton, { onClick: () => {
          onRun(workflow.path);
        }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PlayIcon, { size: 0.6 }) })
      ] })
    ] });
  };
  var WorkflowListItem_default = WorkflowListItem;

  // typescripts/modules/photoshop/src/tsx/WorkflowList.tsx
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var WorkflowList = ({ setEditorMode }) => {
    const {
      autoRunning,
      webviewAgentSID,
      workflowAgentSID
    } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const {
      runWorkflow
    } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const {
      workflows,
      workflowsError,
      currentViewingDirectory,
      setCurrentViewingDirectory,
      showingList
    } = (0, SDPPPInternalBridge_exports.useSDPPPWorkflowList)();
    const {
      ssid,
      lastError,
      progress,
      executingNodeTitle,
      queueSize
    } = (0, SDPPPInternalBridge_exports.useAgentState)(workflowAgentSID);
    let statusText = "";
    let queueText = " ";
    let hasLastError = false;
    if (workflowAgentSID) {
      if (lastError) {
        statusText += i18n("Error: {0}", lastError);
        hasLastError = true;
      } else if (progress) {
        statusText += `(${progress}% - ${executingNodeTitle}...)`;
      } else if (workflowAgentSID) {
        if (workflowAgentSID == webviewAgentSID) {
          statusText += i18n("workflow running by hidden webview");
        } else {
          statusText += i18n("using browser page [{0}] for workflow running", ssid);
        }
      }
      queueText += `(${i18n("Queue:")} ${queueSize})`;
    }
    let listReplacer = null;
    if (workflowsError)
      listReplacer = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("sp-label", { children: workflowsError });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "client-list-title", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("h3", { children: [
          i18n("workflows"),
          queueText
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("sp-label", { class: hasLastError ? "error-label" : "", children: statusText })
      ] }),
      listReplacer || /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("ul", { className: "client-list", children: [
        currentViewingDirectory ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          WorkflowListItem_default,
          {
            setEditorMode,
            path: "../",
            isDir: true,
            isChecked: false,
            onRun: async (path) => {
            },
            dirname: currentViewingDirectory.slice(0, -1),
            onDirectorySet: (dirname) => {
              setCurrentViewingDirectory(dirname);
            }
          },
          currentViewingDirectory
        ) : "",
        showingList.map((item) => {
          const path = item.path;
          const workflow = workflows[path];
          const checked = autoRunning?.value == path;
          if (item.isDir) {
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              WorkflowListItem_default,
              {
                setEditorMode,
                path,
                isDir: true,
                isChecked: false,
                onRun: async (path2) => {
                  await runWorkflow(path2);
                },
                dirname: currentViewingDirectory.slice(0, -1),
                onDirectorySet: (dirname) => {
                  setCurrentViewingDirectory(dirname);
                }
              },
              path
            );
          }
          return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            WorkflowListItem_default,
            {
              setEditorMode,
              path,
              isDir: false,
              isChecked: checked,
              workflow,
              onRun: async (path2) => {
                await runWorkflow(path2);
              }
            },
            path
          );
        })
      ] }),
      autoRunning?.type == "workflow" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("sp-label", { class: "autorun-desc", children: i18n(`auto run workflow [{0}] after change..`, workflows[autoRunning?.value]?.path) }) : ""
    ] });
  };
  var WorkflowList_default = WorkflowList;

  // typescripts/modules/photoshop/src/tsx/Content.tsx
  var import_react15 = __toESM(require_react(), 1);

  // typescripts/modules/photoshop/src/tsx/WorkflowEditWrap.tsx
  var import_react14 = __toESM(require_react(), 1);

  // typescripts/modules/photoshop/src/tsx/icons/RefreshIcon.tsx
  var import_react7 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var RefreshIcon = class extends import_react7.default.Component {
    render() {
      const size = this.props.size || 1;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { slot: "icon", className: "sdppp-icon", onClick: this.props.onClick, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { width: 20 * size, height: 20 * size, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { fill: "currentColor", d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/SaveIcon.tsx
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var SaveIcon = class extends import_react8.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { slot: "icon", className: "sdppp-icon", style: {
        strokeWidth: 1
      }, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M11.083 12.25H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("path", { d: "M9.917 12.25V7.583H4.083v4.667M4.083 1.75v2.917H8.75" })
      ] }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/PlayMultiIcon.tsx
  var import_react9 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var PlayMultiIcon = class extends import_react9.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { slot: "icon", className: "sdppp-icon", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M5.2 10.88L11.668 7 5.2 3.12v7.76zM4 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L5.212 1.727A.8.8 0 004 2.413zM1.5 1.6a.6.6 0 01.6.6v9.6a.6.6 0 11-1.2 0V2.2a.6.6 0 01.6-.6z" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { fill: "currentColor", fillRule: "evenodd", clipRule: "evenodd", d: "M.963 1.932a.6.6 0 01.805-.268l1 .5a.6.6 0 01-.536 1.073l-1-.5a.6.6 0 01-.269-.805zM3.037 11.132a.6.6 0 01-.269.805l-1 .5a.6.6 0 01-.536-1.073l1-.5a.6.6 0 01.805.268z" })
        ] }),
        this.props.count
      ] });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/WebEditIcon.tsx
  var import_react10 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var WebEditIcon = class extends import_react10.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { slot: "icon", className: "sdppp-icon", style: {
        strokeWidth: 1
      }, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("svg", { width: "20", height: "20", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { transform: "scale(0.7)", fillRule: "evenodd", clipRule: "evenodd", d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { transform: "scale(0.5) translate(12, 12)", fillRule: "evenodd", clipRule: "evenodd", d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z" })
      ] }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/CrossIcon.tsx
  var import_react11 = __toESM(require_react(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var CrossIcon = class extends import_react11.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { slot: "icon", className: "sdppp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("svg", { width: this.props.size || 20, height: this.props.size || 20, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M11.7879 2.2121C12.0732 2.49737 12.0732 2.96723 11.7879 3.2525L3.2525 11.7879C2.96723 12.0732 2.49737 12.0732 2.2121 11.7879C1.92684 11.5026 1.92684 11.0328 2.2121 10.7475L10.7475 2.2121C11.0328 1.92684 11.5026 1.92684 11.7879 2.2121Z", fill: "currentColor" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M2.2121 2.2121C2.49737 1.92684 2.96723 1.92684 3.2525 2.2121L11.7879 10.7475C12.0732 11.0328 12.0732 11.5026 11.7879 11.7879C11.5026 12.0732 11.0328 12.0732 10.7475 11.7879L2.2121 3.2525C1.92684 2.96723 1.92684 2.49737 2.2121 2.2121Z", fill: "currentColor" })
      ] }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/StopIcon.tsx
  var import_react12 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var StopIcon = class extends import_react12.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { slot: "icon", className: "sdppp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("svg", { width: this.props.size || 20, height: this.props.size || 20, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z", fill: "currentColor" }) }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/icons/CancelIcon.tsx
  var import_react13 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var CancelIcon = class extends import_react13.default.Component {
    render() {
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { slot: "icon", className: "sdppp-icon", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("svg", { width: this.props.size || 20, height: this.props.size || 20, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M2.35 10.95L3.05 11.65L11.65 3.05L10.95 2.35L2.35 10.95Z", fill: "currentColor" }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14ZM7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z", fill: "currentColor" })
      ] }) });
    }
  };

  // typescripts/modules/photoshop/src/tsx/WorkflowEditWrap.tsx
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var WorkflowStatus = () => {
    const { workflowAgentSID, autoRunning } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { lastError, progress, executingNodeTitle } = (0, SDPPPInternalBridge_exports.useAgentState)(workflowAgentSID);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-run-status", children: [
      autoRunning ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-label", { children: i18n("auto run workflow after change..") }) : "",
      lastError ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-label", { class: "error-label", children: lastError }) : "",
      executingNodeTitle ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-label", { children: `${progress}% ${executingNodeTitle}...` }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-progressbar", { value: progress / 100 })
      ] }) : ""
    ] });
  };
  var SaveButton = () => {
    const { workflowAgentSID } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { saveWorkflow, reopenWorkflow } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const onSave = (0, import_react14.useCallback)(async () => {
      await saveWorkflow(workflowAgentSID);
    }, [saveWorkflow, workflowAgentSID]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-action-button", { onClick: onSave, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SaveIcon, {}) });
  };
  var StopAndCancelButton = () => {
    const { interrupt } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const { clearQueue } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const onClearAndInterrupt = (0, import_react14.useCallback)(async () => {
      await clearQueue();
      await interrupt();
    }, [clearQueue, interrupt]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-action-button", { onClick: onClearAndInterrupt, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CancelIcon, {}) });
  };
  var RefreshButton = () => {
    const { workflowAgentSID } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { reopenWorkflow } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    const onReopen = (0, import_react14.useCallback)(() => {
      reopenWorkflow(workflowAgentSID);
    }, [reopenWorkflow, workflowAgentSID]);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-action-button", { onClick: onReopen, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RefreshIcon, {}) });
  };
  var AutoRunButtons = () => {
    const { workflowAgentSID, autoRunning, setAutoRunning } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-action-button", { class: autoRunning?.value == workflowAgentSID ? "highlight" : "", onClick: () => {
      if (autoRunning?.value == workflowAgentSID) {
        setAutoRunning(null);
      } else {
        setAutoRunning({
          type: "page",
          value: workflowAgentSID
        });
      }
    }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(LivePaintingIcon, {}) });
  };
  var EditButton = () => {
    const { workflowAgentSID, webviewAgentSID, toggleWebviewDialog } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const usingWebview = workflowAgentSID == webviewAgentSID;
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      "sp-action-button",
      {
        ...!usingWebview ? { disabled: true } : {},
        onClick: () => {
          toggleWebviewDialog();
        },
        title: !usingWebview ? i18n("disabled when running in browser page") : i18n("Edit in ComfyUI"),
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(WebEditIcon, {})
      }
    );
  };
  var RunButton = () => {
    const { workflowAgentSID } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { runPage } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-action-button", { onClick: () => {
      runPage(workflowAgentSID);
    }, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PlayIcon, {}) });
  };
  var RunMultiButtons = () => {
    const { workflowAgentSID } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { runPage } = (0, SDPPPInternalBridge_exports.useSDPPPComfyCaller)();
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "action-button", onClick: () => {
        runPage(workflowAgentSID, 2);
      }, children: "x2" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "action-button", onClick: () => {
        runPage(workflowAgentSID, 5);
      }, children: "x5" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "action-button", onClick: () => {
        runPage(workflowAgentSID, 9);
      }, children: "x9" })
    ] });
  };
  function WorkflowEditWrap({
    WorkflowEditPhotoshop
  }) {
    const { workflowAgentSID } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const { ssid, queueSize } = (0, SDPPPInternalBridge_exports.useAgentState)(workflowAgentSID);
    return (0, import_react14.useMemo)(() => {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-top", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-label", { children: i18n("(Page ID: {0})Queue: {1}", ssid, queueSize) }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-controls", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-controls-left", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-button-line workflow-edit-button-lineone", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-button-line-left", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SaveButton, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RefreshButton, {})
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-button-line-right", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(StopAndCancelButton, {}),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AutoRunButtons, {})
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "workflow-edit-button-line workflow-edit-controls-linetwo", children: [
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(WorkflowStatus, {}),
                /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(EditButton, {})
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "workflow-edit-controls-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RunButton, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "workflow-edit-controls-right", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RunMultiButtons, {}) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("sp-divider", {}),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(WorkflowEditPhotoshop, {})
      ] });
    }, [ssid, queueSize]);
  }

  // typescripts/modules/photoshop/src/tsx/Content.tsx
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  function Content({
    connectState,
    AddressBar,
    WorkflowEditPhotoshop
  }) {
    const [editorMode, setEditorMode] = (0, import_react15.useState)(false);
    const [initAfter8s, setInitAfter8s] = (0, import_react15.useState)(false);
    (0, import_react15.useEffect)(() => {
      if (connectState === "connected") {
        const timeout = setTimeout(() => {
          setInitAfter8s(true);
        }, 8e3);
        return () => clearTimeout(timeout);
      } else {
        setInitAfter8s(false);
      }
    }, [connectState]);
    const {
      workflowAgentSID,
      webviewAgentSID,
      lastConnectErrorMessage
    } = (0, SDPPPInternalBridge_exports.useSDPPPContext)();
    const editorCardShowingIndex = editorMode ? 1 : 0;
    const [prevIsNotWebview, setPrevIsNotWebview] = (0, import_react15.useState)(false);
    (0, import_react15.useEffect)(() => {
      if (workflowAgentSID) {
        setPrevIsNotWebview(workflowAgentSID != webviewAgentSID);
      } else {
        if (prevIsNotWebview) {
          setEditorMode(false);
        }
      }
    }, [workflowAgentSID]);
    (0, import_react15.useEffect)(() => {
      if (connectState === "disconnected") {
        setEditorMode(false);
      }
    }, [connectState]);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "connect-box", children: [
        !editorMode ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "status-bar " + connectState, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "status-icon", title: lastConnectErrorMessage?.toString() || i18n(connectState), children: "\u2B24" }) }) : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "sp-action-button",
          {
            onClick: () => {
              setEditorMode(false);
            },
            children: "\u2190"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AddressBar, {})
      ] }),
      lastConnectErrorMessage ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sp-label", { class: "error-label", children: isValidI18nKey(lastConnectErrorMessage) ? i18n(lastConnectErrorMessage) : lastConnectErrorMessage }) }) : "",
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(SDPPPInternalBridge_exports.Promote, {}),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sp-divider", { size: "small" }),
      connectState === "connected" && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "panel-body", children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "editor-card", style: editorCardShowingIndex === 0 ? {} : { display: "none" }, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "comfy-list-wrap", children: [
          initAfter8s && !webviewAgentSID && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("sp-label", { class: "error-label", children: i18n("hidden webview load failed: {0}, please select a browser page to continue", i18n("timeout")) }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(WebPageList_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(WorkflowList_default, { setEditorMode })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "editor-card", style: editorMode ? {} : { display: "none" }, children: editorMode && workflowAgentSID && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(WorkflowEditWrap, { WorkflowEditPhotoshop }) })
      ] })
    ] });
  }

  // typescripts/modules/photoshop/src/tsx/Main.tsx
  var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
  function Main() {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SDPPPInternalBridge_exports.SDPPPProvider, { loginAppID: "", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      SDPPPInternalBridge_exports.SDPPP,
      {
        renderContent: (connectState, AddressBar, WorkflowEditPhotoshop) => {
          return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            Content,
            {
              connectState,
              AddressBar,
              WorkflowEditPhotoshop
            }
          );
        }
      }
    ) }) });
  }

  // typescripts/modules/photoshop/src/entry.tsx
  var import_client = __toESM(require_client(), 1);
  var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
  globalThis.sdppp = globalThis.sdppp || {};
  globalThis.sdppp.renderPhotoshopPlugin = (rootElement) => {
    (0, import_client.createRoot)(rootElement).render(/* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Main, {}));
  };
  var logs = [];
  var warningLogs = [];
  var errorLogs = [];
  globalThis.sdppp.getLogs = () => {
    return {
      logs,
      warningLogs,
      errorLogs
    };
  };
  globalThis.sdppp.enableLogCapture = () => {
    console.log = /* @__PURE__ */ function(log) {
      return function(...args) {
        log(...args);
        logs.push(args);
      };
    }(console.log);
    console.warn = /* @__PURE__ */ function(log) {
      return function(...args) {
        log(...args);
        warningLogs.push(args);
      };
    }(console.warn);
    console.error = /* @__PURE__ */ function(log) {
      return function(...args) {
        log(...args);
        errorLogs.push(args);
      };
    }(console.error);
  };
})();
//# sourceMappingURL=index.js.map
