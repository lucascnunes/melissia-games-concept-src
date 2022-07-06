<template>
  <div>
    <carousel
      :pauseAutoplayOnHover="true"
      :perPage="1"
      :autoplay="6000"
      :mouseDrag="true"
    >
      <slide>
        <div class="slider-image slider-image-1" style="
          background-image: url('img/back3.jpg')
        "></div>
        <div class="col-12 col-lg-8">
          <h1 class="pt-5">{{ $t("Welcome to Melissia Games") }},</h1>
          <h3 class="mb-4">{{ $t("New client online") }}!</h3>
          <!-- <router-link to="/signin" class="btn btn-light px-5 py-2 mb-2 mr-3">
            <font-awesome-icon :icon="['fa', 'user']" class="mr-2" />
            Enter your account
          </router-link> -->
          <a href="https://melissia.games/office/login" class="btn btn-light px-5 py-2 mb-2 mr-3">
            <font-awesome-icon :icon="['fa', 'user']" class="mr-2" />
            {{ $t("Enter your account") }}
          </a>
          <!-- <router-link to="/signup" class="btn btn-light px-5 py-2 mb-2">
            <font-awesome-icon :icon="['fa', 'user-plus']" class="mr-2" />
            Create your account
          </router-link> -->
          <a href="https://melissia.games/office/register" class="btn btn-light px-5 py-2 mb-2">
            <font-awesome-icon :icon="['fa', 'user-plus']" class="mr-2" />
            {{ $t("Create your account") }}
          </a>
        </div>
      </slide>
      <slide>
        <div class="slider-image slider-image-2" style="
          background-image: url('img/back2.jpg')
        "></div>
        <div class="col-12 col-lg-8">
          <h1>{{ $t("Come in and have fun") }}!</h1>
          <h3 class="mb-4">
            {{ $t("Check the links bellow for more information") }}.
          </h3>
          <!-- <a
            href="https://t.me/melissia_games"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mr-3 mb-2"
          >
            <font-awesome-icon
              :icon="['fab', 'telegram']"
              class="mr-2"
            />Telegram
          </a> -->
          <a
            href="https://forum.melissia.games/index.php?threads/server-information-en.583/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mr-3 mb-2"
          >
            <font-awesome-icon
              :icon="['fa', 'info']"
              class="mr-2"
            />{{ $t("Server information") }}
          </a>
          <a
            href="https://forum.melissia.games/index.php"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mr-3 mb-2"
          >
            <font-awesome-icon
              :icon="['fa', 'comment']"
              class="mr-2"
            />Forum
          </a>
          <a
            href="https://discord.gg/yEbNNjWYCQ"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-light px-5 py-2 mb-2"
          >
            <font-awesome-icon 
              :icon="['fab', 'discord']" 
              class="mr-2"
            />Discord
          </a>
        </div>
      </slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide, 
    Navigation, 
    Pagination,
  },
  mounted() {
    // document
    //   .getElementsByClassName("slider-hero")[0]
    //   .classList.add("VueCarousel-slide-active");
  },
};
</script>

<style>

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
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
