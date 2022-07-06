import { createRouter, createWebHashHistory } from 'vue-router';
import { useStore } from '../store'

import StaticPages from './StaticPages';
import ErrorPages from './ErrorPages';

let allRoutes = [];
allRoutes = allRoutes.concat(
  StaticPages,
  ErrorPages
);

const routes = allRoutes;

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

router.beforeResolve((to, _, next) => {
    // If this isn't an initial page load.
    if (to.name) {
      // Start the route progress bar.
      useStore.toggleLoading;
    }
    useStore.toggleNavigation;
    next()
})
  
router.afterEach(() => {
    // Complete the animation of the route progress bar.
    setTimeout(() => {
        useStore.toggleLoading;
    }, 1000);
})
  
//   router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.authenticated)) {
//       if (useStore.state.auth.isLogged === false) {
//         next({
//           name: 'Login'
//         })
//       } else {
//         next()
//       }
//     } else if (to.matched.some(record => record.meta.guest)) {
//       if (useStore.state.auth.isLogged === false) {
//         next()
//       } else {
//         next({
//           name: 'Account'
//         })
//       }
//     } else {
//       next()
//     }
// })

export default router;
