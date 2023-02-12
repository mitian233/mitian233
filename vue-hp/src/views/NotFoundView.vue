<template>
<div class="container">
  <div class="item" style="text-align: center">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Sorry, the page you are looking for is temporarily unavailable on this site. </p>
    <p>Go back to the <router-link to="/">homepage</router-link></p>
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