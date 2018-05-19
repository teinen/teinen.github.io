const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
              {loader: "css-loader", options: {url: false}},
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
  },
];