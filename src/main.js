import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap/dist/css/bootstrap.css"
import router from "./routes"
import { i18n } from './i18n.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

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

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueAxios, axios)

app.mount('#app')
