<template>
  <div class="bg-main-page">
    <main-landingpage
      v-if="!this.$route.query.theme"
      :renderdata="this.$store.state.itemrender"
    ></main-landingpage>
    <show-palace
      :renderdata="this.$store.state.itemrender"
      v-else
    ></show-palace>
  </div>
</template>

<script>
import MainLandingpage from "~/components/MainSeopage.vue";
import ShowPalace from "~/components/ShowseoPalace.vue";
export default {
  components: { MainLandingpage, ShowPalace },
  data() {
    return {};
  }
};
</script>

<style></style>
