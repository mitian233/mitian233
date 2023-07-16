import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createMetaManager} from "vue-meta"
import {createI18n} from "vue-i18n"
import './assets/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap-icons/bootstrap-icons.svg'
import 'clipboard/dist/clipboard.min.js'

// i18n
const messages = {
    en: require('./i18n/en'),
    ja: require('./i18n/ja'),
    'zh-hans': require('./i18n/zh-hans'),
    'zh-hant': require('./i18n/zh-hant'),
}
function getLanguage() {
    const language = navigator.language.toLowerCase()
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

// Vueイニシャライズ
createApp(App)
    .use(router)
    .use(createMetaManager())
    .use(i18n)
    .use(getLanguage)
    .mount('#app')
