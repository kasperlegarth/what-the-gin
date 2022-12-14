const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_variables.scss";`
      }
    }
  }
})
