const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../dist'),
  pages: {
    popup: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  filenameHashing: false,
  productionSourceMap: false,
  css: {
    extract: false,
  },
};
