<template>
  <div class="bg-main-page">
    <main-memberpage
      v-if="!this.$route.query.theme"
      :renderdata="$store.state.itemrender"
    ></main-memberpage>
    <showmember-palace
      :renderdata="$store.state.itemrender"
      v-else
    ></showmember-palace>
  </div>
</template>

<script>
import MainMemberpage from "~/components/MainMemberpage.vue";
import ShowmemberPalace from "~/components/ShowmemberPalace.vue";
export default {
  components: { MainMemberpage, ShowmemberPalace },
  data() {
    return {};
  }
};
</script>

<style></style>
