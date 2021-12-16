<template>
  <div>
    <div class="menu_header">
      <div class="header-show container d-flex py-3">
        <nuxt-link to="/" class="logo">
          <img
            src="https://image.smart-ai-api.com/public/image-storage-betkub/images/20210811100859a9261ec6ff414acaaaa677c9ad7c83a7.png"
            class="img-imgfluid main-logo"
          />
        </nuxt-link>
        <div class="menu">
          <nuxt-link to="/landingpage" class="btn mx-1 btn-landing p-2"
            >LANDING PAGE</nuxt-link
          >
          <nuxt-link to="/seopage" class="btn mx-1 btn-landing-seo p-2"
            >LANDING PAGE(SEO)</nuxt-link
          >
          <nuxt-link to="/memberpage" class="btn mx-1 btn-member  p-2"
            >MEMBER</nuxt-link
          >
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
