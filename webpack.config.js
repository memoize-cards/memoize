require('dotenv').config({ override: true })

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      serveIndex: true
    },
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT
  },
  entry: {
    lib: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }],
        exclude: '/node_modules/'
      },
      {
        test: /\.(?<ext>ico|png|svg|jpg|jpeg|gif|mp4|ogg|webm|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]'
            }
          }
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          keep_fnames: true,
          safari10: true
        }
      })
    ]
  },
  output: {
    clean: true,
    filename: 'qcx-carousel.js',
    library: 'qcxCarousel',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.PUBLIC_PATH
  },
  performance: {
    hints: process.env.HINTS,
    maxAssetSize: Number(process.env.MAX_ASSET_SIZE),
    maxEntrypointSize: Number(process.env.MAX_ENTRYPOINT_SIZE)
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER_MODE
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@directive': path.resolve(__dirname, 'src/directive/'),
      '@elements': path.resolve(__dirname, 'src/elements/'),
      '@pixel': path.resolve(__dirname, 'src/pixel/'),
      '@polyfill': path.resolve(__dirname, 'src/polyfill/'),
      '@standard': path.resolve(__dirname, 'src/standard/')
    },
    extensions: ['.js', '.jsx']
  }
}
