import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
Vue.use(VueRouter);

import StaticPages from './StaticPages';
import ErrorPages from './ErrorPages';

let allRoutes = [];
allRoutes = allRoutes.concat(
  StaticPages,
  ErrorPages
);

const routes = allRoutes;

const router = new VueRouter({
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  mode: 'history',
  routes
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    store.commit('setLoadingStatus', true);
  }
  store.commit('toggleNavOff');
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  setTimeout(() => {
    store.commit('setLoadingStatus', false);
  }, 1000);
})

export default router;