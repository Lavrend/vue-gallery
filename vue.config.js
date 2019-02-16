module.exports = {
  runtimeCompiler: true,

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss"; @import "@/styles/mixins.scss";',
      },
    },
  },
};
