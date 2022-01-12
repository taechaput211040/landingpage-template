<template>
  <div class="bg-main-page">
    <main-landingpage
      v-if="!this.$route.query.theme"
      :renderdata="renderdata"
    ></main-landingpage>
    <show-palace v-else></show-palace>
  </div>
</template>

<script>
import MainLandingpage from "~/components/MainSeopage.vue";
import ShowPalace from "~/components/ShowseoPalace.vue";
export default {
  async asyncData({ $axios }) {
    try {
      let renderdata = await $axios.get("./get.json");
      if (renderdata.status == 200) {
        renderdata = renderdata.data;
        return { renderdata };
      }
    } catch (err) {
      console.log(err);
    }
  },
  components: { MainLandingpage, ShowPalace },
  data() {
    return {
      palaceshow: ""
    };
  }
};
</script>

<style></style>
