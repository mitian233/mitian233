import {createI18n} from "vue-i18n";

// i18n
const messages = {
    en: require('./en'),
    ja: require('./ja'),
    'zh-hans': require('./zh-hans'),
    'zh-hant': require('./zh-hant'),
}
function getLanguage() {
    const language = navigator.language.toLowerCase();
    let lang = 'en'
    switch (true) {
        case language == 'ja':
            lang = 'ja'
            break
        case language == 'zh'||language == 'zh-cn'||language == 'zh-sg':
            lang = 'zh-hans'
            break
        case language == 'zh-tw'||language == 'zh-hk':
            lang = 'zh-hant'
            break
        default:
            lang = 'en'
    }
    return lang
}
const i18n = createI18n({
    locale: getLanguage(),
    messages
})

export default i18n