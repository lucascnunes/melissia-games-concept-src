import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css";
import router from "./routes";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faUserPlus,
    faUser,
    faBars,
    faTimes,
    faSun,
    faMoon,
    faClipboard,
    faKey,
    faAt,
    faComment,
    faInfo,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

import App from './App.vue'


library.add(
    faUserPlus,
    faUser,
    faDiscord,
    faTelegram,
    faBars,
    faTimes,
    faSun,
    faMoon,
    faClipboard,
    faKey,
    faComment,
    faInfo,
    faAt
  );

const pinia = createPinia()
const i18n = createI18n()
  
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
