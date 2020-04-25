<template>
  <div>
    <carousel
      :autoplay="true"
      :autoplayHoverPause="true"
      :perPage="1"
      :autoplayTimeout="6000"
      :paginationSize="8"
      :loop="true"
      :mouse-drag="false"
      :navigationEnabled="true"
      :centerMode="false"
      paginationActiveColor="#f3ca7d98"
      paginationColor="#232323"
      class="slider-hero"
    >
      <slide class="d-lg-flex justify-content-lg-center align-items-lg-center">
        <div class="slider-image slider-image-1"></div>
        <div class="col-12 col-lg-8">
          <h1 class="pt-5">{{ $t("Welcome to Melissia Games") }},</h1>
          <h3>{{ $t("We work so you can play") }}!</h3>
        </div>
      </slide>
      <slide class="d-lg-flex justify-content-lg-center align-items-lg-center">
        <div class="slider-image slider-image-2"></div>
        <div class="col-12 col-lg-8">
          <h1>{{ $t("Come in and have fun") }}!</h1>
          <h3>{{ $t("Check the links bellow for more information") }}.</h3>
          <a
            href="https://t.me/melissia_games"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mr-3 mb-2"
          >
            <font-awesome-icon :icon="['fab', 'telegram']" class="mr-2" />Telegram
          </a>
          <a
            href="https://discord.gg/MT5Uu2Y"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mb-2"
          >
            <font-awesome-icon :icon="['fab', 'discord']" class="mr-2" />Discord
          </a>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document
      .getElementsByClassName("VueCarousel-slide")[0]
      .classList.add("VueCarousel-slide-active");
  }
};
</script>

<style>
.slider-hero {
  display: flex;
  color: #fff;
  background: #232323;
}
.VueCarousel-slide {
  height: 100vh;
  padding: 10em;
  position: relative;
}
.slider-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  filter: blur(8px) brightness(0.4);
  -webkit-filter: blur(1.5px) brightness(0.4);
  animation: slideShow 24s linear infinite 0s;
  -o-animation: slideShow 24s linear infinite 0s;
  -moz-animation: slideShow 24s linear infinite 0s;
  -webkit-animation: slideShow 24s linear infinite 0s;
}
.slider-image-1 {
  background: url("/img/back1.jpg") no-repeat !important;
  background-size: cover !important;
  background-position: top left;
}
.slider-image-2 {
  background: url("/img/back2.jpg") no-repeat !important;
  background-size: cover !important;
  background-position: top left;
}

.VueCarousel-inner {
  transition: none !important;
}

.VueCarousel-slide {
  opacity: 0 !important;
  flex-basis: 0;
}

.VueCarousel-slide-active {
  transition: all 0.5s !important;
  opacity: 1 !important;
}
.VueCarousel-pagination {
  position: absolute;
  bottom: 30px;
}
.VueCarousel-navigation-button.VueCarousel-navigation-prev {
  position: absolute !important;
  color: #fff !important;
  left: 80px !important;
  transition: opacity 0.2s !important;
}
.VueCarousel-navigation-button.VueCarousel-navigation-prev.VueCarousel-navigation--disabled {
  opacity: 0;
}
.VueCarousel-navigation-button.VueCarousel-navigation-next {
  position: absolute !important;
  color: #fff !important;
  right: 80px !important;
  transition: opacity 0.2s !important;
}
.VueCarousel-navigation-button.VueCarousel-navigation-next.VueCarousel-navigation--disabled {
  opacity: 0;
}
@media only screen and (max-width: 600px) {
  .VueCarousel-navigation-button {
    display: none;
  }
  .VueCarousel-slide {
    padding: 10em 10px;
  }
}

@keyframes slideShow {
  0% {
    transform: scale(1);
    -ms-transform: scale(1);
  }
  30% {
    transform: scale(1.1);
    -ms-transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    -ms-transformm: scale(1);
  }
}
</style>
