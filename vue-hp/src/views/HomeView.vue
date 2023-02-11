<template>
  <div class="container">
    <div class="item">
      <HelloWorld :msg="$t('message.myTitle')"/>
    </div>
    <div class="item">
      <div class="headpic" style="height: 200px;width: 200px">
        <img src="@/assets/images/avatar.jpg" alt="user avatar" style="height: 200px;width: 200px">
      </div>
    </div>
    <div class="item">
      <div class="window" style="max-width: 500px;">
        <div class="header">
        </div>
        <div class="content">
          <div>
            <p class="text">Hi~👋</p>
            <p class="text">I'm <span style="color: #24cc3d;">Mikan</span></p>
            <p class="text">This is my <span style="color: #24cc3d;">home page</span></p>
            <p class="text">Here are some <span style="color: #24cc3d;">useful links</span> to my profile:</p>
            <p class="text">Blog: <a href="https://mikan.bangdream.moe">https://mikan.bangdream.moe</a></p>
            <p class="text">GitHub: <a href="https://github.com/mitian233">https://github.com/mitian233</a></p>
            <p class="text">Twitter: <a href="https://twitter.com/9_bishi">https://twitter.com/9_bishi</a></p>
            <p class="text">Email: <a href="mailto:kasumi@bangdream.moe">kasumi@bangdream.moe</a></p>
            <p class="text">Feel free to make friend with me. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {useI18n} from "vue-i18n"; // @ is an alias to /src;

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld: HelloWorld,
  },
});
</script>

<style>
@import "@/assets/style.css";
</style>