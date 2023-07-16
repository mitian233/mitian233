<template>
<div class="flex flex-row  justify-center">
  <div class="flex flex-col justify-items-center m-10">
    <div class="card bg-base-100/75 glass shadow-xl mb-10 mx-10 md:mt-40 text-center max-w-2xl">
      <div class="card-body">
        <h1 class="text-4xl font-bold m-10">{{$t('message.fnfTitle')}}</h1>
        <h2>{{$t('message.fnfSubtitle')}}</h2>
        <p>{{$t('message.fnfDescribe1')}}</p>
        <p>{{$t('message.fnfDescribe2')}}<router-link class="link" to="/">{{$t('message.fnfBackToTop')}}</router-link></p>
        <count-down :url="routerPath" :key="new Date().getTime()" v-if="showCounter"/>
      </div>
    </div>
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
