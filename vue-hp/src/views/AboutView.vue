<template>
  <div class="container">
    <div class="item">
      <div class="window" style="max-width: 800px;">
        <div class="header">
        </div>
        <div class="content">
          <div>

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
      </div>
    </div>
  </div>
</template>
<style>
.about {
  font-family: 'Fragment Mono', 'Noto Serif SC', monospace;
  text-align: center;
}
.about p {
  font-size: 20px;
}
</style>
