<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <!--<nav>
    <a :href="homepageNavi()">{{ $t("message.homeNavi") }}</a> |
    <router-link to="/">{{ $t("message.homeNavi") }}</router-link> |
    <router-link to="/about">{{ $t("message.aboutNavi") }}</router-link>
  </nav>-->
  <router-view/>
  <Background/>
</template>

<script>
import Background from "@/components/Background";

export default {
  components: {
    Background
  },
  methods: {
    homepageNavi: function () {
      if (this._isMobile()) {
        return '/'
      } else {
        return '/home'
      }
    },
    _isMobile: function() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace('/')
    } else {
      this.$router.replace('/home')
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, 'Noto Serif SC', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

nav {
  padding: 10px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff3377;
}
</style>
