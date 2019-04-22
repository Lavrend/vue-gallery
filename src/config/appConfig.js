export default {
  // TODO process.env.API_HOST !!!
  API_HOST: process.env.API_HOST || 'https://vue-gallery-server.herokuapp.com',
  DEBUG: process.env.NODE_ENV !== 'production',
  LS_KEY: 'vue_gallery',

  GALLERY_PAGE_SIZE: 10,

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
