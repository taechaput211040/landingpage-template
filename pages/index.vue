<template>
  <div class="bg-main-page">
    <div class="bg-header">
      <div class="show-mock">
        <img
          src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/Section_Banner_1.png"
          class="img-fluid img-showmock"
          alt=""
        />
      </div>
    </div>

    <div class="show-content container text-center show-tocard">
      <img
        src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/red_chips-22.png"
        class="img-fluid red_chip_two"
      />
      <div class=" col-md-7 col-12">
        <h1 class="mt-5 header-content-feature">NEW FEATURE</h1>
        <h4 class="my-md-4 my-3 description">
          Feather ใหม่ ที่ไม่เหมือนใคร เพื่อเพิ่มความสนุกให้กับ
          เว็บไซต์ของคุณเน้นใช้งานง่ายและตอบโจทย์ที่สุดสำหรับคุณ
        </h4>
      </div>
    </div>
    <div class="show-feature container text-center py-md-2 py-2 my-5">
      <VueSlickCarousel
        v-bind="settings"
        :arrows="true"
        v-if="renderdata.features"
      >
        <div
          class="row"
          v-for="(item, index) in renderdata.features.normal_feature"
          :key="index"
        >
          <div class=" p-lg-3 p-md-2 p-2">
            <div class="card-feature">
              <img
                v-if="item.status == 0"
                src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/featuremain/ComingSoon.png"
                class="img-fluid commingsoon"
              />
              <img :src="item.image" class="img-fluid img-feature  mt-3" />
              <div>
                <div class="title-feature">{{ item.name }}</div>
                <div class="text-descrpit">{{ item.eng_name }}</div>
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="bg-section-card">
      <div class="container card-welcome">
        <img
          src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/red_chips.png"
          class="img-fluid red_chip"
        />
        <div class="row">
          <div class="col-lg-7 col-md-6 col-12  p-lg-5 p-md-3  p-4 ">
            <img
              src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/featuremain/MockUp.png"
              class="img-fluid"
            />
          </div>
          <div
            class="col-lg-5 col-md-6 col-12  p-lg-3 p-md-2  p-4 text-welcome text-center"
          >
            <div>
              <h1 class="text-first">Responsive</h1>
              <h1 class="text-second ">
                Template Website
              </h1>
              <h3 class="my-md-4 my-3 description">
                เทมเพลตที่รองรับทุกระบบผ่านทุก<br />
                อุปกรณ์อย่างสมบูรณ์เเบบ
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-sectiongame ">
      <div class="header-text-game desktopshow">
        <h1>
          <span class="text-first"> THE BEST</span>
          <span class="text-second">FEATURE</span>
        </h1>
      </div>
      <div class="header-text-game mobiletopshow">
        <span class="text-first"> THE BEST</span>
        <span class="text-second">FEATURE</span>
      </div>

      <img
        src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/featuremain/bgsectiongame2.png"
        alt=""
        class="img-fluid desktopshow"
      />
      <img
        src="https://image.smart-ai-api.com/public/thongtest/mbbgsectiongame.png"
        alt=""
        class="img-fluid mobiletopshow"
      />
      <div class="show-feature show-game-main container mb-5">
        <VueSlickCarousel
          v-bind="settings"
          :arrows="true"
          v-if="renderdata.features"
        >
          <div
            class="row"
            v-for="(item, index) in renderdata.features.group_feature"
            :key="index"
          >
            <div class=" p-lg-3 p-md-2 p-2">
              <div class="card-feature-game">
                <img
                  v-if="item.status == 0"
                  src="https://image.smart-ai-api.com/public/image-storage/demo-template-sale/featuremain/ComingSoon.png"
                  class="img-fluid commingsoon"
                />
                <img :src="item.image" class="img-fluid img-feature mt-3" />
                <div>
                  <div class="title-feature">{{ item.name }}</div>
                  <div class="text-descrpit">{{ item.eng_name }}</div>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  scrollToTop: true,
  data() {
    return {
      renderdata: [],

      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  async fetch() {
    await this.$axios
      .get("./get.json")
      .then(res => ((this.renderdata = res.data), console.log(this.renderdata)))
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
