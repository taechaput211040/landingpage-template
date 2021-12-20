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
  components: { MainMemberpage, ShowmemberPalace },
  data() {
    return {
      renderdata: {}
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
