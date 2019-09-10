const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream').webpack;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpackStream.HotModuleReplacementPlugin(),
    new webpackStream.NoEmitOnErrorsPlugin(),
    new webpackStream.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new webpackStream.ProvidePlugin({
      'Immutable': 'Immutable',
      'fetch': 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd'
    })
  ],
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.join(__dirname, '../../js'),
      exclude: /node_modules/,
      use: [
        {
          loader: 'react-hot/webpack'
        },
        {
          loader: 'babel',
          options: {
            presets: [
              [
                '@babel/env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions'
                    ]
                  }, 
                  modules: "commonjs"
                }
              ],
              '@babel/react'
            ],
    
            plugins: [
              'add-module-exports',
              'react-hot-loader/babel'
            ]
          }
        }
      ],
    }]
  }
};
