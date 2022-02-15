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
    <h3
      v-if="dataselect"
      class="header-text text-center container text-uppercase"
    >
      {{ dataselect.title }}

      <div @click="$router.push('/landingpage')" class="btn-back my-2">
        <img
          src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/iconoalate/LDP_Button.png"
          class="img-fluid img_backbtn desktopshow"
        />
      </div>
      <div @click="$router.push('/landingpage')" class="btn-back my-2">
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
                <div class="col-md-6 col-12 size-col mt-2" v-if="item.main_DT">
                  <div>หน้าหลัก</div>
                  <img
                    :src="item.main_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12  size-col mt-2"
                  v-if="item.sport_DT"
                >
                  <div>Sport</div>
                  <img
                    :src="item.sport_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.casino_DT"
                >
                  <div>Casino</div>
                  <img
                    :src="item.casino_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div class="col-md-6 col-12 size-col mt-2" v-if="item.slot_DT">
                  <div>Slot</div>
                  <img
                    :src="item.slot_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.horse_DT"
                >
                  <div>Horse</div>
                  <img
                    :src="item.horse_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.esport_DT"
                >
                  <div>E-sport</div>
                  <img
                    :src="item.esport_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.fishing_DT"
                >
                  <div>ยิงปลา</div>
                  <img
                    :src="item.fishing_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.lotto_DT"
                >
                  <div>หวย</div>
                  <img
                    :src="item.lotto_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12  size-col mt-2"
                  v-if="item.promotion_DT"
                >
                  <div>Promotion</div>
                  <img
                    :src="item.promotion_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.credit_DT"
                >
                  <div>Credit</div>
                  <img
                    :src="item.credit_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.contact_DT"
                >
                  <div>Contract</div>
                  <img
                    :src="item.contact_DT"
                    class="img-fluid width-img "
                    alt=""
                  />
                </div>
                <div
                  class="col-md-6 col-12 size-col mt-2"
                  v-if="item.question_DT"
                >
                  <div>คำถามที่พบบ่อย</div>
                  <img
                    :src="item.question_DT"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
              </div>
              <!-- mobile  -->
              <div
                class="mobile row pt-4 font-weight-bold align"
                v-if="showmobile == true"
              >
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.main_MB"
                >
                  <div>หน้าหลัก</div>
                  <img
                    :src="item.main_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.sport_MB"
                >
                  <div>Sport</div>
                  <img
                    :src="item.sport_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.casino_MB"
                >
                  <div>Casino</div>
                  <img
                    :src="item.casino_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.slot_MB"
                >
                  <div>Slot</div>
                  <img
                    :src="item.slot_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.horse_MB"
                >
                  <div>แข่งม้า</div>
                  <img
                    :src="item.horse_MB"
                    class="img-fluid width-img "
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.esport_MB"
                >
                  <div>E-Sport</div>
                  <img
                    :src="item.esport_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.fishing_MB"
                >
                  <div>ยิงปลา</div>
                  <img
                    :src="item.fishing_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.lotto_MB"
                >
                  <div>หวย</div>
                  <img
                    :src="item.lotto_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.promotion_MB"
                >
                  <div>Promotion</div>
                  <img
                    :src="item.promotion_MB"
                    class="img-fluid width-img "
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.credit_MB"
                >
                  <div>Credit</div>
                  <img
                    :src="item.credit_MB"
                    class="img-fluid width-img "
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.contact_MB"
                >
                  <div>Contract</div>
                  <img
                    :src="item.contact_MB"
                    class="img-fluid width-img "
                    alt=""
                  />
                </div>
                <div
                  class="col-lg-6 col-12 col-md-6 style-mb mt-2"
                  v-if="item.question_MB"
                >
                  <div>คำถามที่พบบ่อย</div>
                  <img
                    :src="item.question_MB"
                    class="img-fluid  width-img"
                    alt=""
                  />
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
          let data = this.renderdata.landing_page[this.toTheme].find(
            (x, key) => {
              return x.name == this.toPalace;
            }
          );
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
