var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Webpack config for builds
 */
var config = {}

config.entry = [
  path.resolve(__dirname, 'src/index.js')
]

config.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
}

config.module = {
  preLoaders: [],
  loaders: [
    {
      // JS LOADER
      // https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'babel?optional[]=runtime',
      exclude: /node_modules/
    },
    {
      // CSS LOADER
      // https://github.com/webpack/css-loader
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      // LESS LOADER
      // https://github.com/webpack/less-loader
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      // URL LOADER
      // https://github.com/webpack/url-loader
      test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
      loader: 'url-loader?limit=100000'
    },
    {
      test: /\.jsx$/,
      loader: 'babel?optional[]=runtime',
      exclude: /node_modules/
    },
    {
      test: /\.(otf|ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }
  ]
}

config.plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'build-templates/index.html',
    inject: 'body',
    favicon: 'build-templates/favicon.ico'
  })
]

module.exports = config

/*
module.exports = require('./webpack.make')({
  BUILD: true,
  TEST: false
})
*/
