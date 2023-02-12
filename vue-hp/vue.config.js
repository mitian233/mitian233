const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Mikan',
      //以下はOpenGraph設定
      description: 'Mikan\'s homepage',
      image: 'illust_99107454_20221231_120645.png',
      url: 'https://www.mikan.ac.cn/',
      twitter: '@9_bishi',
      twitterCard: 'summary_large_image',
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
})
