module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-loader")
      //.loader("vue-loader") // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .loader("vue-loader-v16")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "img/[name].[hash:8].[ext]",
      });
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_variables.scss";`,
      },
    },
  },
};
