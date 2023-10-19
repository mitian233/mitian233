<script setup lang="ts">
import {ref} from "vue";

type links = {
  title: string,
  url: string,
  icon: string
}

const selfIntroduction = ref<Array<string>>(
    ["A Full Stuck Developer from China. I have some self maintained projects. If you are interested, you can check my GitHub profile.",
    "Sometimes I write some blogs, most of them are in Chinese. "]
)

const mylink = ref<Array<links>>([
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
    url: "https://twitter.com/9_bishi",
    icon: "bi bi-twitter"
  }
])

function jumpTo(url:string) {
  window.open(url)
}
</script>

<template>
  <div class="min-h-[90vh] flex flex-col justify-center items-center">
    <div class="flex flex-col px-10 md:px-36 md:grid md:grid-rows-none md:grid-cols-3 justify-center">
      <div class="-order-2 md:-order-3 md:grid md:place-content-center">
        <h1 class="text-xl md:text-3xl font-bold">Hello There</h1>
        <h1 class="text-3xl md:text-6xl font-bold">I'am <span
            style="background-image: -webkit-linear-gradient(315deg,#42d392 25%,#647eff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Mikan</span>
        </h1>
        <div class="flex justify-center md:justify-start">
          <div class="flex flex-row flex-wrap justify-center md:justify-start my-3">
            <div v-for="button in mylink">
              <button :title="button.title" class="btn btn-circle m-1" @click="jumpTo(button.url)">
                <i :class="button.icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="-order-3 md:-order-2 mb-5 md:mx-10 md:mb-0 text-center md:grid md:place-content-center">
        <img class="rounded-full inline" src="../assets/images/avatar.jpg" alt="avatar">
      </div>
      <div class="-order-1 md:-order-1 md:grid md:place-content-center">
        <div class="border-l-2 md:border-l-0 md:border-r-2 py-2 pl-4 md:pl-0 md:pr-4 md:text-right">
          <p v-for="i in selfIntroduction" class="text-sm mb-2">{{i.valueOf()}}</p>
        </div>
        <div class="card-actions justify-end">
          <button class="link" @click="this.$router.push('/about');">Learn more→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
