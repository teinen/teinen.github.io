const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = [
  {
    mode: "production",
    entry: "./src/js/app.js",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "./public/")
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: { url: false }
              },
              {
                loader: "postcss-loader",
                options: {
                  plugins: [
                    require('autoprefixer')({
                      browsers: ["last 2 versions"]
                    })
                  ]
                }
              },
              "sass-loader"]
          })
        },
        {
          test: /\.(png|jpeg|jpg)$/,
          loader: "file-loader"
        },
        {
          test: /\.(woff|eot|ttf|svg)$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("bundle.css"),
    ],
    devServer: {
      host: "0.0.0.0",
      port: 8080,
      disableHostCheck: true
    }
  },
];