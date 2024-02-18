require('dotenv').config({ override: true })

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('inline-chunk-html-plugin')
const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname),
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      serveIndex: true
    },
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT
  },
  entry: {
    app: './src/index.js'
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
    ],
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/
        }
      },
      name: 'common'
    }
  },
  output: {
    clean: true,
    chunkFilename: '[name].[contenthash].js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
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
    new webpack.EnvironmentPlugin({
      SW_CACHE: Math.random().toString(32)
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'assets'), to: '.' }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'index.html'
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/(app|common|runtime)/]),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZER_MODE
    }),
    new BundleStatsWebpackPlugin({
      baselineFilepath: './../baseline.json'
    })
  ],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@artifact': path.resolve(__dirname, 'prelude/artifact/'),
      '@directive': path.resolve(__dirname, 'prelude/directive/'),
      '@elements': path.resolve(__dirname, 'prelude/elements/'),
      '@oauth': path.resolve(__dirname, 'src/oauth/'),
      '@pixel': path.resolve(__dirname, 'prelude/pixel/'),
      '@polyfill': path.resolve(__dirname, 'prelude/polyfill/'),
      '@site': path.resolve(__dirname, 'src/site/'),
      '@standard': path.resolve(__dirname, 'prelude/standard/')
    },
    extensions: ['.js', '.jsx']
  }
}
