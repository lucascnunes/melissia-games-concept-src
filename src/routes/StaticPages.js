import Home from '../pages/Home';
import Terms from '../pages/UseTerms';
import Privacy from '../pages/Privacy';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Account from '../pages/Account';

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
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      guest: true
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      guest: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      guest: true
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {
      authenticated: true
    }
  },
];

export default routes;