import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import path from "path";

interface Configuration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

const sourcePath = path.join(__dirname, "src");
const devtool =
  process.env.NODE === "development"
    ? "source-map"
    : "eval-cheap-module-source-map";
const mode =
  process.env.NODE_ENV !== "production" ? "development" : "production";
const hints = process.env.NODE_ENV !== "production" ? false : "warning";

const config: Configuration = {
  devtool,
  entry: path.join(sourcePath, "index"),
  mode,
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [sourcePath, "node_modules"],
  },
  performance: {
    hints,
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        include: [sourcePath],
        test: /\.(j|t)sx?$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    clean: true,
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      favicon: path.join(sourcePath, "/assets/favicon.ico"),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    static: path.join(__dirname, "dist"),
  },
};

export default config;
