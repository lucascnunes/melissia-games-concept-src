<template>
  <div id="app">
    <loading />
    <navigation />
    <router-view />
    <footer>
      © 2020
      <strong>MELISSIA GAMES</strong>
      <!-- <br />
      {{
      $t("THIS SITE IS IN NO WAY ASSOCIATED WITH OR ENDORSED BY {name}", {
      name: "PEARL ABYSS",
      })
      }} -->
      ©
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Loading from "./components/Loading.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Loading,
    Navigation
  },
  mounted() {
    document.documentElement.setAttribute("data-theme", this.theme);
  },
  computed: {
    ...mapState(["theme"])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Marcellus&family=Open+Sans:wght@300;400;600;700&display=swap");
:root {
  --symbol-invert: invert(1);
  --symbol-inverted: invert(0);
  --font-color: #fff;
  --bg-color: #232323;
  --footer-bg-color: #fff;
  --footer-font-color: #232323;
  --sidebar-bg-color: #fff;
  --sidebar-font-color: #232323;
  --btn-background-color: #fff;
  --btn-font-color: #fff;
  --btn-bg-color: #232323;
  --btn-border-color: #232323;
}

[data-theme="dark"] {
  --symbol-invert: invert(0);
  --symbol-inverted: invert(1);
  --font-color: #232323;
  --bg-color: #fff;
  --footer-bg-color: #232323;
  --footer-font-color: #fff;
  --sidebar-bg-color: #232323;
  --sidebar-font-color: #fff;
  --btn-background-color: #232323;
  --btn-font-color: #232323;
  --btn-bg-color: #fff;
  --btn-border-color: #fff;
}
#app {
  font-family: "Marcellus", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  background: var(--bg-color);
  color: var(--font-color);
}
footer {
  background: var(--footer-bg-color);
  color: var(--footer-font-color);
  padding: 30px;
  font-size: 15px;
}
.symbol {
  width: 30px;
  height: 30px;
  filter: var(--symbol-invert);
}
.symbol-sidebar {
  filter: var(--symbol-inverted) !important;
}
.py-10 {
  padding: 10em 0;
}
.navbar-brand {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 12px !important;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
.bg-232323 {
  background-color: #232323 !important;
}
</style>
