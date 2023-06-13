module.exports = {
    publicPath: './',
    css: {
        extract: false
      },
      productionSourceMap: false,
      configureWebpack: {
        optimization: {
          minimize: false
        }
      }
}