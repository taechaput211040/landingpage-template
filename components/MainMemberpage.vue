<template>
  <div class="container">
    <div class="text-center pt-5 "><h1>Member Page</h1></div>

    <div class="text-center py-5 font-weight-bold">
      <h1>เลือกหน้า Member</h1>
      รับทำเว็บไซต์พนันออนไลน์ มีทุกค่าย ครบทุกเกมส์
    </div>
    <div class="row">
      <div
        v-for="(item, index) in renderdata.Member"
        :key="index"
        class="col-md-4 col-12 py-4"
      >
        <div class="text-center">
          <h3 class="text-uppercase">SBM-{{ index }}</h3>
        </div>

        <div class="card p-md-3 p2">
          <b-tabs
            align="center"
            end
            active-nav-item-class="text-success font-weight-bold text-uppercase"
            content-class="mt-3"
          >
            <b-tab
              content-class="mt-3"
              v-for="(landing, i) in item"
              :key="i"
              :title="landing.name"
            >
              <div class="text-center">
                <img
                  :src="landing.mock_image"
                  class="img-fluid img-showtheme"
                  @click="showlanding(index, landing)"
                /></div
            ></b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    renderdata: {}
  },
  methods: {
    showlanding(index, item) {
      this.$router.push(`/memberpage?theme=${index}&palace=${item.name}`);
    }
  }
};
</script>

<style></style>
