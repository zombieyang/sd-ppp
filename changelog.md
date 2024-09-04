## [1.3.1] - 2024-09-04
1. feature: zh-cn support
2. fix: support for 16bit colored layer.
2. fix: support for cmyk/grayscale layer.
2. fix: getting error when canvas bound is N times of layer bound.
3. fix: parse layer info failed.
4. optimize: disable convert widget to input in get/send layer nodes.
5. optimize: shorten modal state in get/send layer.

## [1.3.0] - 2024-08-24
1. feature: support send image to boundary
2. feature: new ComfyUI nodes: GetTextFromLayer,GetDocument,GetLayerByID,GetLinkedLayer,GetLayersInGroup,ParseLayerInfo
2. fix: SDWebUI icon placed over the inpaint icon.

## [1.2.2] - 2024-08-18
1. fix: compatible latest SD-Forge with ForgeCanvas and Gradio4
2. fix: compatible with latest ComfyUI (August ver.).
3. fix: cannot get background layer without alpha
4. fix: remove the `?` and `#` in connect url to prevent HTTP 405 error
5. fix: some UI bug in initial connect

## [1.2.1] - 2024-08-15
1. feature: add .ccx download button in comfy node and webui's setting popup.
2. feature: show the page name in PS plugin's panel and in comfy node and webui's setting popup.
3. feature: if there is no document active in PS, create one in sending.
4. feature: after selected layer on the node. The document widget will automatically change.
5. bugfix: iamge does not took effect by the layer mask in getting.
6. bugfix: unexpected position when sending to existing layer
7. bugfix: image does not cropped correctly in getting when bounds is selection
8. bugfix: #28


## [1.2.0] - 2024-07-30
1. support multi document.
2. support generate button in PS.
3. support auto generate checkbox in PS for live-painting.
4. bugfixes
5. UI optimize