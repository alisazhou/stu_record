module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    resolve: {
      extensions: [ '', 'js', 'jsx' ]
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel-loader' ],
      },
    ],
  },
};
