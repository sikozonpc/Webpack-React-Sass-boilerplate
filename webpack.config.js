/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    hot: true,
    stats: {
      modules: false,
      colors: true,
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              plugins: () => ([autoprefixer()]),
            },
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(js|ts)x?$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/fonts/[name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
}
