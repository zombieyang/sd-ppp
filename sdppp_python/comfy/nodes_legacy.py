import numpy as np
import json
import torch
import time
import node_helpers
from io import BytesIO
from PIL import Image, ImageOps, ImageSequence, ImageFile
from nodes import CLIPTextEncode, ConditioningConcat, ConditioningSetMask
from ..apis import addImageCache
from ..protocols.photoshop import ProtocolPhotoshop
from .nodes import check_linked_in_prompt, sdppp_get_prompt_item_from_list, convert_mask_to_boundary, SDPPPOptional, sdppp_is_changed

def define_comfyui_nodes_legacy(sdppp):
    def call_async_func_in_server_thread(coro, dontwait = False):
        handle = {
            'done': False,
            'result': None,
            'error': None
        }
        loop = sdppp.loop
        async def do_call():
            try: 
                handle['result'] = await coro
            except Exception as e:
                handle['error'] = e
            finally:
                handle['done'] = True
        loop.create_task(do_call())

        if not dontwait:
            while not handle['done']:
                pass
            if handle['error'] is not None:
                raise handle['error']
            else:
                return handle['result']
        else:
            return None

    def parse_params(unique_id, prompt, layer_or_group, document=""):
        linked_style = check_linked_in_prompt(prompt, unique_id, 'layer_or_group')
        if not linked_style:
            document = json.loads(document[0])
        else:
            document = layer_or_group[0]['document']
        return linked_style, document


    class GetImageFromPhotoshopLayerNode:
        RETURN_TYPES = ("IMAGE", "MASK")
        RETURN_NAMES = ("rgb_out", "alpha_out")
        OUTPUT_IS_LIST = (True, True)
        INPUT_IS_LIST = True
        FUNCTION = "get_image"
        CATEGORY = "SD-PPP"

        @classmethod
        def IS_CHANGED(self, **kwargs):
            sdppp_arg = kwargs['sdppp'][0]
            document_arg = kwargs['document'][0] if 'document' in kwargs and kwargs['document'] != None else ''
            return sdppp_is_changed(sdppp, sdppp_arg, document_arg)
        
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "layer_or_group": ('LAYER', {"default": None})
                },
                "optional": SDPPPOptional({
                    "bound": ('MASK', {"default": None}),
                }, {
                    # compat combo selection type
                    "document": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"}),
                    "sdppp": ("STRING", {"default": ""}),
                }),
                "hidden": {
                    "unique_id": "UNIQUE_ID",
                    "prompt": "PROMPT", 
                }
            }

        def get_image(self, unique_id, prompt, layer_or_group, bound="", document="", **kwargs):
            sdppp_arg = kwargs['sdppp']
            sdppp.has_ps_instance(throw_error=True)

            linked_style, document = parse_params(unique_id, prompt, layer_or_group, document)

            # dont check here, some python cannot read the data in this thread.
            # if document['instance_id'] not in sdppp.ppp_instances:
            #     raise ValueError(f'Photoshop instance {document["instance_id"]} not found')

            res_image = []
            res_mask = []
            startTime = time.time()
            for i, item_layer in enumerate(layer_or_group):
                sdppp_arg_item = json.loads(sdppp_get_prompt_item_from_list(sdppp_arg, i))
                if linked_style:
                    item_layer = item_layer['layer_identify']
                item_bound = sdppp_get_prompt_item_from_list(bound, i)
                start = time.time()
                result = call_async_func_in_server_thread(
                    ProtocolPhotoshop.get_image(
                        instance_id=document['instance_id'],
                        document_identify=document['identify'], 
                        layer_identify=item_layer, 
                        boundary=convert_mask_to_boundary(item_bound),
                        max_wh=sdppp_arg_item['ps_maxGetImageWH']
                    )
                )
                # change to use result['pngData']. a .png data
                (output_image, output_mask) = self._load_image_from_png(
                    result['pngData']
                )

                res_image.append(output_image)
                res_mask.append(output_mask)

            return (res_image, res_mask,)

        def _load_image_from_png(self, png_data):
            # Load the PNG data using PIL
            image = Image.open(BytesIO(png_data))
            
            # Convert to RGB for the output image
            rgb_image = image.convert("RGB")
            rgb_array = np.array(rgb_image).astype(np.float32) / 255.0
            output_image = torch.from_numpy(rgb_array)[None,]
            
            # Extract alpha channel for the mask if available
            if 'A' in image.getbands():
                mask = np.array(image.getchannel('A')).astype(np.float32) / 255.0
                output_mask = 1. - torch.from_numpy(mask).unsqueeze(0)
            else:
                output_mask = torch.zeros((64, 64), dtype=torch.float32, device="cpu").unsqueeze(0)
                
            return (output_image, output_mask)


    class SendImageToPhotoshopLayerNode:
        RETURN_TYPES = ("DOCUMENT",)
        INPUT_IS_LIST = True
        FUNCTION = "send_image"
        CATEGORY = "SD-PPP"
        OUTPUT_NODE = True

        @classmethod
        def IS_CHANGED(self, **kwargs):
            return np.random.rand()
        
        @classmethod
        def INPUT_TYPES(cls):
            return {
                "required": {
                    "images": ("IMAGE", ),
                    "layer_or_group": ('LAYER', {"default": None}),
                },
                "optional": SDPPPOptional({
                    "bound": ('MASK', {"default": None}),
                }, {
                    "document": ("STRING", {"default": "", "sdppp_type": "DOCUMENT_nameid"}),
                    "sdppp": ("STRING", {"default": ""}),
                }),
                "hidden": {
                    "unique_id": "UNIQUE_ID",
                    "prompt": "PROMPT", 
                }
            }

        def send_image(self, unique_id, prompt, images, layer_or_group, bound="", document="", **kwargs):
            sdppp.has_ps_instance(throw_error=True)

            linked_style, document = parse_params(unique_id, prompt, layer_or_group, document)

            # dont check here, some python cannot read the data in this thread.
            # if document['instance_id'] not in sdppp.ppp_instances:
            #     raise ValueError(f'Photoshop instance {document["instance_id"]} not found')

            params = []
            # iterate layer_or_group
            # diff between batch image and list is not known yet 
            for index, image in enumerate(images[0]):
                if len(layer_or_group) == 1:
                    item_layer = layer_or_group[0]
                else:
                    item_layer = layer_or_group[index]
                item_bound = sdppp_get_prompt_item_from_list(bound, index)

                if linked_style:
                    item_layer = item_layer['layer_identify']
                    
                i = 255. * image.cpu().numpy()
                img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
                if img.mode != "RGBA":
                    img = img.convert("RGBA")
                
                # 使用BytesIO而不是tobytes来获取PNG数据
                buffer = BytesIO()
                img.save(buffer, format="PNG")
                png_data = buffer.getvalue()
                
                params.append({
                    'layer_identify': item_layer, 
                    'boundary': convert_mask_to_boundary(item_bound), 
                    'image_blob': {
                        'pngData': png_data
                    }
                })

            call_async_func_in_server_thread(ProtocolPhotoshop.send_images(
                instance_id=document['instance_id'],
                document_identify=document['identify'], 
                image_blobs=[p['image_blob'] for p in params],  
                layer_identifies=[p['layer_identify'] for p in params], 
                boundaries=[p['boundary'] for p in params]
            ), True)

            return (document,)
    
    class CLIPTextEncodePSRegional:
        @classmethod
        def INPUT_TYPES(s):
            return {
                "required": {
                    "clip": ("CLIP", {"tooltip": "The CLIP model used for encoding the text. only use the first one."}),
                    "texts": ("STRING", {"forceInput": True, "multiline": True, "dynamicPrompts": True, "tooltip": "The text to be encoded."}), 
                    "masks": ("MASK", )
                },
                "optional": {
                    "strengths": ("FLOAT", {"forceInput": True, "default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                }
            }
        RETURN_TYPES = ("CONDITIONING",)
        FUNCTION = "encode"
        INPUT_IS_LIST = True

        CATEGORY = "Photoshop"

        def encode(self, clip, texts, masks, strengths=[]):
            clip = clip[0]

            ret = None
            for i in range(len(texts)):
                text = texts[i]
                mask = masks[i]
                if i in strengths:
                    strength = strengths[i]
                else:
                    strength = 1.0

                tokens = clip.tokenize(text)
                output = clip.encode_from_tokens(tokens, return_pooled=True, return_dict=True)
                cond = output.pop("cond")

                set_area_to_bounds = False
                if len(mask.shape) < 3:
                    mask = mask.unsqueeze(0)

                c = node_helpers.conditioning_set_values([[cond, output]], {"mask": 1.0 - mask,
                                                                        "set_area_to_bounds": set_area_to_bounds,
                                                                        "mask_strength": strength})
                if ret is None:
                    ret = c
                else:
                    ret = ret + c                                               
            return (ret, )
        
    return {
        'GetImageFromPhotoshopLayerNode': GetImageFromPhotoshopLayerNode,
        'SendImageToPhotoshopLayerNode': SendImageToPhotoshopLayerNode,
        'CLIPTextEncodePSRegional': CLIPTextEncodePSRegional
    }



# def save_images(self, images, filename_prefix="ComfyUI", prompt=None, extra_pnginfo=None):
#     filename_prefix += self.prefix_append
#     full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(filename_prefix, self.output_dir, images[0].shape[1], images[0].shape[0])
#     results = list()
#     for (batch_number, image) in enumerate(images):
#         i = 255. * image.cpu().numpy()
#         img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
#         metadata = None
#         if not args.disable_metadata:
#             metadata = PngInfo()
#             if prompt is not None:
#                 metadata.add_text("prompt", json.dumps(prompt))
#             if extra_pnginfo is not None:
#                 for x in extra_pnginfo:
#                     metadata.add_text(x, json.dumps(extra_pnginfo[x]))

#         filename_with_batch_num = filename.replace("%batch_num%", str(batch_number))
#         file = f"{filename_with_batch_num}_{counter:05}_.png"
#         img.save(os.path.join(full_output_folder, file), pnginfo=metadata, compress_level=self.compress_level)
#         results.append({
#             "filename": file,
#             "subfolder": subfolder,
#             "type": self.type
#         })
#         counter += 1

#     return { "ui": { "images": results } }
