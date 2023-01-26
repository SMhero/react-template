import CompressionPlugin, { ZlibOptions } from "compression-webpack-plugin";
import DotenvWebpack from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import path from "path";

type Plugins =
  | HtmlWebpackPlugin
  | CompressionPlugin<ZlibOptions>
  | DotenvWebpack
  | BundleAnalyzerPlugin;

const sourcePath = path.join(__dirname, "..", "src");

const plugins = (NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"]) => {
  const result: Plugins[] = [
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React Template",
      template: path.join(__dirname, "..", "index.html"),
      favicon: path.join(sourcePath, "assets/favicon.ico"),
    }),
    // new BundleAnalyzerPlugin()
  ];

  if (NODE_ENV === "development") {
    result.push(new DotenvWebpack());
  }

  if (NODE_ENV === "production") {
    result.push(
      new CompressionPlugin({
        algorithm: "gzip",
        minRatio: 0.8,
        threshold: 10240,
      })
    );
  }

  return result;
};

console.log("Plugins has started 🛠");

export default plugins;
