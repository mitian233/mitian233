import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createMetaManager} from "vue-meta"
import {createI18n} from "vue-i18n";

const messages = {
    en: require('./i18n/en'),
    ja: require('./i18n/ja'),
    'zh-hans': require('./i18n/zh-hans'),
    'zh-hant': require('./i18n/zh-hant'),
}

function getLanguage() {
    const language = navigator.language.toLowerCase();
    if (language === 'ja') {return 'ja';}
    else if (language === 'zh'||'zh-cn'||'zh-sg') {return 'zh-hans';}
    else if (language === 'zh-tw'||'zh-hk') {return 'zh-hant';}
    else {return 'en';}
};

const i18n = createI18n({
    locale: getLanguage(),
    messages
})

createApp(App)
    .use(router)
    .use(createMetaManager())
    .use(i18n)
    .mount('#app')
