<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent noselect">
    <router-link class="navbar-brand mr-auto" :to="{
        name: 'Home',
      }">
      <img src="/img/symbol.png" class="symbol" /> Melissia Games
    </router-link>
    <button class="navbar-toggler" type="button" @click="showNav()" aria-label="Toggle navigation">
      <font-awesome-icon icon="bars" size="2x" class="text-light" v-if="!isNavOpen" />
      <font-awesome-icon icon="times" size="2x" class="text-light" v-else />
    </button>

    <Sidebar>
      <div class="d-flex justify-content-between">
        <router-link
          class="navbar-brand navbar-brand-sidebar mr-auto"
          :to="{
        name: 'Home',
      }"
        >
          <img src="/img/symbol.png" class="symbol symbol-sidebar" /> Melissia Games
        </router-link>
        <button class="btn btn-default btn-sm" @click="changeTheme()">
          <font-awesome-icon icon="sun" size="1x" v-show="theme === 'dark'" />
          <font-awesome-icon icon="moon" size="1x" v-show="theme === 'light'" />
        </button>
      </div>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link :to="{ name: 'Terms' }">
            {{
            $t("Terms of Use")
            }}
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Privacy' }">
            {{
            $t("Privacy")
            }}
          </router-link>
        </li>
        <li>
          <a>
            {{
            $t("Forum")
            }}
          </a>
        </li>
        <li>
          {{ $t("Lang") }}
          <div class="d-flex flex-wrap justify-content-between pt-3">
            <button
              class="btn btn-sm btn-light border m-2"
              v-for="(lang, i) in langs"
              :key="i"
              @click="changeLang(lang)"
            >{{ lang }}</button>
          </div>
        </li>
        <li class="py-3 text-center">
          <a href="/account" class="btn btn-light px-4">
            <font-awesome-icon :icon="['fa', 'user-plus']" class="mr-2" size="xs" />
            {{ $t("Create your account") }}
          </a>
        </li>
        <li>
          <a href="https://discord.gg/MT5Uu2Y" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'discord']" class="mr-2" />Discord
          </a>
        </li>
        <li>
          <a href="https://t.me/melissia_games" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'telegram']" class="mr-2" />Telegram
          </a>
        </li>
      </ul>
    </Sidebar>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" @click="changeTheme()" style="cursor: pointer;">
            <font-awesome-icon icon="sun" size="1x" class="text-light" v-show="theme === 'dark'" />
            <font-awesome-icon icon="moon" size="1x" class="text-light" v-show="theme === 'light'" />
          </a>
        </li>
        <li class="nav-item nav-underline active">
          <router-link class="nav-link" :to="{ name: 'Terms' }">
            {{
            $t("Terms of Use")
            }}
          </router-link>
        </li>
        <li class="nav-item nav-underline">
          <router-link class="nav-link" :to="{ name: 'Privacy' }">
            {{
            $t("Privacy")
            }}
          </router-link>
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
          >{{ $t("Lang") }}</a>
          <div
            v-bind:class="lang_dropdown ? 'show' : ''"
            class="dropdown-menu"
            aria-labelledby="langDropdown"
          >
            <a
              v-for="(lang, i) in langs"
              :key="i"
              class="dropdown-item lang"
              href="#"
              @click="changeLang(lang)"
            >{{ lang }}</a>
          </div>
        </li>
        <li class="nav-item">
          <a href="/account" class="btn btn-light px-4">
            <font-awesome-icon :icon="['fa', 'user-plus']" class="mr-2" size="xs" />
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
          >Username</a>
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
import { mapState, mapMutations } from "vuex";
import Sidebar from "./Sidebar";

export default {
  name: "Navigation",
  data() {
    return {
      langs: ["en", "pt-br", "fr", "de", "es", "ru", "tu", "kr"],
      lang_dropdown: false,
      user_dropdown: false
    };
  },
  methods: {
    ...mapMutations({
      openNav: "toggleNav",
      setTheme: "setTheme"
    }),
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
    showNav() {
      this.openNav();
    },
    changeTheme() {
      if (this.theme == "light") this.setTheme("dark");
      else this.setTheme("light");
      document.documentElement.setAttribute("data-theme", this.theme);
    }
  },
  computed: {
    ...mapState(["isNavOpen", "theme"]),
    ...mapState("auth", ["isLogged"])
  },
  components: {
    Sidebar
  }
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
  color: var(--font-color) !important;
}
.navbar-brand-sidebar {
  color: var(--sidebar-font-color) !important;
}
.text-light {
  color: var(--sidebar-font-color);
}
.nav-item {
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 10px;
}
.nav-item .nav-link {
  color: #fff !important;
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
  background-color: var(--sidebar-bg-color) !important;
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
.btn-light {
  border: 1px solid var(--btn-border-color) !important;
  background-color: var(--btn-bg-color) !important;
  color: var(--btn-font-color) !important;
}
.lang {
  color: var(--sidebar-font-color) !important;
}
</style>
