const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./index.js"],
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    headers: {
      "X-Content-Type-Options": "nosniff",
    },
    historyApiFallback: false,
    open: false,
    compress: true,
    port: 8080,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Injects <script> tag automatically
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/files/data.json", to: "data.json" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // Transpile ES6+ to ES5
          },
        },
      },
      {
        test: /\.(png|jpe?g|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext][query]",
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Resolves CSS imports
          "postcss-loader", // Applies PostCSS (including Tailwind CSS)
        ],
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
};


