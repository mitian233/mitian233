<template>
  <p>{{$t('message.fnfDescribe3')}}<a :href="url">{{url}}</a>{{$t('message.fnfWait')}}{{countDownTime}}{{$t('message.fnfSecond')}}</p>
</template>

<script>
let timer = null
let countDownTime = 10
export default {
  name: "countDown",
  props: {
    url: {
      type:String,
      default: 'https://www.mikan.ac.cn'
    },
  },
  data() {
    return {
      countDownTime: countDownTime,
    };
  },
  mounted() {
    timer = setInterval(() => {
      countDownTime--
      this.countDownTime = countDownTime
      if (countDownTime === 0) {
        clearInterval(timer)
        window.open(this.url, '_self')
      }
    }, 1000);
  },
  unmounted() {
    clearInterval(timer)
    timer = null
    countDownTime = 10
  },
}
</script>

<style scoped>

</style>