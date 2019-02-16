export default {
  API_HOST: process.env.API_HOST || '/api',
  DEBUG: process.env.NODE_ENV !== 'production',
  LS_KEY: 'vue_gallery',

  navMenu: [
    {
      title: 'home',
      link: '/',
      icon: 'home',
    },

    {
      title: 'gallery',
      link: '/gallery',
      icon: 'images',
    },

    {
      title: 'about',
      link: '/about',
      icon: 'empire',
    },

    {
      title: 'contacts',
      link: '/contacts',
      icon: 'at',
    },
  ],
};
