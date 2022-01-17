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
            <div v-for="(item, index) in dataselect.image" :key="index">
              <div
                class="desktop row pt-4 font-weight-bold align"
                v-if="showdesktop == true"
              >
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.login_DT">
                  <div>หน้าสมัครสมาชิก</div>
                  <img :src="item.login_DT" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.register1_DT"
                >
                  <div>หน้ากรอกข้อมูลโทรศัพท์</div>
                  <img :src="item.register1_DT" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.register2_DT"
                >
                  <div>หน้ากรอกข้อมูล</div>
                  <img :src="item.register2_DT" class="img-fluid  " alt="" />
                </div>

                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.main_image_DT"
                >
                  <div>หน้าหลัก</div>
                  <img :src="item.main_image_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.game1_DT">
                  <div>หน้าเข้าเล่น</div>
                  <img :src="item.game1_DT" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-6 size-col mt-2" v-if="item.game2_DT">
                  <div>หน้ากิจกรรม</div>
                  <img :src="item.game2_DT" class="img-fluid  " alt="" />
                </div>

                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.deposit_DT"
                >
                  <div>หน้าฝากเงิน</div>
                  <img :src="item.deposit_DT" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.withdraw_DT"
                >
                  <div>หน้าถอนเงิน</div>
                  <img :src="item.withdraw_DT" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.history_DT"
                >
                  <div>หน้าประวัติ</div>
                  <img :src="item.history_DT" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.change_password_DT"
                >
                  <div>หน้าเปลี่ยนรหัส</div>
                  <img
                    :src="item.change_password_DT"
                    class="img-fluid  "
                    alt=""
                  />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.register_promotion_DT"
                >
                  <div>หน้าโปรโมชั่น</div>
                  <img
                    :src="item.register_promotion_DT"
                    class="img-fluid  "
                    alt=""
                  />
                </div>
                <div
                  class="col-12 col-md-6 size-col mt-2"
                  v-if="item.promotion_DT"
                >
                  <div>หน้าโปรโมชั่น</div>
                  <img :src="item.promotion_DT" class="img-fluid  " alt="" />
                </div>
              </div>
              <!-- mobile  -->
              <div
                class="mobile row pt-4 font-weight-bold align"
                v-if="showmobile == true"
              >
                <div
                  class="col-12 col-md-4 style-mb mt-2 "
                  v-if="item.login_MB"
                >
                  <div>หน้าสมัครสมาชิก</div>
                  <img :src="item.login_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.register1_MB"
                >
                  <div>หน้ากรอกข้อมูลโทรศัพท์</div>

                  <img :src="item.register1_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.register2_MB"
                >
                  <div>หน้ากรอกข้อมูล</div>

                  <img :src="item.register2_MB" class="img-fluid  " alt="" />
                </div>

                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.main_image_MB"
                >
                  <div>หน้าหลัก</div>
                  <img :src="item.main_image_MB" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-4 style-mb mt-2" v-if="item.game1_MB">
                  <div>หน้าเข้าเล่น</div>
                  <img :src="item.game1_MB" class="img-fluid  " alt="" />
                </div>
                <div class="col-12 col-md-4 style-mb mt-2" v-if="item.game2_MB">
                  <div>หน้ากิจกรรม</div>
                  <img :src="item.game2_MB" class="img-fluid  " alt="" />
                </div>

                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.deposit_MB"
                >
                  <div>หน้าฝากเงิน</div>

                  <img :src="item.deposit_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.withdraw_MB"
                >
                  <div>หน้าถอนเงิน</div>

                  <img :src="item.withdraw_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.history_MB"
                >
                  <div>หน้าประวัติ</div>

                  <img :src="item.history_MB" class="img-fluid  " alt="" />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.change_password_MB"
                >
                  <div>หน้าเปลี่ยนรหัส</div>

                  <img
                    :src="item.change_password_MB"
                    class="img-fluid  "
                    alt=""
                  />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.register_promotion_MB"
                >
                  <div>หน้าโปรโมชั่น</div>
                  <img
                    :src="item.register_promotion_MB"
                    class="img-fluid  "
                    alt=""
                  />
                </div>
                <div
                  class="col-12 col-md-4 style-mb mt-2"
                  v-if="item.promotion_MB"
                >
                  <div>หน้าโปรโมชั่น</div>
                  <img :src="item.promotion_MB" class="img-fluid  " alt="" />
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
      <div class="set-position">
        <div class="card-expanding">
          <div class="font-bold" v-html="dataselect.description"></div>
        </div>
      </div>
    </template> -->
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
