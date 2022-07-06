<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-transparent noselect"
    v-bind:style="$route.name === 'Home' ? 'box-shadow: 0px 0px 0px transparent !important;' : ''"
  >
    <router-link
      class="navbar-brand me-auto"
      :to="{
        name: 'Home',
      }"
      v-bind:class="$route.name === 'Home' ? 'force-light-text' : ''"
    >
      <img
        src="img/symbol.png"
        class="symbol"
        v-bind:style="$route.name === 'Home' ? 'filter: invert(1) !important;' : ''"
      /> Melissia Games
    </router-link>
    <button
      class="btn btn-light d-lg-none ms-auto"
      type="button"
      @click="showNav()"
      aria-label="Toggle navigation"
    >
      <font-awesome-icon icon="bars" size="1x" v-if="!isNavOpen" />
      <font-awesome-icon icon="times" size="1x" v-else />
    </button>

    <sidebar-component>
      <div class="d-flex justify-content-between">
        <router-link
          class="navbar-brand navbar-brand-sidebar me-auto"
          :to="{
            name: 'Home',
          }"
        >
          <img src="/img/symbol.png" class="symbol symbol-sidebar" /> Melissia Games
        </router-link>
        <button
          class="btn btn-light btn-sm rounded-circle py-0 align-self-end py-2"
          style="padding: 0 12px;"
          @click="changeTheme()"
        >
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
          <a href="https://forum.melissia.games/index.php">
            {{
            $t("Forum")
            }}
          </a>
        </li>
        <li>
          <a href="https://discord.gg/yEbNNjWYCQ" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'discord']" class="me-2" />Discord
          </a>
        </li>
        <li class="pt-3 text-center">
          <a href="https://melissia.games/office/register" class="btn btn-block btn-light px-4 pb-2">
            <font-awesome-icon :icon="['fa', 'clipboard']" class="me-2" size="xs" />
            {{ $t("Create your account") }}
          </a>
        </li>
        <li class="pb-3 text-center">
          <a href="https://melissia.games/office/login" class="btn btn-block btn-light px-4 pb-2">
            <font-awesome-icon :icon="['fa', 'clipboard']" class="me-2" size="xs" />
            {{ $t("Enter your account") }}
          </a>
        </li>
        <li class="d-lg-none py-5">
          {{ $t("Lang") }}
          <div class="d-flex flex-wrap justify-content-between pt-3">
            <button
              type="button"
              class="btn btn-sm btn-light border m-2"
              v-for="(lang, i) in langs"
              :key="i"
              @click="changeLang(lang)"
            >{{ lang }}</button>
          </div>
        </li>
        <li class="small py-2 px-5" style="position:fixed; bottom: 10px;">© 2020 Melissia Games.</li>
      </ul>
    </sidebar-component>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-if="!isNavOpen">
          <button class="btn btn-light" @click="changeTheme()">
            <font-awesome-icon icon="sun" size="1x" v-show="theme === 'dark'" />
            <font-awesome-icon icon="moon" size="1x" v-show="theme === 'light'" />
          </button>
        </li>
        <li class="nav-item nav-underline"
        :class="{
            'active': $route.name === 'Terms'
        }">
          <router-link
            class="nav-link"
            :to="{ name: 'Terms' }"
          >
            {{
            $t("Terms of Use")
            }}
          </router-link>
        </li>
        <li class="nav-item nav-underline"
        :class="{
            'active': $route.name === 'Privacy'
        }">
          <router-link
            class="nav-link"
            :to="{ name: 'Privacy' }"
          >
            {{
            $t("Privacy")
            }}
          </router-link>
        </li>
        <li class="nav-item nav-underline">
          <a
            class="nav-link"
            href="https://forum.melissia.games/index.php"
          >Forum</a>
        </li>
        <li class="nav-item nav-underline dropdown" @click="langDropdown">
          <button
            class="nav-link dropdown-toggle"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >{{ $t("Lang") }}</button>
          <div
            v-bind:class="lang_dropdown ? 'show' : ''"
            class="dropdown-menu"
            aria-labelledby="langDropdown"
          >
            <a
              v-for="(lang, i) in langs"
              :key="i"
              class="dropdown-item lang"
              @click="changeLang(lang)"
              style="cursor: pointer"
            >
            {{ lang }}
            </a>
          </div>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-light d-none d-lg-inline"
            type="button"
            @click="showNav()"
            aria-label="Toggle navigation"
          >
            <font-awesome-icon icon="bars" size="1x" v-if="!isNavOpen" />
            <font-awesome-icon icon="times" size="1x" v-else />
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "pinia";
import { useStore } from '../store'
import SidebarComponent from "./SidebarComponent";

export default {
  setup() {
    const store = useStore()

    return { store }
  },
  mounted() {
    console.log(this.$route.name)
  }, 
  data() {
    return {
      langs: ["en", "pt-br", "fr", "de", "es", "ru", "tu", "kr"],
      lang_dropdown: false,
      user_dropdown: false
    };
  },
  methods: {
    langDropdown() {
      this.lang_dropdown = !this.lang_dropdown
      this.user_dropdown = false
    },
    userDropdown() {
      this.user_dropdown = !this.user_dropdown
      this.lang_dropdown = false
    },
    changeLang(val) {
      this.$i18n.locale = val
    },
    showNav() {
      if (this.isNavOpen === true)
        this.store.$patch({
          isNavOpen: false
        });
      else
        this.store.$patch({
          isNavOpen: true
        });

    },
    changeTheme() {
      if (this.theme == "light") 
        this.store.$patch({
          theme: "dark"
        });
      else 
        this.store.$patch({
          theme: "light"
        });
      document.documentElement.setAttribute("data-theme", this.theme)
    }
  },
  computed: {
    ...mapState(useStore, ["isNavOpen", "theme", "setDarkTheme", "setLightTheme", "openNav", "closeNav"]),
  },
  components: {
    SidebarComponent
  }
};
</script>

<style>
.navbar {
  padding: 30px 30px !important;
  background-color: transparent !important;
  position: absolute !important;
  width: 100%;
  z-index: 99;
  box-shadow: 10px -10px 30px #232323;
}
.navbar-brand {
  color: var(--font-color) !important;
}
.navbar-brand-sidebar {
  color: var(--sidebar-font-color) !important;
}
.nav-item {
  margin: 0 auto;
  padding: 0;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: 10px;
  background: transparent !important;
} 
.nav-item .nav-link {
  color: var(--font-color) !important;
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
  color: #e70101d6 !important;
  font-weight: 800;
  font-size: large;
}
.dropdown-toggle::after {
  margin-left: 15px !important;
}
.btn-light {
  border: 1px solid var(--btn-border-color) !important;
  background-color: var(--btn-bg-color) !important;
  color: var(--btn-font-color) !important;
}
button {
  background: transparent;
}
.lang {
  color: var(--sidebar-font-color) !important;
}
.force-list-light-text li a {
  color: #fff !important;
}
.force-light-text {
  color: #fff !important;
}
</style>
