<template>
  <div>
    <div class="menu_header">
      <div class="header-show container">
        <nuxt-link to="/" class="logo">
          <img
            src="https://image.smart-ai-api.com/public/image-storage-betkub/images/20210811100859a9261ec6ff414acaaaa677c9ad7c83a7.png"
            class="img-imgfluid main-logo"
          />
        </nuxt-link>
        <div class="menu">
          <nuxt-link
            to="/landingpage"
            :class="{ active_menu: this.$route.name == 'landingpage' }"
            class="btn mx-1 btn-landing px-4"
            >LANDING PAGE</nuxt-link
          >
          <nuxt-link
            to="/seopage"
            :class="{ active_menu: this.$route.name == 'seopage' }"
            class="btn mx-1 btn-landing-seo px-4"
            >LANDING PAGE(SEO)</nuxt-link
          >
          <nuxt-link
            to="/memberpage"
            :class="{ active_menu: this.$route.name == 'memberpage' }"
            class="btn mx-1 btn-member px-4"
            >MEMBER</nuxt-link
          >
        </div>
        <div class="menu_mobile">
          <img
            @click="openNav()"
            v-if="showhamburger == true"
            src="https://image.smart-ai-api.com/public/image-storage/vegas1668s/icon/burger.png"
            class="img-fluid btn-mobile"
            alt=""
          />
          <img
            @click="closeNav()"
            v-if="showhamburger == false"
            src="https://image.smart-ai-api.com/public/image-storage/vegas1668s/icon/Union.png"
            class="img-fluid btn-close"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="menu_right_mobile" id="menu-right">
      <div
        class="list_menu"
        @click="$router.push('/landingpage')"
        :class="{ active_menu_right: this.$route.name == 'landingpage' }"
      >
        <div class="py-1">Landing Page</div>
      </div>
      <div
        class="list_menu"
        @click="$router.push('/seopage')"
        :class="{ active_menu_right: this.$route.name == 'seopage' }"
      >
        <div class="py-1">landing Page(SEO)</div>
      </div>
      <div
        class="list_menu"
        @click="$router.push('/memberpage')"
        :class="{ active_menu_right: this.$route.name == 'memberpage' }"
      >
        <div class="py-1">Member Page</div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showhamburger: true
    };
  },
  methods: {
    openNav() {
      document.getElementById("menu-right").style.width = "70px";
      this.showhamburger = false;
      this.showclose = true;
    },
    closeNav() {
      document.getElementById("menu-right").style.width = "0";
      this.showclose = false;
      this.showhamburger = true;
    }
  }
};
</script>

<style></style>
