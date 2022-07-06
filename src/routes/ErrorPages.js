import PageNotFound from '../errors/PageNotFound';

const routes = [{
  path: '/:pathMatch(.*)*',
  name: 'PageNotFound',
  component: PageNotFound,
}, ];

export default routes;