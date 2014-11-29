module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: './dist/js/calendar.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "jsx-loader"
      },
      {
        test: /\.js$/,
        loader: 'jstransform-loader'
      },
    ]
  },
};
