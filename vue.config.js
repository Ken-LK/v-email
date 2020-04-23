const port = 9008 // dev port
module.exports = {
  publicPath: './',
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
  },

  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vue email'
    }
  },
  css: {
    extract: false
  }
}
