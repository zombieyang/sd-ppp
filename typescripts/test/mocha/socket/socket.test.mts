// import { assert } from "chai";
// import { getAllPhotoshopDocumentData, SDPPPSocket, SpeicialIDManager } from "../../../sdsystem/unknown/unknown-entry.mjs";


// describe('SDPPPSocket', () => {
//     let socket: SDPPPSocket = new SDPPPSocket();
//     it('can get documentdata', async () => {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         const documentData = getAllPhotoshopDocumentData();
//         assert.isNotEmpty(documentData);
//         assert.isAtLeast(Object.keys(documentData).length, 0);
//     });
//     it('can get image', async () => {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         const documentData = getAllPhotoshopDocumentData();
//         const firstInstance = Object.values(documentData)[0]
//         const instanceKey = firstInstance.sid;

//         const result = await socket.getImage(instanceKey, {
//             document_identify: Object.values(firstInstance.documents)[0].identify,
//             layer_identify: SpeicialIDManager.get_SPECIAL_LAYER_USE_CANVAS(),
//             boundary: null
//         })

//         console.log(result)
//     })
// });