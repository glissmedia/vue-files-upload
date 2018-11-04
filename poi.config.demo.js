module.exports = (options, req) => ({
  extractCSS: false,
  sourceMap: false,
  removeDist: true,
  dist: 'docs',
  homepage: '/vue-files-upload/',
  html: {
    template: './demo/index.html'
  }
})
