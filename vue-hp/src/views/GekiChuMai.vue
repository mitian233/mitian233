<template>
  <div class="flex flex-row justify-center">
    <div class="card w-96 bg-base-100 shadow-xl mx-10 min-w-fit md:mt-40">
      <div class="card-body">
        <div class="card-title">
          拷贝我的ID
        </div>
        <div>
          <p>一键加好友</p>
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
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: "GekiChuMai",
  data() {
    return {
      myData: [
        {
          game: "CHUNITHM(CN)",
          id: "100524487797205"
        },
        {
          game: "maimaiDX(CN)",
          id: "884614379689669"
        },
        {
          game: "BanG Dream(JP)",
          id: "116600266"
        }
      ]
    };
  },
  methods: {
  },
  mounted: () => {
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
  }
};
</script>

<style scoped>

</style>
