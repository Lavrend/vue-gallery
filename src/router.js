import Vue from 'vue';
import VueRouter from 'vue-router';

// Page view components
import Home from '@/pages/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'home',
      },
      component: Home,
    },

    {
      path: '/gallery',
      name: 'gallery',
      component: () => import(/* webpackChunkName: 'gallery' */ '@/pages/Gallery.vue'),
    },

    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'about' */ '@/pages/About.vue'),
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: 'contacts' */ '@/pages/Contacts.vue'),
    },

    {
      path: '*',
      redirect: '/',
    },
  ],
});
