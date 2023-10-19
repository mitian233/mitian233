<template>
  <div class="flex justify-center">
    <div class="flex flex-col justify-center justify-items-center">
      <!--<h1 class="text-4xl font-bold text-center mb-5">{{ $t('message.myTitle') }}</h1>-->
      <div class="card md:card-side bg-base-100/75 glass shadow-xl mb-10 mx-5 md:mt-40">
        <figure class="md:w-80 md:h-full">
          <div class="md:w-60 md:h-60 md:rounded-full overflow-hidden">
            <img class="w-full h-full" src="@/assets/images/avatar.jpg" alt="Album"/>
          </div>
        </figure>
        <div class="card-body">
          <h2 class="card-title">Hi~👋</h2>
          <div class="whitespace-pre-line">
            <p>I'm <span class="text-accent-focus">Mikan</span></p>
            <p>This is my <span class="text-accent-focus">home page</span></p>
            <p>Here are some <span class="text-accent-focus">useful links</span> to my profile:</p>
            <div class="flex justify-center">
              <div class="flex flex-row flex-wrap justify-center m-3">
                <div v-for="button in links">
                  <button :title="button.title" class="btn btn-circle m-2" @click="jumpTo(button.url)">
                    <i :class="button.icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <p>Feel free to make friend with me. </p>
          </div>
          <div class="card-actions justify-end">
            <button class="link" @click="goToAbout">Learn more→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',
  data: () => {
    return {
      links:[
        {
          title: "Blog",
          url: "https://blog.mikan.ac.cn",
          icon: "bi bi-journal"
        },
        {
          title: "GitHub",
          url: "https://github.com/mitian233",
          icon: "bi bi-github"
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/aaki_ig/",
          icon: "bi bi-instagram"
        },
        {
          title: "Line",
          url: "https://line.me/ti/p/sJ_kxUpvSQ",
          icon: "bi bi-line"},
        {
          title: "Mail",
          url: "mailto:kasumi@bangdream.moe",
          icon: "bi bi-envelope"
        },
        {
          title: "Mastodon",
          url: "https://nightcord.de/@akiyamamizuki",
          icon: "bi bi-mastodon"
        },
        {
          title: "Twitter",
          url: "https://twitter.com/mikan_chn",
          icon: "bi bi-twitter"
        }
      ]
    }
  },
  components: {
    HelloWorld: HelloWorld,
  },
  methods: {
    goToAbout: function () {
      this.$router.push('/about');
    },
    jumpTo: function (url:string) {
      window.open(url)
    }
  }
});
</script>

<style>
</style>
