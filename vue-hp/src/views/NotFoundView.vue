<template>
<div class="flex flex-col justify-center">
  <div class="text-center mt-52">
    <h1 class="text-4xl font-bold m-10">{{$t('message.fnfTitle')}}</h1>
    <h2>{{$t('message.fnfSubtitle')}}</h2>
    <p>{{$t('message.fnfDescribe1')}}</p>
    <p>{{$t('message.fnfDescribe2')}}<router-link class="link" to="/">{{$t('message.fnfBackToTop')}}</router-link></p>
    <count-down :url="routerPath" :key="new Date().getTime()" v-if="showCounter"/>
  </div>
</div>
</template>

<script>
let _this = this
import countDown from "@/components/countDown.vue";
export default {
  name: "NotFoundView",
  components: {
    countDown
  },
  data() {
    return {
      showCounter: true,
      routerPath: 'https://blog.mikan.ac.cn'+this.$route.path,
    };
  },
  beforeRouteLeave(to, from, next) {
    this.showCounter = false
    next()
  },
}
</script>

<style scoped>

</style>
