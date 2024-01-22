<template>
  <div class="flex flex-row justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mx-10 min-w-fit md:mt-40">
      <div class="card-body">
        <div class="card-title">
          {{$t('message.gcmTitle')}}
        </div>
        <div>
          <p>{{$t('message.gcmSubtitle')}}</p>
          <div v-if="isLoading">
            <div class="text-center">
              <p><span class="loading loading-ring loading-lg"></span></p>
            </div>
          </div>
          <div v-else>
            <table>
              <tbody>
              <tr v-for="(data, index) in myData" :key="index">
                <td><p class="text-right">{{data.game}}:</p></td>
                <td><input :id="index" type="text" class="input input-ghost w-full max-w-xs" disabled :value="data.id"/></td>
                <td><button class="btn btn-square " v-on:click="copyID(data.id)"><i class="bi bi-clipboard"></i></button></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GekiChuMai",
  data() {
    return {
      myData: [],
      isLoading: true
    };
  },
  methods: {
    copyID: (text) => {
      navigator.clipboard.writeText(text);
    }
  },
  mounted() {
    axios.get("https://api-mfl.bangdream.moe/myData.json").then((resp)=>{
      this.myData = resp.data;
      this.isLoading = false;
    })
  }
};
</script>

<style scoped>

</style>
