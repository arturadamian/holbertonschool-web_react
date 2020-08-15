const path = require('path');

module.exports = {
    mode: 'development',
    entry : "./js/dashboard_main.js",
    output: {
        path: path.resolve(__dirname, 'public'),
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
            loader: 'file-loader'
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
