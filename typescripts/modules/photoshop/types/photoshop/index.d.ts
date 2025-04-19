namespace JSX {
    interface IntrinsicElements {
        'sp-picker': any
        'sp-menu': any
        'sp-menu-item': any
        'sp-label': any
        'sp-heading': any
        'sp-body': any
        'sp-checkbox': any
        'sp-slider': any
        'sp-radio-group': any
        'sp-radio': any
        'sp-divider': any
        'sp-detail': any
        'sp-textarea': any
        'sp-textfield': any
        'sp-button': any
        'sp-action-button': any
        'sp-progressbar': any
        'sp-popover': any
        'sp-dialog': any
    }
}
declare module "uxp" {
    export const shell: any;
    export const storage: any;
    export const userInfo: any;
    export const entrypoints: any;
    export const host: {
        version: string;
    };
}