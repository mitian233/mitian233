<template>
  <div class="flex flex-row justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mx-10 min-w-fit md:mt-40">
      <div class="card-body">
        <div class="card-title">
          拷贝我的各种ID
        </div>
        <div>
          <p>一键加好友</p>
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
                <td><button class="btn btn-square copyID" :data-clipboard-text="data.id"><i class="bi bi-clipboard"></i></button></td>
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
import ClipboardJS from "clipboard";
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
    fetchData: async function() {
      try{
        const response = await axios.get('https://api-mfl.bangdream.moe/myData.json');
        const dataArray = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    const clipboard = new ClipboardJS('.copyID');
    clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      e.clearSelection();
    });
    clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
    axios.get("https://api-mfl.bangdream.moe/myData.json").then((resp)=>{
      const raw = resp.data;
      this.myData = raw;
      this.isLoading = false;
    })
  },
  created() {

  }
};
</script>

<style scoped>

</style>
