<template>
  <div class="container">
    <div class="text-center p-md-4"><h1>Landing Page</h1></div>
    <div class="row">
      <div
        v-for="(item, index) in renderdata.landing_page"
        :key="index"
        class="col-md-4 col-12 py-4"
      >
        <div class="text-center">
          <h3 class="text-uppercase">SB-{{ index }}</h3>
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
              <img
                :src="landing.main_image"
                class="img-fluid"
                @click="showlanding(index, landing)"
            /></b-tab>
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
  data() {
    return {
      palaceshow: null
    };
  },
  async beforeMount() {},
  methods: {
    showlanding(index, item) {
      this.$router.push(`/landingpage?theme=${index}&palace=${item.name}`);
    }
  }
};
</script>

<style></style>
