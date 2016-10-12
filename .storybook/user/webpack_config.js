const path = require('path');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'raw', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'],
          include: path.resolve(__dirname, '../'),
        },
      ],
    },
  };
};
