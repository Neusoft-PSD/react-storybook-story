// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.

const path = require('path');
const updateConfig = require('./user/modify_webpack_config');

const config = {
  module: {
    loaders: [
      {
        test:/\.js[x]?$/,
        loader: 'babel',
        includes: [
          path.resolve(__dirname, '../')
        ],
        exclude: path.resolve(__dirname, '../node_modules/'),
        query: {
          presets: ['react', 'es2015-webpack', 'stage-0'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};

updateConfig(config);
module.exports = config;
