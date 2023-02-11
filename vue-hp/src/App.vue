<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <nav>
    <router-link to="/">{{ $t("message.homeNavi") }}</router-link> |
    <router-link to="/about">{{ $t("message.aboutNavi") }}</router-link>
  </nav>
  <router-view/>
  <Background/>
</template>

<script>
import Background from "@/components/Background";
export default {
  components: {Background}
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
</style>
