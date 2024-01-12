const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:`/portfolio200/`,
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Pug Loader
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end();
  },
  
})




