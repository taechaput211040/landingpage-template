<template>
  <div class="container">
    <div class="text-center py-5 font-weight-bold headertext">
      <h1>เลือกหน้า Member</h1>
      รับทำเว็บไซต์พนันออนไลน์ มีทุกค่าย ครบทุกเกมส์
    </div>
    <div class="row">
      <div
        v-for="(item, index) in renderdata.Member"
        :key="index"
        class="col-md-4 col-12 py-4"
      >
        <div class="p2">
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

              <div class="text-center">
                <img
                  :src="landing.mock_image"
                  class="img-fluid "
                  @click="showlanding(index, landing)"
                />
                <div class="text-center my-3">
                  <h3 class="text-uppercase" style="font-weight: bold;">
                    SBM-{{ index }}
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
  data() {
    return {
      palaceshow: null
    };
  },
  props: {
    renderdata: {}
  },
  methods: {
    showlanding(index, item) {
      this.$router.push(`/memberpage?theme=${index}&palace=${item.name}`);
    },
    setpalace(palace) {
      this.palaceshow = palace;
    }
  }
};
</script>

<style></style>
