<template>
  <div class="container">
    <div class="item">
      <div class="window" style="max-width: 800px;">
        <div class="header">
        </div>
        <div class="content">
          <div v-if="locale === 'zh-hans'||'zh-hant'||'ja'">
            <p class="text" style="text-indent:2em;" v-for="paragraph in aboutContent">{{ paragraph }}</p>
          </div>
          <div v-else>
            <p class="text" v-for="paragraph in aboutContent">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="about">
        <p>{{ $t('message.aboutTitle') }}</p>
      </div>
    </div>
    <div class="item">
      <div class="about">
        <a href="https://vercel.com/"><img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" style="width: 10em" alt="Powered by Vercel"/></a>
        <p style="font-size: 15px">Background: <a href="https://github.com/maborosh/BandoriStation/blob/v2/webapp/src/components/project/Background.vue">Source</a></p>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from '@/i18n';
export default {
  name: 'AboutView',
  data() {
    return {
      aboutContent: i18n.global.messages[i18n.global.locale]['message']['aboutContent'],
      locale: i18n.global.locale
    };
  },
};
</script>
<style>
.about {
  font-family: 'Fragment Mono', 'Noto Serif SC', monospace;
  text-align: center;
}
.about p {
  font-size: 20px;
}
</style>
