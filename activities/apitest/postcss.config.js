module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [
    require("autoprefixer"), 
    require('cssnano')({
      stage: 1,
    }),
    require('precss')
  ]

};
