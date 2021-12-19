<template>
  <div class="bg-page" v-if="dataselect">
    <div class="bg-header ">
      <div class="bg-none"></div>
      <div class="show-mock">
        <div class="bg-showmock"></div>
        <img
          :src="dataselect.main_image"
          class="img-fluid img-showmock"
          alt=""
        />
      </div>
    </div>
    <div
      v-for="(item, index) in dataselect.image"
      :key="index"
      class="container mt-5 pt-5"
    >
      <!-- desktop -->
      <img :src="item.main_DT" class="img-fluid  " alt="" />
      <img :src="item.sport_DT" class="img-fluid  " alt="" />
      <img :src="item.casino_DT" class="img-fluid  " alt="" />
      <img :src="item.slot_DT" class="img-fluid  " alt="" />
      <img :src="item.horse_DT" class="img-fluid  " alt="" />
      <img :src="item.esport_DT" class="img-fluid  " alt="" />
      <img :src="item.promotion_DT" class="img-fluid  " alt="" />
      <img :src="item.credit_DT" class="img-fluid  " alt="" />
      <img :src="item.contact_DT" class="img-fluid  " alt="" />
      <img :src="item.question_DT" class="img-fluid  " alt="" />
      <!-- desktop -->
      <!-- mobile  -->
      <img :src="item.main_MB" class="img-fluid  " alt="" />
      <img :src="item.sport_MB" class="img-fluid  " alt="" />
      <img :src="item.casino_MB" class="img-fluid  " alt="" />
      <img :src="item.slot_MB" class="img-fluid  " alt="" />
      <img :src="item.horse_MB" class="img-fluid  " alt="" />
      <img :src="item.esport_MB" class="img-fluid  " alt="" />
      <img :src="item.promotion_MB" class="img-fluid  " alt="" />
      <img :src="item.credit_MB" class="img-fluid  " alt="" />
      <img :src="item.contact_MB" class="img-fluid  " alt="" />
      <img :src="item.question_MB" class="img-fluid  " alt="" />

      <!-- mobile  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toTheme: "",
      toPalace: "",
      renderdata: {},
      dataselect: null
    };
  },

  async mounted() {
    await this.getdata();
    this.selectedData();
  },
  methods: {
    async getdata() {
      try {
        let response = await this.$axios.get("./get.json");
        if (response.status == 200) {
          this.renderdata = response.data.landing_page;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async selectedData() {
      try {
        if (this.$route.query.theme && this.$route.query.palace) {
          this.toTheme = this.$route.query.theme;
          this.toPalace = this.$route.query.palace;
          let data = this.renderdata[this.toTheme].find((x, key) => {
            return x.name == this.toPalace;
          });
          this.dataselect = data;
          console.log(this.dataselect);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
