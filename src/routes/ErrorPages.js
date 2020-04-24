import PageNotFound from '../errors/PageNotFound';

const routes = [{
  path: '*',
  name: 'PageNotFound',
  component: PageNotFound,
  meta: {
    auth: undefined
  }
}, ];

export default routes;