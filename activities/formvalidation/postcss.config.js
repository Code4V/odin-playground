/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 1
    }),
    require('cssnano')({
      preset: 'default',
    })
  ]
}

module.exports = config