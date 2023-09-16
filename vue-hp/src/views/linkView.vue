<template>
<div class="flex flex-row justify-center">
  <div class="flex flex-col justify-center">
    <div class="card bg-base-100 shadow-2xl mx-10 mb-10 max-w-4xl">
      <div class="card-body">
        <h2 class="card-title">{{ $t("message.linksTitle") }}</h2>
        <p>Let's exchange links</p>
        <div class="flex flex-wrap justify-between md:px-5">
          <div v-if="isLoading">
            <span class="loading loading-ring loading-lg"></span>
          </div>
          <div v-else v-for="(card, index) in links" class="md:w-1/2">
            <a :href="card.siteURL">
              <div class="relative rounded-xl overflow-auto p-3 md:w-full w-64">
                <div class="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                  <img v-if="card.icon === ''" class="absolute -left-6 w-28 h-28 rounded-full shadow-lg" src="@/assets/images/default.jpg" :id="'avatar'+index" :alt="'avatar'+card.name"/>
                  <img v-else class="absolute -left-6 w-28 h-28 rounded-full shadow-lg" :src="card.icon" :id="'avatar'+index" :key="index" :alt="'avatar'+card.name"/>
                  <div class="min-w-0 py-5 pl-28 pr-5">
                    <div class="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                      {{card.name}}
                    </div>
                    <div class="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                      {{card.site}}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <p class="text-xs text-right">📧:
          <a class="link" href="mailto:kasumi@bangdream.moe">
            kasumi@bangdream.moe
          </a>
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name:"links",
  data: () => {
    return {
      isLoading:true,
      links:[]
    }
  },
  methods: {
    loadData: function (){
      axios.get("https://api-mfl.bangdream.moe/myLinks.json").then((resp)=>{
        this.links = resp.data;
        this.isLoading = false;
      })
    }
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>

</style>
