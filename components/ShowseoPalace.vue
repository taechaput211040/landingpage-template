<template>
  <div class="bg-page" v-if="dataselect">
    <div class="bg-header ">
      <div class="show-mock">
        <div class="bg-showmock"></div>
        <img
          :src="dataselect.main_image"
          class="img-fluid img-showmock"
          alt=""
        />
      </div>
    </div>
    <h3 v-if="dataselect" class="header-text text-center container text-uppercase">
      {{ dataselect.title }}

      <div @click="$router.push('/seopage')" class="btn-back my-2">
        <img
          src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/iconoalate/LDP_Button.png"
          class="img-fluid img_backbtn desktopshow"
        />
      </div>
      <div @click="$router.push('/seopage')" class="btn-back my-2">
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
            <div v-for="(item, index) in dataselect.image" :key="index">
              <div
                class="desktop row pt-4 font-weight-bold align"
                v-if="showdesktop == true"
              >
                <div class="col-12 size-col mt-2" v-if="item.main_DT">
                  หน้าหลัก
                  <img :src="item.main_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12  size-col mt-2" v-if="item.sport_DT">
                  Sport
                  <img :src="item.sport_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.casino_DT">
                  Casino
                  <img :src="item.casino_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.slot_DT">
                  Slot
                  <img :src="item.slot_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.horse_DT">
                  Horse
                  <img :src="item.horse_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.esport_DT">
                  E-sport
                  <img :src="item.esport_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12  size-col mt-2" v-if="item.promotion_DT">
                  Promotion
                  <img :src="item.promotion_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12  size-col mt-2" v-if="item.credit_DT">
                  Credit
                  <img :src="item.credit_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.contact_DT">
                  Contract
                  <img :src="item.contact_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 size-col mt-2" v-if="item.question_DT">
                  คำถามที่พบบ่อย
                  <img :src="item.question_DT" class="img-fluid  " alt="" />
                </div>
              </div>
              <!-- mobile  -->
              <div
                class="mobile row pt-4 font-weight-bold align"
                v-if="showmobile == true"
              >
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.main_MB">
                  หน้าหลัก
                  <img :src="item.main_MB" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.sport_MB">
                  Sport
                  <img :src="item.sport_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.casino_MB"
                >
                  Casino
                  <img :src="item.casino_MB" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.slot_MB">
                  Slot
                  <img :src="item.slot_MB" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.horse_MB">
                  แข่งม้า
                  <img :src="item.horse_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.esport_MB"
                >
                  E-Sport
                  <img :src="item.esport_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.promotion_MB"
                >
                  Promotion
                  <img :src="item.promotion_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.credit_MB"
                >
                  Credit
                  <img :src="item.credit_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.contact_MB"
                >
                  Contract
                  <img :src="item.contact_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.question_MB"
                >
                  คำถามที่พบบ่อย
                  <img :src="item.question_MB" class="img-fluid  " alt="" />
                </div>
              </div>

              <!-- mobile  -->
            </div>
          </div>
        </div>
        <!-- desktop -->

        <!-- desktop -->
      </div>
    </div>
    <!-- <template>
      <div class="set-position" v-if="dataselect.description">
        <div class="card-expanding">
          <div class="font-bold" v-html="dataselect.description"></div>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showdesktop: true,
      showmobile: false,
      nodesktop: false,
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
    showMock(mock) {
      if (mock == "desktop") {
        this.showdesktop = true;
        this.showmobile = false;
      } else if (mock == "mobile") {
        this.showmobile = true;
        this.showdesktop = false;
      }
    },
    async getdata() {
      try {
        let response = await this.$axios.get("./get.json");
        if (response.status == 200) {
          this.renderdata = response.data.landing_page_seo;
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
      
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
