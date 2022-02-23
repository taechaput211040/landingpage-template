<template>
  <div class="bg-page" v-if="dataselect">
    <div class="bg-header">
      <div class="show-mock">
        <div class="bg-showmock">
          <img
            :src="dataselect.mock_image"
            class="img-fluid img-showmock"
            alt=""
          />
        </div>
      </div>
    </div>
    <h3
      v-if="dataselect"
      class="header-text text-center container text-uppercase"
    >
      {{ dataselect.title }}
      <div @click="$router.push('/memberpage')" class="btn-back my-2">
        <img
          src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/iconoalate/LDP_Button.png"
          class="img-fluid img_backbtn desktopshow"
        />
      </div>
      <div @click="$router.push('/memberpage')" class="btn-back my-2">
        <img
          src=" https://image.smart-ai-api.com/public/image-storage/demo-template-sale/iconoalate/btnback.png"
          class="img-fluid img_backbtn mobiletopshow"
        />
      </div>
    </h3>
    <div class="container card-to-show col-md-10">
      <div class="text-center">
        <div class="row card-style pt-2">
          <div class="col-md-10 ">
            <div class="row section-select py-3">
              <div class="col-6 col-md-3 text-end">
                <img
                  @click="showMock('desktop')"
                  :src="
                    showdesktop
                      ? 'https://image.smart-ai-api.com/public/image-storage-betkub/images/202108130236454c7ce5a4386845b29d43c9470cb581ec.png'
                      : 'https://image.smart-ai-api.com/public/image-storage-betkub/images/202108111004178f697ac870464ff49bf87aa9edce31b5.png'
                  "
                  class="icon-size responsive"
                />
                <div
                  class="btn-size responsive"
                  @click="showMock('desktop')"
                  :class="{ icon_active: showdesktop }"
                >
                  <span>Desktop size</span>
                </div>
              </div>
              <div class="col-6 col-md-3 text-start ">
                <img
                  @click="showMock('mobile')"
                  :src="
                    showmobile
                      ? 'https://image.smart-ai-api.com/public/image-storage-betkub/images/20210813023710aa92740f85b6416ebe6f399d35535ad9.png'
                      : 'https://image.smart-ai-api.com/public/image-storage-betkub/images/20210811100240e23ac73c1ec44300a6bddb8416cf8ead.png'
                  "
                  class="icon-size responsive"
                />
                <div
                  class="btn-size responsive"
                  @click="showMock('mobile')"
                  :class="{ icon_active: showmobile }"
                >
                  <span>Mobile size</span>
                </div>
              </div>
            </div>
            <div v-if="showdesktop == true">
              <div
                class="desktop row pt-4 font-weight-bold align"
                v-if="dataselect.image_dt"
              >
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-for="(item, index) in dataselect.image_dt"
                  :key="index"
                >
                  <div>{{ item.text }}</div>
                  <img :src="item.value" class="img-fluid  " alt="" />
                </div>
              </div>
            </div>
            <!-- mobile  -->
            <div v-if="showmobile == true">
              <div
                class="mobile row pt-4 font-weight-bold align"
                v-if="dataselect.image_mb"
              >
                <div
                  class="col-12 col-md-4 style-mb mt-2 "
                  v-for="(item, index) in dataselect.image_mb"
                  :key="index"
                >
                  <div>{{ item.text }}</div>
                  <img :src="item.value" class="img-fluid  " alt="" />
                </div>

                <!-- mobile  -->
              </div>
            </div>
          </div>
        </div>
        <!-- desktop -->

        <!-- desktop -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    renderdata: {}
  },
  data() {
    return {
      showdesktop: true,
      showmobile: false,
      nodesktop: false,
      toTheme: "",
      toPalace: "",
      dataselect: null
    };
  },
  async fetch() {
    try {
      this.selectedData();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    showMock(mock) {
      if (mock == "desktop") {
        this.showdesktop = true;
        this.showmobile = false;
      } else if (mock == "mobile") {
        this.showmobile = true;
        this.showdesktop = false;
      }
    },
    async selectedData() {
      try {
        if (this.$route.query.theme && this.$route.query.palace) {
          this.toTheme = this.$route.query.theme;
          this.toPalace = this.$route.query.palace;
          let data = this.renderdata.Member[this.toTheme].find((x, key) => {
            return x.name == this.toPalace;
          });
          this.dataselect = data;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
