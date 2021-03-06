module.exports = {
  entry: './index.js',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(eot|woff|ttf)$/, loader: "url" },
    ],
  },
};
