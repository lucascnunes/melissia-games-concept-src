<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <router-link
      class="navbar-brand"
      :to="{
        name: 'Home',
      }"
    >
      <img src="/img/symbol.png" class="symbol" /> Melissia Games
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-underline active">
          <router-link class="nav-link" :to="{ name: 'Terms' }">{{
            $t("Terms of Use")
          }}</router-link>
        </li>
        <li class="nav-item nav-underline">
          <router-link class="nav-link" :to="{ name: 'Privacy' }">{{
            $t("Privacy")
          }}</router-link>
        </li>
        <li class="nav-item nav-underline">
          <a class="nav-link" href="/forum">Forum</a>
        </li>
        <li class="nav-item nav-underline dropdown" @click="langDropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ $t("Lang") }}
          </a>
          <div
            v-bind:class="lang_dropdown ? 'show' : ''"
            class="dropdown-menu"
            aria-labelledby="langDropdown"
          >
            <a
              v-for="(lang, i) in langs"
              :key="i"
              class="dropdown-item"
              href="#"
              @click="changeLang(lang)"
              >{{ lang }}</a
            >
          </div>
        </li>
        <li class="nav-item">
          <a href="/account" class="btn btn-light px-4">
            <font-awesome-icon
              :icon="['fa', 'user-plus']"
              class="mr-2"
              size="xs"
            />
            {{ $t("Create your account") }}
          </a>
        </li>
        <li v-if="isLogged" class="nav-item nav-underline dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            @click="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Username
          </a>
          <div
            v-bind:class="user_dropdown ? 'show' : ''"
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a class="dropdown-item" href="#">Account</a>
            <a class="dropdown-item" href="#">Configuration</a>
            <a class="dropdown-item" href="#">Sign Out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Navigation",
  data() {
    return {
      langs: ["en", "pt-br", "fr", "de", "es", "ru", "tu", "kr"],
      lang_dropdown: false,
      user_dropdown: false,
    };
  },
  methods: {
    langDropdown() {
      this.lang_dropdown = !this.lang_dropdown;
      this.user_dropdown = false;
    },
    userDropdown() {
      this.user_dropdown = !this.user_dropdown;
      this.lang_dropdown = false;
    },
    changeLang(val) {
      this.$i18n.locale = val;
    },
  },
  computed: {
    ...mapState("auth", ["isLogged"]),
  },
};
</script>

<style>
.navbar {
  background-color: transparent !important;
  position: absolute !important;
  width: 100%;
  z-index: 99;
}
.navbar-brand {
  color: white !important;
}
.nav-item {
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 10px;
}
.nav-item .nav-link {
  color: white !important;
}
.nav-underline:before,
.nav-underline:after {
  content: "";
  left: 0;
  position: absolute;
  bottom: 5px;
  width: 0px;
  height: 2px;
  margin: 5px 0 0;
  transition: all 0.2s ease-in-out;
  transition-duration: 0.25s;
  opacity: 0;
  background-color: white;
}
.nav-underline:hover:before,
.nav-underline:hover:after {
  width: 100%;
  opacity: 1;
}
.dropdown-menu.show {
  margin-top: 8px;
  background-color: #232323;
  border-radius: 0;
}
.dropdown-menu .dropdown-item {
  color: white;
}
.dropdown-menu .dropdown-item:hover {
  background: transparent;
  color: #f3ca7d98 !important;
}
.dropdown-toggle::after {
  margin-left: 15px !important;
}
</style>
