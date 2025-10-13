## [1.9.12] - 2025-10-13
* fix: wrong send back position if DPI/PPI>72

## [1.9.11] - 2025-10-11
* fix: if current layer is group and curlayer is actived in image widget, many strange behaviour.
* fix: cannot send image if the prefix is setted in `SaveImage` node
* fix: empty custom api's input will cause white screen.
* fix: not sending to correct position when sending back to canvas.
* fix: the image limit size would always set to 2048.
* feature: autosend
* optimize: optimize the once image syncing logic

## [1.9.10] - 2025-09-25
* The release candidate of 2.0.
* Update the image selection again, now is more easier.
* support live painting again.

## [1.9.4] - 2025-09-07
* Update the 2.x beta plugin to beta.6.
* support runninghub.ai

## [1.9.2] - 2025-08-21
* Update the 2.x beta plugin to beta.5.

## [1.9.2] - 2025-07-23
* Update the 2.x beta plugin to preview.3.

## [1.9.1] - 2025-07-15
* fix: Fix the bugs that will make 1.x plugin not work.
* optimize: update the download link of 2.x beta plugin.

## [1.9.0] - 2025-07-06
* feature: add beta version of Photoshop plugin 2.0.

## [1.8.6] - 2025-06-18
* fix: `ShowText|pysssss` node not work.
* fix: textfield widget does not resize correctly.

## [1.8.5] - 2025-06-08
* fix: style error causing last textfield be hidden.
* fix: Missing error message when PS webview load failed.
* fix: bugfix for progress bar.
* feature: support layer prefix setting in properties panel of `SendImagesToPS` node.

## [1.8.4] - 2025-05-31
* fix: error when queuePrompt #167
* fix: Get/send slow in some cases
* optimization: sort workflow by name
* optimization: add missing node error message
* optimization: add status bar tips
* feature: open mask edit for LoadImage in left sidebar

## [1.8.3] - 2025-05-18
* fix: The slider widget not worked well.
* fix: When running with xN, only the last previewed image will be sent.
* optimization: The UX of selecting workflow runner is optimized.
* optimization: Will clear error state when switching workflow.
* optimization: The errors will now show the node title.
* feature: Support opening the active workflow.
* feature: Added SDXL example workflow in the package.
* feature: Support group filter in workflow edit.
* feature: Support apiKey setting for ComfyOrg. (Need ComfyUI upgraded to the corresponding version)

## [1.8.2] - 2025-05-12
* fix: seeds would not randomize in some Comfy setting
* fix: combo of `LoadImage` became smaller in last version
* fix: sliders not worked.
* fix: cannot run API nodes even is logged in.
* fix: NaN error when there is no `getLayer` linked to `getImage`
* optimization: output of `SendImage` now become a `layer_or_group`
* optimization: no longer compress image when connecting with IP address. (For those who use Comfy in intranet)

## [1.8.1] - 2025-05-06
* fix: `GetImage` with `quality` not works in some ComfyUI.
* optimization: more detailed websocket error

## [1.8.0] - 2025-05-05
* fix: got `network error` when fetching workflow list.
* fix: comfy side modify number component input error.
* fix: comfy side single line text primitive display error.
* fix: `### Selected Layer ###` cache strategy fix.
* fix: unexpected disconnection when sending large image.
* optimization: image compression when sending images.
* optimization: speicial layer such as `### Selected Layer ###` will now be calculated when query.
* optimization: error of controlling node will now be displayed in the node's panel.
* optimization: build script optimization by @ashen-sensored.
* optimization: new layer will now be named as the workflow name.
* optimization: the highligh style of livepainting button optimization.
* feature: stop button in workflow running panel.
* feature: supppoted displaying widget name if `name` is specified in `sdppp_custom.js`.
* feature: supported `Show Text|pssss` node in workflow panel.
* feature: a setting option for slider widget.
* feature: image quality on `GetImageFromPS` node.
* feature: added a output slot for `SendImageToPS` node.

## [1.7.6] - 2025-04-27
* fix: cannot disconnect when is connecting to ComfyUI
* fix: unnecessary cache when useing selected layer.
* cannot preview image in ImageWidget when first open a workflow

## [1.7.5] - 2025-04-19
* fix: SendImage Node result cannot send back to PS plugin by @fichas in https://github.com/zombieyang/sd-ppp/pull/143
* Fix: The image results of some workflows cannot be transmitted to Photoshop by @fichas in https://github.com/zombieyang/sd-ppp/pull/144
* fix: rgthree group node was not available in webview mode.
* fix: checkbox color in comfy side.
* optimize: style optimizes in comfy side.
* optimize: add some cloud service recommendations.

## [1.7.4] - 2025-04-04
1. optimize: change WebSocket timeout to 10 mins
2. optimize: live painting will be triggered when widget values changed
3. optimize: single number Primitives will display as single line
4. optimize: Photoshop webview is now a pop dialog
5. optimize: icon
6. feature: There is a workflow form interface in Comfy side now. Node's title could be changed there.
7. fix: compat with latest rgthree nodes
8. reopen-source most of the code and Licence updated.

## [1.7.2] - 2025-03-09
1. fix: Length aaaaa != length bbbbb bug fix
2. fix: Unexpectly trigger livepainting after using preview sent.
3. fix: Document selection was not work in Comfy side
4. fix: unexpected cache of ParseLayerInfo and GetDocument Node
5. optimize: bigger run button
6. optimize: progress bar for workflow edit interface
7. optimize: add use layer inversed for LoadMask
8. optimize: new UX for LoadMask and LoadImage
9. optimize: add tips when webview edit is disabled
10. optimize: add PS version limited tips when using get selection 

## [1.7.1] - 2025-03-01
1. optimize: when PS is connecting, show the tips for Comfy side node not installed or Comfy URL is wrong.
2. optimize: show Comfy address in sdppp popup
3. optimize: PS light theme compatibility
4. fix: unexpected version mismatch prompt
5. fix: desktop comfy loading sd-ppp multiple times and cause error
6. fix: compatibility with LLMParty
7. fix: cannot select layer in comfy side at latest comfy version
8. fix: cannot get layer list in Comfy side
9. fix: get 16-bit image and got Code -1
10. fix: Error in geting background layer
11. fix: transparent element still visible in comfy side when getting mask layer

## [1.7.0] - 2024-02-04
1. feature: support `LoadImage` and `LoadImage as Mask` node in comfy
2. feature: support selected layer in layer selection
3. feature: add sd-ppp setting panel in comfy, which allows you to set the maximum image size
4. feature: you can now customize how the widget display in PS
5. feature: support get layer name in `ParseLayerInfo` node
6. feature: add button for extracting example psd in workflow running panel
7. feature: add search in dropdown widget
8. optimize: show workflow title in workflow running panel

## [1.6.2] - 2024-01-10
1. optimize: the name of the new layer will now have an auto-incremented id.
2. optimize: list page style optimization.
3. optimize: when the connection fails, if it is 404 or 502, a tips will now be displayed.
4. optimize: add a tips to go to save when the workflow list is empty.
5. optimize: the official link/friend link will now be displayed when not connected.
6. fix: the rgthree group control node does not display text.
7. fix: the problem that the image cannot be sent to the grayscale document.

## [1.6.1] - 2024-12-27
1. feature: show workflows by folder.
2. feature: refresh button in workflow panel
3. optimize: new LivePainting icon again..
4. bugfix: the latest preview logic is not work in webview execution
5. bugfix: workflow did not refresh after secondary opening.
6. bugfix: uncorrect caching when active document is changed.
7. bugfix: some version of python will always throw PS missing error in sending.

## [1.6.0] - 2024-12-25
0. NO LONGER SUPPORT A1111 WEBUI SINCE THIS VERSION. (It may reborn in other style maybe.)
1. feature: Workflow Panel: support rgthree's nodes.
2. feature: Workflow Panel: Photoshop will store the widgets' value by the node's name now.
3. feature: Workflow Panel: you can now auto run a workflow in Workflow Panel.
4. feature: execution triggered by Photoshop and without `SendImageToPhotoshop` node, will now send the output to a default new Document.
5. feature: ability to select Page as the workflow runner. #58
6. feature: when execute workflow in workflow list on PS side, the `### Active Document ###` will select the document correctly.
7. optimize: boundary input now become MASK type, so you can grow it by Comfy's builtin nodes. #66
8. optimize: new icon for autorun.
9. bugfixes: so many bugfixes I can't list all of them.

## [1.5.3] - 2024-12-06
1. optimize: favorited workflow will be at the top of the list.
2. fix: move tool would not trigger live paint & cache update.
3. fix: cache for GetSelection Node.
4. fix: the `[optional]` label will cause error in GetImageFromPS node.
5. fix: init failure in forge.
6. fix: cannot select layer if GetLayer node is connect to GetDocument node via a reroute.

## [1.5.2] - 2024-12-02
1. optimize: provide queueX3 and queueX10 button in Edit panel.
2. optimize: new icon button for workflow save and comfy edit.
3. optimize: workflow list & page list style optimize
4. fix: some i18n didn't work in Comfy side.
5. fix: text area will blur automatically after linenum changed.
6. fix: extremely slow after reconnect.
7. fix: get image from PS would not cache image even canvas is not modified.
8. fix: live painting somethimes would not work in PageList, always would not work in WorkflowList.
9. fix: issues of Edit panel when many instances connecting with one Comfy.

## [1.5.1] - 2024-11-24
1. optimize: Widget list will now sort by name.
2. optimize: Textarea widget will auto resize.
3. optimize: add a tips for Comfy with `--multi-user` that makes sdppp not able to load workflow. #58
4. fix: `Save` button sometimes would not work.
5. fix: Did not load the lastest workflow content when just enter Edit panel. #57 #58
6. fix: The height and width of ParseLayerInfo was reversed.
7. fix: SDPPP comfy nodes would become smaller after refresh.
8. fix: Cannot get contents when there are multiple instance with same name. #56
9. fix: Did not refresh layer option when just extracted PSD.
10. fix: selected hidden layer will become visible after send to PS. #53


## [1.5.0] - 2024-11-13
1. feature: new node `GetSelection` to replace the `selection_only` option in `GetImageFromPS` Node
2. feature: run workflow directly (work with new ComfyUI's layout).
3. feature: run workflow with a WebUI like panel in PS plugin.
4. optimize: now can access ComfyUI webview in workflow running panel.

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
