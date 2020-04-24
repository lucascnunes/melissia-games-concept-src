import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './modules/auth';

const store = new Vuex.Store({
  state: {
    loading: true
  },
  mutations: {
    setLoadingStatus(state, value) {
      state.loading = value
    }
  },
  modules: {
    auth
  }
});

export default store;