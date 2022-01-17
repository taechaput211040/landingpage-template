<template>
  <div class="bg-main-page">
    <main-landingpage
      v-if="!this.$route.query.theme"
      :renderdata="$store.state.itemrender"
    ></main-landingpage>
    <show-palace :renderdata="$store.state.itemrender" v-else></show-palace>
  </div>
</template>

<script>
import MainLandingpage from "~/components/MainLandingpage.vue";
import ShowPalace from "~/components/ShowPalace.vue";
export default {
  components: { MainLandingpage, ShowPalace },
  data() {
    return {
    };
  }
  // async beforeMount() {
  //   this.getdata();
  // },
};
</script>

<style></style>
