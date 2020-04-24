import Home from '../pages/Home';
import Terms from '../pages/UseTerms';
import Privacy from '../pages/Privacy';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      auth: undefined
    }
  },
];

export default routes;