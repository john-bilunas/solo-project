const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for transpiling ES6+ and React syntax
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    // alias: {
    //   '@components': path.resolve(__dirname, 'client/components'),
    // }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: 'index.html',
    })],
  //   new CopyPlugin({
  //     patterns: [{ from: './src/style.css' }],
  //   }),
  // ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port : 8080,
    proxy: {
      '/rentals' :{
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,

      } 
    }
  },
  devtool: 'eval-source-map',
};
