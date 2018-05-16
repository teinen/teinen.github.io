const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: {
      style: path.join(__dirname, "/css/style.scss"),
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.css"
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          })
        },
        {
            test: /\.(woff|eot|ttf|svg)$/,
            loader: "file-loader?name=./fonts/[name].[ext]"
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("bundle.css"),
    ],
  },
];