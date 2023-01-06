<template>
  <div>
    <div class="card_rendershow">
      <div class="text-inerCard"><div class="text-show glow">sadasd</div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.card_rendershow {
  margin-top: 40vh;
  padding: 40px 0px;
  background: salmon;
  .text-inerCard {
    width: 80%;
    margin: auto;
    color: #fff;

    .text-show {
      font-size: 22vw;
      text-align: center;
      transition: 0.3s;
    }
    .glow {
      color: #fff;
      transition: 0.3s;
      text-align: center;
      -webkit-animation: glow 1s ease-in-out infinite alternate;
      -moz-animation: glow 1s ease-in-out infinite alternate;
      animation: glow 1s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
          0 0 40px #ffffff, 0 0 50px #c6739d, 0 0 60px #e60073, 0 0 70px #e60073;
      }
      to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
          0 0 50px #ffffff, 0 0 60px #a3557c, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
      }
    }
  }
}
</style>
