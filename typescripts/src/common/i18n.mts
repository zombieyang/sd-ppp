import en from './en.mjs';
import zhcn from './zh-cn.mjs';
//@ts-ignore
const require_ = typeof require != 'undefined' ? require : undefined

let locale = 'en'
if (typeof navigator !== 'undefined' && navigator.language) {
    locale = navigator.language == "zh-CN" ? 'zhcn' : 'en'
} else if (require_) {
    locale = require_('uxp').host.uiLocale.startsWith("zh") ? 'zhcn' : 'en';
}

export type I18nKey = keyof typeof zhcn;

export default function i18n(key: keyof typeof zhcn, ...args: any[]) {
    const formatStr: string = locale == 'zhcn' ? zhcn[key] : (key in en ? (en as any)[key] : key);
    if (!formatStr) throw new Error(`i18n key not found: ${key}`);

    return formatStr.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match
    });
}

export function isValidI18nKey(key: string) {
    return key in zhcn;
}

export function isI18nOf(key: keyof typeof zhcn, str: string) {
    return key == str || zhcn[key] == str;
}

export function getI18nLocale() {
    return locale;
}
