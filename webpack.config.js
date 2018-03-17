const path = require('path');

module.exports = {
  entry: './app/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.(js|jsx)$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'sass-extract-loader',
        options: {
          plugins: ['minimal'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [],
};
