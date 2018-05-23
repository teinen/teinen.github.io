const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'production',
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, './public/')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { url: false }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('autoprefixer')({
                      browsers: ['last 2 versions']
                    })
                  ]
                }
              },
              'sass-loader']
          })
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: ['last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpeg|jpg)$/,
          loader: 'file-loader'
        },
        {
          test: /\.(woff|eot|ttf|svg)$/,
          loader: 'file-loader'
        }
      ]
    },
    devtool: 'source-map',
    devServer: {
      host: '0.0.0.0',
      port: 8080
    },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      new VueLoaderPlugin()
    ],
  },
];