"use strict";(()=>{var Fe=Object.create;var le=Object.defineProperty;var Ve=Object.getOwnPropertyDescriptor;var Qe=Object.getOwnPropertyNames;var $e=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty;var j=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(o,i)=>(typeof require<"u"?require:o)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var $=(e,o)=>()=>(o||e((o={exports:{}}).exports,o),o.exports);var Z=(e,o,i,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of Qe(o))!qe.call(e,a)&&a!==i&&le(e,a,{get:()=>o[a],enumerable:!(r=Ve(o,a))||r.enumerable});return e},ae=(e,o,i)=>(Z(e,o,"default"),i&&Z(i,o,"default")),t=(e,o,i)=>(i=e!=null?Fe($e(e)):{},Z(o||!e||!e.__esModule?le(i,"default",{value:e,enumerable:!0}):i,e));var pe=$((no,de)=>{"use strict";de.exports=window.SDPPPInternal});var P=$((uo,fe)=>{"use strict";fe.exports=window.React});var l=$((fo,me)=>{"use strict";me.exports=window.ReactJSXRuntime});var Ne=$((pt,Ae)=>{"use strict";Ae.exports=window.ReactDOMClient});var n={};ae(n,t(pe(),1));var ee={"SDPPP Get Document":"SDPPP Get Document","SDPPP Get Layer By ID":"SDPPP Get Layer","SDPPP Get Linked Layers":"SDPPP Get Linked Layers","SDPPP Get Layers In Group":"SDPPP Get Layers In Group","SDPPP Get Text From Layer":"SDPPP Get Text From Layer","SDPPP Parse Layer Info":"SDPPP Parse Layer Info","SDPPP Get Selection":"SDPPP Get Selection","SDPPP Get Image From Photoshop":"SDPPP Get Image From Photoshop","SDPPP Send Images To Photoshop":"SDPPP Send Images To Photoshop","SDPPP Settings":"SDPPP Settings/Misc"};var oe={"### Active Document ###":"### \u5F53\u524D\u6587\u6863 ###","### The Canvas ###":"### \u6574\u4E2A\u753B\u5E03 ###","### New Layer ###":"### \u65B0\u56FE\u5C42 ###","### Selected Layer ###":"### \u6240\u9009\u56FE\u5C42 ###","### Keep Size or Fit Canvas ###":"### \u4FDD\u6301\u5C3A\u5BF8\u6216\u9002\u5E94\u753B\u5E03 ###",_SDPPP_PSD_:"_SDPPP_PSD_","Save and run immediately":"\u4FDD\u5B58\u5E76\u7ACB\u5373\u6267\u884C",Close:"\u5173\u95ED","Select a {0}":"\u9009\u62E9\u4E00\u4E2A {0}","How to use .ccx file":"\u5982\u4F55\u4F7F\u7528 .ccx \u6587\u4EF6","1. If you have installed Adobe Creative Cloud":"1. \u5982\u679C\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 Adobe Creative Cloud","Just double click the .ccx file, it will install the plugin automatically":"\u53CC\u51FB .ccx \u6587\u4EF6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5B89\u88C5","2. If you don't have Adobe Creative Cloud":"2. \u5982\u679C\u4F60\u6CA1\u6709 Adobe Creative Cloud","Rename .ccx to .zip and extract it into ":"\u5C06 .ccx \u91CD\u547D\u540D\u4E3A .zip \u5E76\u89E3\u538B\u5230",or:"\u6216","Photoshop directory":"Photoshop \u5B89\u88C5\u76EE\u5F55","Cannot connect multiple different document widgets with same value":"\u4E0D\u80FD\u8FDE\u63A5\u591A\u4E2A\u5177\u6709\u76F8\u540C\u503C\u7684\u6587\u6863\u5C0F\u90E8\u4EF6","You can only have one SDPPP Settings node in a workflow":"\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\u53EA\u80FD\u6709\u4E00\u4E2A SDPPP Settings \u8282\u70B9","convert widget {0} failed:":"\u63A7\u4EF6{0}\u8F6C\u6362\u5931\u8D25\uFF1A","hidden webview load failed: {0}, please select a browser page to continue":"\u5185\u7F6E webview \u52A0\u8F7D\u5931\u8D25: {0}\uFF0C\u8BF7\u9009\u62E9\u4E00\u4E2A\u6D4F\u89C8\u5668\u9875\u9762\u7EE7\u7EED","SDPPP Get Document":"SDPPP\u83B7\u53D6\u6587\u6863(GetDocument)","SDPPP Get Layer By ID":"SDPPP\u83B7\u53D6\u56FE\u5C42(GetLayer)","SDPPP Get Linked Layers":"SDPPP\u83B7\u53D6\u94FE\u63A5\u56FE\u5C42(GetLinkedLayers)","SDPPP Get Layers In Group":"SDPPP\u83B7\u53D6\u7EC4\u4E2D\u56FE\u5C42(GetLayersInGroup)","SDPPP Get Text From Layer":"SDPPP\u83B7\u53D6\u56FE\u5C42\u6587\u672C(GetTextFromLayer)","SDPPP Parse Layer Info":"SDPPP\u89E3\u6790\u56FE\u5C42\u4FE1\u606F(ParseLayerInfo)","SDPPP Get Selection":"SDPPP\u83B7\u53D6\u9009\u533A(GetSelection)","SDPPP Get Image From Photoshop":"SDPPP\u4ECEPS\u83B7\u53D6\u56FE\u50CF(GetImageFromPhotoshop)","SDPPP Send Images To Photoshop":"SDPPP\u53D1\u9001\u56FE\u50CF\u5230PS(SendImagesToPhotoshop)","SDPPP Settings":"SDPPP\u8BBE\u7F6E/\u6742\u9879(Settings/Misc)","download PS plugin (.ccx)":"\u4E0B\u8F7D Photoshop \u63D2\u4EF6 (.ccx)","current ComfyUI pageid: {0}":"\u5F53\u524D ComfyUI \u9875\u9762ID: {0}","current A1111 pageid: {0}":"\u5F53\u524D A1111 \u9875\u9762ID: {0}","document linked":"\u6587\u6863\u53C2\u6570\u5DF2\u94FE\u63A5","layer linked":"\u56FE\u5C42\u53C2\u6570\u5DF2\u94FE\u63A5","bound linked":"\u8303\u56F4\u53C2\u6570\u5DF2\u94FE\u63A5",document:"\u6587\u6863",Document:"\u6587\u6863",document_name:"\u6587\u6863\u540D\u5B57id",layer_nameid:"\u56FE\u5C42\u540D\u5B57id",layer_name:"\u56FE\u5C42\u540D\u5B57",layer_info:"\u56FE\u5C42\u4FE1\u606F",bound_top:"\u8303\u56F4\u4E0A\u8FB9\u8DDD",bound_left:"\u8303\u56F4\u5DE6\u8FB9\u8DDD",bound_width:"\u8303\u56F4\u5BBD\u5EA6",bound_height:"\u8303\u56F4\u9AD8\u5EA6",center_x:"\u4E2D\u5FC3\u70B9x",center_y:"\u4E2D\u5FC3\u70B9y",opacity:"\u900F\u660E\u5EA6",layer_or_group:"\u56FE\u5C42(\u6216\u7EC4)",Layer_or_group:"\u56FE\u5C42(\u6216\u7EC4)",bound:"\u8303\u56F4",bounds:"\u8303\u56F4","bounds [optional]":"\u8303\u56F4[\u53EF\u9009]",boundary:"\u8303\u56F4",Boundary:"\u8303\u56F4",canvas_bound:"\u753B\u5E03\u8303\u56F4",layer_bound:"\u56FE\u5C42\u8303\u56F4","Photoshop Disconnected!":"Photoshop \u672A\u8FDE\u63A5\uFF01",rgb_out:"RGB\u8F93\u51FA",alpha_out:"Alpha\u8F93\u51FA",images:"\u56FE\u50CF",text:"\u6587\u672C",ID_mode:"\u7CBE\u786EID\u6A21\u5F0F",name_mode:"\u540D\u5B57\u5339\u914D\u6A21\u5F0F",select:"\u9009\u62E9","document boundary":"\u6587\u6863\u8303\u56F4","layer boundary":"\u56FE\u5C42\u8303\u56F4","selection boundary":"\u9009\u4E2D\u8303\u56F4","save .psd to this workflow":"\u4FDD\u5B58.psd\u5230\u8FD9\u4E2A\u5DE5\u4F5C\u6D41","extract saved .psd to Photoshop":"\u63D0\u53D6\u4FDD\u5B58\u7684.psd\u5230Photoshop","sample .psd":"\u793A\u4F8B.psd",mask:"\u906E\u7F69",name:"\u540D\u79F0",timeout:"\u8D85\u65F6","--multi-user activated, Not Login!":"--multi-user\u5DF2\u6FC0\u6D3B\uFF0C\u4F46\u672A\u767B\u5F55\uFF01",Logout:"\u767B\u51FA","User: ":"\u7528\u6237: ",connect:"\u8FDE\u63A5",connected:"\u5DF2\u8FDE\u63A5",disconnect:"\u65AD\u5F00",disconnected:"\u5DF2\u65AD\u5F00\u8FDE\u63A5","reconnecting...":"\u91CD\u8FDE\u4E2D...",connecting:"\u8FDE\u63A5\u4E2D",webpages:"\u7F51\u9875\u5217\u8868",workflows:"\u5DE5\u4F5C\u6D41",workflow:"\u5DE5\u4F5C\u6D41","auto run page [{0}] after change..":"\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u9875\u9762 {0}..","auto run workflow [{0}] after change..":"\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u5DE5\u4F5C\u6D41 {0}..","auto run workflow after change..":"\u66F4\u6539\u540E\u81EA\u52A8\u8FD0\u884C\u5DE5\u4F5C\u6D41..",selection_only:"\u4EC5\u9009\u533A","Queue:":"\u961F\u5217:","Set As:":"\u8BBE\u7F6E\u4E3A:","Error {0}... please contact me via Discord/Github":"\u51FA\u73B0\u9519\u8BEF {0}...\uFF0C\u8BF7\u901A\u8FC7 QQ/Github \u8054\u7CFB\u6211","Webview initialize failed. Please report to me via Discord/Github with your ComfyURL, Operate System":"Webview \u521D\u59CB\u5316\u5931\u8D25\uFF0C\u8BF7\u901A\u8FC7 QQ/Github \u8054\u7CFB\u6211\u5E76\u9644\u4E0A\u4F60\u7684Comfy\u5730\u5740\u3001\u64CD\u4F5C\u7CFB\u7EDF","Workflow List of ComfyUI with --multi-user is only available for sponsors":'\u5E26"--multi-user"\u7684ComfyUI\u4EC5\u5BF9\u8D5E\u52A9\u8005\u5F00\u653E',"(Page ID: {0})Queue: {1}":"(\u9875\u9762ID: {0}) \u961F\u5217\u957F\u5EA6 {1}","no suitable node to control in this workflow":"\u8FD9\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\u6CA1\u6709\u80FD\u63A7\u5236\u7684\u8282\u70B9",Save:"\u4FDD\u5B58",Edit:"\u7F16\u8F91","Edit in ComfyUI":"\u5728 ComfyUI \u4E2D\u7F16\u8F91","using browser page [{0}] for workflow running":"\u6B63\u63A5\u7BA1\u7F51\u9875 [{0}] \u8FD0\u884C\u5DE5\u4F5C\u6D41","workflow running by hidden webview":"\u5DE5\u4F5C\u6D41\u5728\u9690\u85CF\u7684webview\u4E2D\u8FD0\u884C","Lock Image":"\u9501\u5B9A\u56FE\u50CF","Unlock Image":"\u89E3\u9501\u56FE\u50CF","search...":"\u641C\u7D22...","disabled when running in browser page":"\u63A5\u7BA1\u7F51\u9875\u65F6\u4E0D\u53EF\u7528","only supported in Photoshop":"\u4EC5\u5728 Photoshop \u4E2D\u652F\u6301","502: Maybe the server is not running":"502: \u670D\u52A1\u5668\u53EF\u80FD\u672A\u8FD0\u884C","404: Maybe SDPPP is not installed or failed to run in ComfyUI":"404: \u53EF\u80FD\u5728ComfyUI\u4E2DSDPPP\u672A\u5B89\u88C5\u6216\u8FD0\u884C\u5931\u8D25","{0}. reconnecting...":"{0}. \u91CD\u8FDE\u4E2D...","disconnected to {0} failed {1}":"\u65AD\u5F00\u8FDE\u63A5 {0} \u9519\u8BEF {1}","version mismatch, please reinstall PS plugin":"\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5 PS \u63D2\u4EF6","instance type not recognized":"\u672A\u8BC6\u522B\u7684\u8F6F\u4EF6\u7C7B\u578B","Error: {0}":"\u9519\u8BEF: {0}","document {0} not found":"\u627E\u4E0D\u5230\u6587\u6863: {0}",'only layer kind "TEXT" is supported, invalid layer: {0}':"\u4E0D\u652F\u6301\u975E\u6587\u672C\u56FE\u5C42: {0}","create layer failed":"\u521B\u5EFA\u56FE\u5C42\u5931\u8D25","layer not found {0}":"\u627E\u4E0D\u5230\u56FE\u5C42: {0}","no linked layer for {0}":"\u6CA1\u6709\u94FE\u63A5\u56FE\u5C42: {0}","layer {0} is not a group":"\u56FE\u5C42 {0} \u4E0D\u662F\u4E00\u4E2A\u7EC4","no layer in group {0}":"\u7EC4 {0} \u4E2D\u6CA1\u6709\u56FE\u5C42","layer not found: {0}":"\u627E\u4E0D\u5230\u56FE\u5C42: {0}","No upload_name":"\u4E0A\u4F20\u63A5\u53E3\u8FD4\u56DE\u4E86\u5931\u8D25","get pixel of {0} failed":"\u83B7\u53D6\u50CF\u7D20\u5931\u8D25: {0}","merge group failed":"\u5408\u5E76\u7EC4\u5931\u8D25","invalid name: {0}":"\u975E\u6CD5\u7684\u540D\u79F0: {0}","get_layer_info: layer_identify required":"get_layer_info: \u9700\u8981 layer_identify","invalid action: {0}":"\u65E0\u6548\u7684\u64CD\u4F5C: {0}","create document failed":"\u521B\u5EFA\u6587\u6863\u5931\u8D25","create document for preview":"\u521B\u5EFA\u9884\u89C8\u6587\u6863","resize document for preview":"\u8C03\u6574\u9884\u89C8\u6587\u6863\u5C3A\u5BF8","no first related layer in {0}":"\u7EC4 {0} \u4E2D\u6CA1\u6709\u7B2C\u4E00\u4E2A\u76F8\u5173\u56FE\u5C42","imageDataError: data length is not multiple of width * height":"\u56FE\u50CF\u6570\u636E\u6709\u8BEF: \u6570\u636E\u957F\u5EA6\u4E0D\u662F\u5BBD\u5EA6 * \u9AD8\u5EA6\u7684\u500D\u6570","imageDataError: originComponents must be 1 or 3":"\u56FE\u50CF\u6570\u636E\u6709\u8BEF: originComponents \u5FC5\u987B\u662F 1 \u6216 3","unexpected connection lost, please try to reconnect":"\u610F\u5916\u65AD\u5F00\u8FDE\u63A5\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u8FDE\u63A5","Workflow list is empty, please save a workflow by Comfy's lastest UI":"\u5DE5\u4F5C\u6D41\u5217\u8868\u4E3A\u7A7A\uFF0C\u8BF7\u5728Comfy\u7684\u65B0\u7248UI\u4E2D\u4FDD\u5B58\u4E00\u4E2A\u5DE5\u4F5C\u6D41","No opened ComfyUI pages":"\u6CA1\u6709\u5DF2\u6253\u5F00\u7684ComfyUI\u9875\u9762","comfyAPI is not initialized, maybe comfyUI is too old":"\u65E0\u6CD5\u83B7\u53D6 ComfyAPI\uFF0C\u53EF\u80FD ComfyUI \u7248\u672C\u592A\u65E7","unsupported channel counts: {0}":"\u4E0D\u652F\u6301\u7684\u901A\u9053\u6570: {0}","Timeout, Maybe the URL is wrong":"\u8D85\u65F6\uFF0C\u53EF\u80FD comfy\u5730\u5740 \u586B\u5199\u9519\u8BEF","Workflow list loading failed: {0}":"\u5DE5\u4F5C\u6D41\u5217\u8868\u52A0\u8F7D\u5931\u8D25: {0}","Please register a user in ComfyUI":"\u8BF7\u5728 ComfyUI \u4E2D\u6CE8\u518C\u4E00\u4E2A\u7528\u6237","GetSelection need Photoshop version 25+":"GetSelection \u9700\u8981 Photoshop 25+ \u7248\u672C","create document for sent images":"\u7ED9\u53D1\u9001\u7684\u56FE\u7247\u521B\u5EFA\u6587\u6863","show sent images":"\u663E\u793A\u53D1\u9001\u7684\u56FE\u7247","fallback show sent images":"\u53D6\u6D88\u663E\u793A\u53D1\u9001\u7684\u56FE\u7247","get content of layer {0}":"\u83B7\u53D6\u56FE\u5C42 {0} \u7684\u5185\u5BB9","fallback get content of layer {0}":"\u53D6\u6D88\u83B7\u53D6\u56FE\u5C42 {0} \u7684\u5185\u5BB9","get layer info":"\u83B7\u53D6\u56FE\u5C42\u4FE1\u606F","sdppp extract PSD":"sdppp \u5BFC\u5165 PSD","sdppp get PSD":"sdppp \u83B7\u53D6 PSD","{0} wants to extract a PSD file to Photoshop, are you sure?":"{0} \u60F3\u8981\u91CA\u653E\u4E00\u4E2A.psd\u6587\u4EF6\u5230Photoshop\uFF0C\u786E\u5B9A\u5417\uFF1F","should sdppp refuse extracting PSD to Photoshop in this session anymore?":"\u662F\u5426\u8981\u8BA9 sdppp \u62D2\u7EDD\u672C\u6B21PS\u4F1A\u8BDD\u518D\u6B21\u63A5\u53D7.psd\u91CA\u653E\u8BF7\u6C42\uFF1F","Wide Mode":"\u5BBD\u5C4F\u6A21\u5F0F","Quick Set":"\u5FEB\u901F\u8BBE\u7F6E","Selected Layer":"\u9009\u4E2D\u56FE\u5C42","Selected Layer (invert)":"\u9009\u4E2D\u56FE\u5C42(\u53CD\u5411)",Canvas:"\u753B\u5E03",Selection:"\u9009\u533A",Manual:"\u624B\u52A8\u6A21\u5F0F",Auto:"\u81EA\u52A8\u6A21\u5F0F","This plugin is based on sd-ppp":"\u672C\u63D2\u4EF6\u57FA\u4E8Esd-ppp\u5F00\u53D1","And follows its open source license:":"\u5E76\u9075\u5FAA\u5176\u5F00\u6E90\u534F\u8BAE\uFF1A","https://www.youtube.com/@Github-Zombeeyang/videos":"https://space.bilibili.com/44908313",Youtube:"BiliBili","https://discord.gg/9HeGjDvEmn":"https://pd.qq.com/s/5m42umo28",Discord:"QQ\u9891\u9053",Sponsors:"\u8D5E\u52A9","waiting...":"\u865A\u4F4D\u4EE5\u5F85",Links:"\u53CB\u60C5\u94FE\u63A5",Community:"\u793E\u533A",upload:"\u4E0A\u4F20","Simplify Workflow":"\u7B80\u5316\u5DE5\u4F5C\u6D41",Photoshop:"Photoshop","Photoshop plugin settings":"Photoshop \u63D2\u4EF6\u8BBE\u7F6E","Photoshop plugin":"Photoshop \u63D2\u4EF6","SDPPP Settings/Misc":"SDPPP \u8BBE\u7F6E/\u6742\u9879","Sample .PSD for this workflow:":"\u793A\u4F8B.PSD","Download Example .PSD":"\u4E0B\u8F7D\u793A\u4F8B.PSD","Maximum Image Size (px):":"\u6700\u5927\u56FE\u50CF\u5C3A\u5BF8(px)",Download:"\u4E0B\u8F7D",Upload:"\u4E0A\u4F20",Reset:"\u91CD\u7F6E",Refresh:"\u5237\u65B0","Comfy URL: {0}":"Comfy\u5730\u5740: {0}","Photoshop is not connected":"Photoshop \u672A\u8FDE\u63A5","select...":"\u8BF7\u9009\u62E9","click to edit":"\u70B9\u51FB\u7F16\u8F91"};var ce=typeof j<"u"?j:void 0,te="en";typeof navigator<"u"&&navigator.language?te=navigator.language=="zh-CN"?"zhcn":"en":ce&&(te=ce("uxp").host.uiLocale.startsWith("zh")?"zhcn":"en");function d(e,...o){let i=te=="zhcn"?oe[e]:e in ee?ee[e]:e;if(!i)throw new Error(`i18n key not found: ${e}`);return i.replace(/{(\d+)}/g,function(r,a){return typeof o[a]<"u"?o[a]:r})}function ue(e){return e in oe}var Pe=t(P(),1),he=t(l(),1),y=class extends Pe.default.Component{render(){return(0,he.jsx)("div",{className:`action-button ${this.props.highlight?"highlight":""}`,onClick:this.props.onClick,children:this.props.children})}};var ge=t(P(),1),q=t(l(),1),E=class extends ge.default.Component{render(){let o=this.props.size||1;return(0,q.jsx)("div",{slot:"icon",className:"sdppp-icon",onClick:this.props.onClick,children:(0,q.jsx)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,q.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z"})})})}};var we=t(P(),1),x=t(l(),1),b=class extends we.default.Component{render(){let o=this.props.size||1;return(0,x.jsx)("div",{slot:"icon",className:"sdppp-icon",onClick:this.props.onClick,children:(0,x.jsxs)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,x.jsx)("path",{fill:"currentColor",d:"M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z"}),(0,x.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M6.2 9.08L9.068 7 6.2 4.92v4.16zM5 4.214v5.574a.8.8 0 001.212.686l4.445-2.787a.8.8 0 000-1.372L6.212 3.527A.8.8 0 005 4.213z"})]})})}};var ve=t(P(),1),K=t(l(),1),S=class extends ve.default.Component{render(){let o=this.props.size||1;return(0,K.jsx)("div",{slot:"icon",className:"sdppp-icon",children:(0,K.jsx)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,K.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M4.2 10.88L10.668 7 4.2 3.12v7.76zM3 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L4.212 1.727A.8.8 0 003 2.413z"})})})}};var h=t(l(),1),Ke=({pageInstance:e})=>{let{autoRunning:o,setAutoRunning:i,workflowAgentSID:r,setWorkflowAgentSID:a}=(0,n.useSDPPPContext)(),{runPage:k}=(0,n.useSDPPPComfyCaller)(),m=r==e.sid,c=o?.value==e.sid;return(0,h.jsxs)("li",{className:`client-list-item${m?" show-tips":""}${m||c?" checked":""}`,children:[(0,h.jsx)("sp-label",{class:"client-list-item-left",onClick:()=>{a(m?"":e.sid)},children:(0,h.jsxs)("div",{children:["[",e.ssid,"] ",e.lastError?e.lastError?.replace("sdppp PS side error:",""):e.title]})}),(0,h.jsxs)("div",{className:"client-list-item-right",children:[(0,h.jsx)("div",{className:"tips-icon",children:(0,h.jsx)(E,{size:.6,onClick:()=>{a(m?"":e.sid)}})}),(0,h.jsx)(y,{highlight:c,onClick:()=>{i(c?null:{type:"page",value:e.sid})},children:(0,h.jsx)(b,{size:.6})}),(0,h.jsx)(y,{onClick:()=>{k(e.sid)},children:(0,h.jsx)(S,{size:.6})})]})]})},ye=Ke;var g=t(l(),1),Oe=()=>{let{autoRunning:e}=(0,n.useSDPPPContext)(),{pageInstances:o}=(0,n.useSDPPPWebpageList)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"client-list-title",children:(0,g.jsx)("h3",{children:d("webpages")})}),!o.length&&(0,g.jsx)("sp-label",{class:"list-error-label",children:d("No opened ComfyUI pages")}),(0,g.jsx)("ul",{className:"client-list",children:o.map(i=>(0,g.jsx)(ye,{pageInstance:i},i.sid))}),e?.type=="page"?(0,g.jsx)("sp-label",{class:"autorun-desc",children:d("auto run page [{0}] after change..",o.find(i=>i.sid==e?.value)?.title)}):""]})},be=Oe;var Se=t(P(),1),O=t(l(),1),T=class extends Se.default.Component{render(){let o=this.props.size||1;return(0,O.jsx)("div",{slot:"icon",className:"sdppp-icon",onClick:this.props.onClick,children:(0,O.jsx)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,O.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z"})})})}};var ke=t(P(),1),J=t(l(),1),B=class extends ke.default.Component{render(){let o=this.props.size||1;return(0,J.jsx)("div",{slot:"icon",className:"sdppp-icon",children:(0,J.jsx)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,J.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z"})})})}};var u=t(l(),1),Je=({path:e,isDir:o,isChecked:i,workflow:r,onRun:a,dirname:k,onDirectorySet:m,setEditorMode:c})=>{let{setAutoRunning:v,workflowAgentSID:w}=(0,n.useSDPPPContext)(),{openWorkflow:W}=(0,n.useSDPPPComfyCaller)();return o?(0,u.jsx)("li",{className:"client-list-item",children:(0,u.jsxs)("sp-label",{class:"client-list-item-left",onClick:()=>{if(e=="../"){let D=k||"",C=D.lastIndexOf("/");C==-1?m?.(""):m?.(D.slice(0,C))}else m?.(e)},children:[(0,u.jsx)(B,{size:.6}),(0,u.jsx)("div",{children:e})]})}):r?(0,u.jsxs)("li",{className:"client-list-item"+(i?" checked":""),children:[(0,u.jsx)("sp-label",{class:"client-list-item-left",onClick:()=>{c(!0),W(w,r.path,!0)},children:(0,u.jsx)("div",{children:r.error?r.error.replace("sdppp PS side error:",""):r.path})}),(0,u.jsxs)("div",{className:"client-list-item-right",children:[(0,u.jsx)("div",{className:"tips-icon",children:(0,u.jsx)(T,{size:.6,onClick:()=>{c(!0),W(w,r.path,!0)}})}),(0,u.jsx)(y,{onClick:()=>{v(i?null:{type:"workflow",value:e})},children:(0,u.jsx)(b,{size:.6})}),(0,u.jsx)(y,{onClick:()=>{a(r.path)},children:(0,u.jsx)(S,{size:.6})})]})]}):null},X=Je;var f=t(l(),1),Xe=({setEditorMode:e})=>{let{autoRunning:o,webviewAgentSID:i,workflowAgentSID:r}=(0,n.useSDPPPContext)(),{runWorkflow:a}=(0,n.useSDPPPComfyCaller)(),{workflows:k,workflowsError:m,currentViewingDirectory:c,setCurrentViewingDirectory:v,showingList:w}=(0,n.useSDPPPWorkflowList)(),{ssid:W,lastError:D,progress:C,executingNodeTitle:Te,queueSize:Be}=(0,n.useAgentState)(r),M="",ie=" ",se=!1;r&&(D?(M+=d("Error: {0}",D),se=!0):C?M+=`(${C}% - ${Te}...)`:r&&(r==i?M+=d("workflow running by hidden webview"):M+=d("using browser page [{0}] for workflow running",W)),ie+=`(${d("Queue:")} ${Be})`);let re=null;return m&&(re=(0,f.jsx)("sp-label",{class:"list-error-label",children:m})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"client-list-title",children:[(0,f.jsxs)("h3",{children:[d("workflows"),ie]}),(0,f.jsx)("sp-label",{class:se?"error-label":"",children:M})]}),re||(0,f.jsxs)("ul",{className:"client-list",children:[c?(0,f.jsx)(X,{setEditorMode:e,path:"../",isDir:!0,isChecked:!1,onRun:async G=>{},dirname:c.slice(0,-1),onDirectorySet:G=>{v(G)}},c):"",w.map(G=>{let I=G.path,Ue=k[I],He=o?.value==I;return G.isDir?(0,f.jsx)(X,{setEditorMode:e,path:I,isDir:!0,isChecked:!1,onRun:async _=>{await a(_)},dirname:c.slice(0,-1),onDirectorySet:_=>{v(_)}},I):(0,f.jsx)(X,{setEditorMode:e,path:I,isDir:!1,isChecked:He,workflow:Ue,onRun:async _=>{await a(_)}},I)})]}),o?.type=="workflow"?(0,f.jsx)("sp-label",{class:"autorun-desc",children:d("auto run workflow [{0}] after change..",k[o?.value]?.path)}):""]})},De=Xe;var N=t(P(),1);var V=t(P(),1);var Ce=t(P(),1),z=t(l(),1),L=class extends Ce.default.Component{render(){return(0,z.jsxs)("div",{slot:"icon",className:"sdppp-icon",children:[(0,z.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,z.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M5.2 10.88L11.668 7 5.2 3.12v7.76zM4 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L5.212 1.727A.8.8 0 004 2.413zM1.5 1.6a.6.6 0 01.6.6v9.6a.6.6 0 11-1.2 0V2.2a.6.6 0 01.6-.6z"}),(0,z.jsx)("path",{fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M.963 1.932a.6.6 0 01.805-.268l1 .5a.6.6 0 01-.536 1.073l-1-.5a.6.6 0 01-.269-.805zM3.037 11.132a.6.6 0 01-.269.805l-1 .5a.6.6 0 01-.536-1.073l1-.5a.6.6 0 01.805.268z"})]}),this.props.count]})}};var Ie=t(P(),1),Y=t(l(),1),U=class extends Ie.default.Component{render(){let o=this.props.size||1;return(0,Y.jsx)("div",{slot:"icon",className:"sdppp-icon",onClick:this.props.onClick,children:(0,Y.jsx)("svg",{width:20*o,height:20*o,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Y.jsx)("path",{fill:"currentColor",d:"M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z"})})})}};var xe=t(P(),1),R=t(l(),1),H=class extends xe.default.Component{render(){return(0,R.jsx)("div",{slot:"icon",className:"sdppp-icon",style:{strokeWidth:1},children:(0,R.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,R.jsx)("path",{d:"M11.083 12.25H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z"}),(0,R.jsx)("path",{d:"M9.917 12.25V7.583H4.083v4.667M4.083 1.75v2.917H8.75"})]})})}};var Le=t(P(),1),A=t(l(),1),F=class extends Le.default.Component{render(){return(0,A.jsx)("div",{slot:"icon",className:"sdppp-icon",style:{strokeWidth:1},children:(0,A.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,A.jsx)("path",{transform:"scale(0.7)",fillRule:"evenodd",clipRule:"evenodd",d:"M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z"}),(0,A.jsx)("path",{transform:"scale(0.5) translate(12, 12)",fillRule:"evenodd",clipRule:"evenodd",d:"M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z"})]})})}};var s=t(l(),1),Ye=()=>{let{workflowAgentSID:e,autoRunning:o}=(0,n.useSDPPPContext)(),{lastError:i,progress:r,executingNodeTitle:a}=(0,n.useAgentState)(e);return(0,s.jsxs)("div",{className:"workflow-run-status",children:[o?(0,s.jsx)("sp-label",{children:d("auto run workflow after change..")}):"",i?(0,s.jsx)("sp-label",{class:"error-label",children:i}):"",a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("sp-label",{children:`${r}% ${a}...`}),(0,s.jsx)("sp-progressbar",{value:r/100})]}):""]})},Ze=()=>{let{workflowAgentSID:e}=(0,n.useSDPPPContext)(),{saveWorkflow:o,reopenWorkflow:i}=(0,n.useSDPPPComfyCaller)(),r=(0,V.useCallback)(async()=>{await o(e)},[o,e]),a=(0,V.useCallback)(()=>{i(e)},[i,e]);return(0,s.jsxs)("div",{className:"workflow-edit-button-line-left",children:[(0,s.jsx)("sp-action-button",{onClick:r,children:(0,s.jsx)(H,{})}),(0,s.jsx)("sp-action-button",{onClick:a,children:(0,s.jsx)(U,{})})]})},je=()=>{let{workflowAgentSID:e,autoRunning:o,setAutoRunning:i}=(0,n.useSDPPPContext)(),{runPage:r}=(0,n.useSDPPPComfyCaller)();return(0,s.jsxs)("div",{className:"workflow-edit-button-line-right",children:[(0,s.jsx)("sp-action-button",{className:o?.value==e?"highlight":"",onClick:()=>{o?.value==e?i(null):i({type:"page",value:e})},children:(0,s.jsx)(b,{})}),o?"":(0,s.jsx)("sp-action-button",{onClick:()=>{r(e,10)},children:(0,s.jsx)(L,{count:10})}),o?"":(0,s.jsx)("sp-action-button",{onClick:()=>{r(e,3)},children:(0,s.jsx)(L,{count:3})})]})},eo=()=>{let{workflowAgentSID:e,webviewAgentSID:o,toggleWebviewDialog:i}=(0,n.useSDPPPContext)(),r=e==o;return(0,s.jsx)("sp-action-button",{...r?{}:{disabled:!0},onClick:()=>{i()},title:r?d("Edit in ComfyUI"):d("disabled when running in browser page"),children:(0,s.jsx)(F,{})})},oo=()=>{let{workflowAgentSID:e}=(0,n.useSDPPPContext)(),{runPage:o}=(0,n.useSDPPPComfyCaller)();return(0,s.jsx)("div",{className:"workflow-edit-controls-right",children:(0,s.jsx)("sp-action-button",{onClick:()=>{o(e)},children:(0,s.jsx)(S,{})})})};function ze({WorkflowEditPhotoshop:e}){let{workflowAgentSID:o}=(0,n.useSDPPPContext)(),{ssid:i,queueSize:r}=(0,n.useAgentState)(o);return(0,V.useMemo)(()=>(0,s.jsxs)("div",{className:"workflow-edit-wrap",children:[(0,s.jsxs)("div",{className:"workflow-edit-top",children:[(0,s.jsx)("sp-label",{children:d("(Page ID: {0})Queue: {1}",i,r)}),(0,s.jsxs)("div",{className:"workflow-edit-controls",children:[(0,s.jsxs)("div",{className:"workflow-edit-controls-left",children:[(0,s.jsxs)("div",{className:"workflow-edit-button-line workflow-edit-button-lineone",children:[(0,s.jsx)(Ze,{}),(0,s.jsx)(je,{})]}),(0,s.jsxs)("div",{className:"workflow-edit-button-line workflow-edit-controls-linetwo",children:[(0,s.jsx)(Ye,{}),(0,s.jsx)(eo,{})]})]}),(0,s.jsx)(oo,{})]})]}),(0,s.jsx)("sp-divider",{}),(0,s.jsx)(e,{})]}),[i,r])}var p=t(l(),1);function Re({connectState:e,AddressBar:o,WorkflowEditPhotoshop:i}){let[r,a]=(0,N.useState)(!1),[k,m]=(0,N.useState)(!1);(0,N.useEffect)(()=>{let C=setTimeout(()=>{m(!0)},4e3);return()=>clearTimeout(C)},[]);let{workflowAgentSID:c,webviewAgentSID:v,lastConnectErrorMessage:w,toggleWebviewDialog:W}=(0,n.useSDPPPContext)(),D=r?1:0;return(0,N.useEffect)(()=>{!c&&!v&&a(!1)},[c,v]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"connect-box",children:[r?(0,p.jsx)("sp-action-button",{onClick:()=>{a(!1)},children:"\u2190"}):(0,p.jsx)("div",{className:"status-bar "+e,children:(0,p.jsx)("div",{className:"status-icon",title:w?.toString()||d(e),children:"\u2B24"})}),(0,p.jsx)(o,{})]}),w?(0,p.jsx)("div",{children:(0,p.jsx)("sp-label",{class:"error-label",children:ue(w)?d(w):w})}):"",(0,p.jsx)("sp-divider",{size:"small"}),e==="connected"&&(0,p.jsxs)("div",{className:"panel-body",children:[(0,p.jsx)("div",{className:"editor-card",style:D===0?{}:{display:"none"},children:(0,p.jsxs)("div",{className:"comfy-list-wrap",children:[k&&!v&&(0,p.jsx)("sp-label",{class:"error-label",children:d("hidden webview load failed: {0}, please select a browser page to continue",d("timeout"))}),(0,p.jsx)(be,{}),c&&(0,p.jsx)(De,{setEditorMode:a})]})}),(0,p.jsx)("div",{className:"editor-card",style:r?{}:{display:"none"},children:r&&c&&(0,p.jsx)(ze,{WorkflowEditPhotoshop:i})})]})]})}var Q=t(l(),1);function ne(){return(0,Q.jsx)(n.SDPPPProvider,{children:(0,Q.jsx)("div",{className:"container",children:(0,Q.jsx)(n.SDPPP,{renderContent:(e,o,i)=>(0,Q.jsx)(Re,{connectState:e,AddressBar:o,WorkflowEditPhotoshop:i})})})})}var We=t(Ne(),1),Ee=t(l(),1);globalThis.sdppp=globalThis.sdppp||{};globalThis.sdppp.renderPhotoshopPlugin=e=>{(0,We.createRoot)(e).render((0,Ee.jsx)(ne,{}))};var Me=[],Ge=[],_e=[];globalThis.sdppp.getLogs=()=>({logs:Me,warningLogs:Ge,errorLogs:_e});globalThis.sdppp.enableLogCapture=()=>{console.log=function(e){return function(...o){e(...o),Me.push(o)}}(console.log),console.warn=function(e){return function(...o){e(...o),Ge.push(o)}}(console.warn),console.error=function(e){return function(...o){e(...o),_e.push(o)}}(console.error)};})();
