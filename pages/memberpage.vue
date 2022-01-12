<template>
  <div class="bg-main-page">
    <main-memberpage
      v-if="!this.$route.query.theme"
      :renderdata="renderdata"
    ></main-memberpage>
    <showmember-palace v-else></showmember-palace>
  </div>
</template>

<script>
import MainMemberpage from "~/components/MainMemberpage.vue";
import ShowmemberPalace from "~/components/ShowmemberPalace.vue";
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
  components: { MainMemberpage, ShowmemberPalace },
  data() {
    return {
      renderdata: {}
    };
  }
};
</script>

<style></style>
