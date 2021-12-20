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
import MainLandingpage from "~/components/MainLandingpage.vue";
import ShowPalace from "~/components/ShowPalace.vue";
export default {
  components: { MainLandingpage, ShowPalace },
  data() {
    return {
      renderdata: {},
      palaceshow: ""
    };
  },
  async beforeMount() {
    this.getdata();
  },
  methods: {
    async getdata() {
      try {
        let response = await this.$axios.get("./get.json");
        if (response.status == 200) {
          this.renderdata = response.data;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
