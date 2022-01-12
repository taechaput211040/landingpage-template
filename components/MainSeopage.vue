<template>
  <div class="container">
    <div class="text-center py-5 font-weight-bold headertext">
      <h1>เลือกหน้า Landing Page (SEO)</h1>
      รับทำเว็บไซต์พนันออนไลน์ มีทุกค่าย ครบทุกเกมส์
    </div>
    <div class="row">
      <div
        v-for="(item, index) in renderdata.landing_page_seo"
        :key="index"
        class="col-md-4 col-12 py-4"
      >
        <div class=" p2">
          <b-tabs
            align="center"
            end
            active-nav-item-class="text-success font-weight-bold"
            content-class="mt-3"
          >
            <b-tab content-class="mt-3" v-for="(landing, i) in item" :key="i"
              ><template #title>
                <div
                  class="d-flex card-menutap"
                  @click="setpalace(landing.title)"
                >
                  <div class="colorpalace">
                    <img :src="landing.color" class="img-fluid" />
                  </div>
                  <div
                    class="showpalace text-uppercase"
                    :class="{ active_menu_palate: landing.title == palaceshow }"
                  >
                    {{ landing.name }}
                  </div>
                </div>
              </template>

              <div class="text-center card-showtheme">
                <img
                  :src="landing.main_image"
                  class="img-fluid img-showtheme"
                  @click="showlanding(index, landing)"
                />

                <img
                  src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/iconoalate/showmorebtn.png"
                  class="btn-showpalace img fluid"
                  @click="showlanding(index, landing)"
                />
                <div class="text-center my-3">
                  <h3 class="text-uppercase" style="font-weight: bold;">
                    SB-{{ index }}
                  </h3>
                </div>
              </div>
            </b-tab>
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

  created() {},
  methods: {
    showlanding(index, item) {
      this.$router.push(`/seopage?theme=${index}&palace=${item.name}`);
    },
    setpalace(palace) {
      this.palaceshow = palace;
    }
  }
};
</script>

<style></style>
