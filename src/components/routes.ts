// import Home from '../pages/Home';
// import About from '../pages/About';
import { lazy } from 'react';

export default [
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
    // component: Home,
  },
  {
    path: '/about',
    component: lazy(() => import('../pages/About')),
    // component: About,
  },
];
