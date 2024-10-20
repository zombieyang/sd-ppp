## [1.4.1] - 2024-10-20
1. bugfix: data synchronous bug fix
2. bugfix: bugs when send image to PS with boundary
3. bugfix: layer order not correct after move.
4. bugfix: getting gradient layer fail
5. bugfix: connect with default `127.0.0.1:8188` will fail
6. feature: show ComfyUI queue size at the panel
7. feature: show a guide after ccx downloaded
8. feature: automatic reset document if not exists

## [1.4.0] - 2024-10-03
1. optimize: getImage node add only selection option, with lasso can only get the lasso area content. The original bounds parameter is now changed to only be able to connect lines, only used to control the square area, in general, need to limit the square work area, will need to connect the area to several nodes
2. optimize: getLayerByID node now automatically searches for new layers with the same name along the original path if the layer is deleted
3. optimize: getLinkedLayer and getLayersInGroup now support filtering (text, image, first)
4. optimize: optimize the speed of image transmission
5. new feature: support multiple photoshop connections at the same time, now you can share a comfyUI with multiple people and multiple photoshop
6. new feature: getDocument node adds a save `.psd` function. You can save the current selected psd into the workflow for sharing. Others can open the workflow and directly select the imported psd in the getDocument node (if you need to clear the saved psd in the workflow, right-click the node->properties panel->delete the content in the psd box)
7. new feature: wide screen mode, click the menu icon in the upper right corner of the panel to enter WideMode, you can directly edit the workflow in Photoshop. (May not work in some MacOS)

## [1.3.1] - 2024-09-10
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
