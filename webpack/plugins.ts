import CompressionPlugin, { ZlibOptions } from "compression-webpack-plugin";
import dotenv from "dotenv";
import DotenvWebpack from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import path from "path";

type Plugins =
  | HtmlWebpackPlugin
  | CompressionPlugin<ZlibOptions>
  | DotenvWebpack
  | BundleAnalyzerPlugin;

const sourcePath = path.join(__dirname, "..", "src");
const envKeys = dotenv.config().parsed;

const plugins = (NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"]) => {
  const result: Plugins[] = [
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React Template",
      template: path.join(__dirname, "..", "index.html"),
      favicon: path.join(sourcePath, "assets/favicon.ico"),
    }),
    // @NOTE: inject env variables for usage in project code
    new DefinePlugin({
      NODE_ENV,
      ...envKeys,
    }),
  ];

  if (NODE_ENV === "development") {
    // @NOTE: parse .env file from root dir and add variables
    result.push(new DotenvWebpack());
  }

  if (NODE_ENV === "production") {
    result.push(
      new CompressionPlugin({
        algorithm: "gzip",
        minRatio: 0.8,
        threshold: 10240,
      }),
      new MiniCssExtractPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    );
  }

  return result;
};

console.log("Plugins has started 🛠");

export default plugins;
