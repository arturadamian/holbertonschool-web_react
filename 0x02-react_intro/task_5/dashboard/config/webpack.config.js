const path = require('path');

module.exports = {
    mode: 'development',
    entry : "./src/",
    output: {
        path: path.resolve(__dirname, './src'),
        publicPath: '/src/',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
            ]
        },
        {
          test: /\.jpg$/,
          use: {
            loader: 'src'
          }
        },
        {
          test   : /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader : 'babel',
          query  : {
            presets:[ 'react', 'es2015' ]
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      open: true,
      port: 8564
    }
}
