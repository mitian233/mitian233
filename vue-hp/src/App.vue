<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <transition name="slide-fade">
    <div v-if="isLoading" class="fixed inset-0 bg-secondary-content z-50 flex justify-center">
      <loading :count="countdown"/>
    </div>
  </transition>
  <nav>
    <router-link to="/">{{ $t("message.homeNavi") }}</router-link> |
    <router-link to="/link">{{ $t("message.linksTitle") }}</router-link> |
    <router-link to="/about">{{ $t("message.aboutNavi") }}</router-link>
  </nav>
  <div class="z-0">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
  </div>
  <Background/>
</template>

<script>
import Background from "@/components/Background";
import Loading from "@/components/loading";
export default {
  data: () => {
    return{
      countdown: 3,
      isLoading: true,
    }
  },
  components: {
    Background,
    Loading
  },
  methods: {
    countDown: function (){
      let cd = this.countdown * 200;
      const countInterval = setInterval(() => {
        cd --;
        if (cd % 200 === 0){
          this.countdown --;
        }
        if(cd === 0){
          clearInterval(countInterval);
          this.isLoading = false;
        }
      })
    },
    waitLoading: function () {
      window.addEventListener('load', ()=>{
        this.isLoading = false;
      })
    }
  }
  ,
  mounted() {
    this.waitLoading()
  }
}

</script>

<style>
nav {
  padding: 20px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff3377;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
}
</style>
