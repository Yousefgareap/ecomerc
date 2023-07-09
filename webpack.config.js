const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    devMiddleware: {
      writeToDisk: true,
    },
    port: 5015,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css$/i,
        exclude: /bootstrap\.min\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,

            options: {
              esModule: false,
            },
          },

          "css-loader",
        ],
      },
      {
        test: /bootstrap\.min\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "rtlcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./images/[name][ext]",
        },
      },
      {
        test: /\.(svg|eot|woof|woff|woff2|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html",
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
    }),

    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new OptimizeCSSAssetsPlugin({}),
    new CleanWebpackPlugin(),
  ],
};
