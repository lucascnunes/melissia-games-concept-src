import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';

const store = new Vuex.Store({
  state: {
    loading: true,
    isNavOpen: false,
    theme: 'light',
  },
  mutations: {
    setLoadingStatus(state, value) {
      state.loading = value;
    },
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    },
    toggleNavOff(state) {
      state.isNavOpen = false;
    },
    setTheme(state, value) {
      state.theme = value;
    }
  },
  modules: {
    auth
  }
});

export default store;