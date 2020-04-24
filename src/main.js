import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

import VueCarousel from "vue-carousel";

import "bootstrap/dist/css/bootstrap.css";

import {
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

import i18n from './i18n'

library.add(faUserPlus, faDiscord, faTelegram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  i18n,
  store
}).$mount("#app");