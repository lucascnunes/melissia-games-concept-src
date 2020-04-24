import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';

const store = new Vuex.Store({
  state: {
    loading: true,
    isNavOpen: false
  },
  mutations: {
    setLoadingStatus(state, value) {
      state.loading = value
    },
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen
    }
  },
  modules: {
    auth
  }
});

export default store;