import Home from '../pages/Home';
import Terms from '../pages/UseTerms';
import Privacy from '../pages/Privacy';

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authenticated: undefined
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: {
      authenticated: undefined
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      authenticated: undefined
    }
  },
];

export default routes;