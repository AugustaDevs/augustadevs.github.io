const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const mod = `${__dirname.includes(process.cwd()) ? process.cwd() : __dirname}/node_modules/`;

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [`${mod}babel-preset-env`, 'react'],
        },
      },
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [`${mod}babel-preset-env`],
        },
      },
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
};
