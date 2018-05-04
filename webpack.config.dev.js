const path = require('path');
const webpack = require('webpack');

const mod = `${__dirname.includes(process.cwd()) ? process.cwd() : __dirname}/node_modules/`;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
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
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg|jpeg|svg|ttg|mp4)$/i,
      loader: 'file-loader',
    }],
  },
};
