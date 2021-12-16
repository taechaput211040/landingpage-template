<template>
  <div class="pt-5 mt-5">
    <div class="mt-5">
      <div class="container">
        <div class="row">
          <div
            v-for="(item, index) in renderdata.landing_page"
            :key="index"
            class="col-6 py-4"
          >
            <div class="text-center">
              <h2 class="text-uppercase">SB-{{ index }}</h2>
            </div>

            <div>
              <b-tabs pills vertical>
                <b-tab
                  content-class="mt-3"
                  v-for="(landing, index) in item"
                  :key="index"
                  :title="landing.name"
                  active
                >
                  <img :src="landing.main_image" class="img-fluid"
                /></b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderdata: [],
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
          console.log(this.renderdata);
        }
      } catch (err) {
        console.log(err);
      }
    },
    changePalace(data, index) {
      this.palaceshow = data.main_image;
      console.log(data, index);
    }
  }
};
</script>

<style></style>
