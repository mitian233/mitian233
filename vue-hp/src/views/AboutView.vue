<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-items-center m-10">
      <div class="mockup-window border bg-base-300 mb-5 max-w-4xl shadow-xl">
        <div class="m-5">
          <div v-if="locale === 'zh-hans'||'zh-hant'||'ja'">
            <p class="text" style="text-indent:2em;" v-for="paragraph in aboutContent">{{ paragraph }}</p>
          </div>
          <div v-else>
            <p class="text" v-for="paragraph in aboutContent">{{ paragraph }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center mb-3">
        <select class="select w-full max-w-xs" v-model="chooseLang">
          <option disabled selected value="">Select language</option>
          <option v-for="lang in langDict" :value="lang.item" :key="lang.item">{{ lang.title }}</option>
        </select>
      </div>
      <div class="text-center">
        <p>{{ $t('message.aboutTitle') }}</p>
      </div>
      <div class="text-center">
        <div class="flex justify-center">
          <a href="https://vercel.com/"><img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" style="width: 10em" alt="Powered by Vercel"/></a>
        </div>
        <p>Background: <a class="link" href="https://github.com/maborosh/BandoriStation/blob/v2/webapp/src/components/project/Background.vue">Source</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from '@/i18n';
export default {
  name: 'AboutView',
  data:() => {
    return {
      chooseLang: '',
      prevLang: i18n.global.locale,
      langList: ['ja','zh-hans','zh-hant','en'],
      langDict: [{item:'ja',title:'日本語'},{item:'zh-hans',title:'简体中文'},{item:'zh-hant',title:'繁體中文'},{item:'en',title:'English'}],
      aboutContent: i18n.global.messages[i18n.global.locale]['message']['aboutContent'],
      locale: i18n.global.locale
    }
  },
  watch: {
    chooseLang: function (val) {
      if (val !== '') {
        i18n.global.locale = val;
        this.aboutContent = i18n.global.messages[i18n.global.locale]['message']['aboutContent'];
        this.locale = i18n.global.locale;
      }
    }
  }
};
</script>
<style>
</style>
