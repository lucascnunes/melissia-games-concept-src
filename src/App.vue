<template>
  <div id="app">
    <loading />
    <navigation />
    <router-view />
    <footer>
      © 2020 <strong>MELISSIA GAMES</strong>
      <br />
      {{
        $t("THIS SITE IS IN NO WAY ASSOCIATED WITH OR ENDORSED BY {name}", {
          name: "PEARL ABYSS",
        })
      }}
      ©
    </footer>
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Loading,
    Navigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Marcellus&family=Open+Sans:wght@300;400;600;700&display=swap");
#app {
  font-family: "Marcellus", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper {
  background: #232323;
  color: #fff;
}
footer {
  padding: 30px;
  font-size: 15px;
}
.symbol {
  width: 30px;
  height: 30px;
  filter: invert(1);
}
.py-10 {
  padding: 10em 0;
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
</style>
