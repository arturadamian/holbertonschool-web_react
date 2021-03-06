const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      header: './modules/header/header.js',
      body: './modules/body/body.js',
      footer: './modules/footer/footer.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    performance: {
      maxAssetSize: 1000000
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
      contentBase: path.join(__dirname, 'public/public'),
      open: true,
      port: 8564
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new HTMLWebpackPlugin({
        filename: 'public/index.html'
      })
    ]
}
