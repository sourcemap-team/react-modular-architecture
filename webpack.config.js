const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'chunk.js'
  },
  devServer: {
    static: './build'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}
