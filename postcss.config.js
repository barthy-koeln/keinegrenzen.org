module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'autoprefixer': {
      'browsers': ['last 2 versions']
    },
    'cssnano': {}
  }
}