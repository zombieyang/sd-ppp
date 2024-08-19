(function() {
    class SpeicialIDManager {
        static SPECIAL_DOCUMENT_CURRENT = '### Active Document ###'
        static SPECIAL_LAYER_USE_CANVAS = '### The Canvas ###'
        static SPECIAL_LAYER_USE_SELECTION = '### Selection ###'
        static SPECIAL_LAYER_NEW_LAYER = '### New Layer ###'
        static SPECIAL_LAYER_SAME_AS_LAYER = '### Same as Layer ###'
    
        static getDocumentID(name) {
            if (name == this.SPECIAL_DOCUMENT_CURRENT) {
                return -1;
            }
            const split = name.split('(id:')
            return parseInt(split.pop().trim().slice(0, -1));
        }
        static getLayerID(name) {
            if (name == this.SPECIAL_LAYER_USE_CANVAS) 
                return 0;
            if (name == this.SPECIAL_LAYER_USE_SELECTION) 
                return -1;
            if (name == this.SPECIAL_LAYER_NEW_LAYER) 
                return -2;
            if (name == this.SPECIAL_LAYER_SAME_AS_LAYER) 
                return -3;
            const split = name.split('(id:')
            return parseInt(split.pop().trim().slice(0, -1));
        }
    
    
    
        static getSpecialLayerForGet() {
            return [
                SpeicialIDManager.SPECIAL_LAYER_USE_CANVAS
            ]
        }
        static getSpecialLayerForGetBounds() {
            return [
                SpeicialIDManager.SPECIAL_LAYER_USE_CANVAS,
                SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION,
                SpeicialIDManager.SPECIAL_LAYER_SAME_AS_LAYER
            ]
        }
        static getSpecialLayerForSendBounds() {
            return [
                SpeicialIDManager.SPECIAL_LAYER_USE_CANVAS,
                SpeicialIDManager.SPECIAL_LAYER_USE_SELECTION
            ]
        }
        static getSpecialLayerForSend() {
            return [
                SpeicialIDManager.SPECIAL_LAYER_NEW_LAYER
            ]
        }
    }
    globalThis.SDPPPSpeicialIDManager = SpeicialIDManager
})();
