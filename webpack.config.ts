import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import path from "path";

import externals from "./webpack/externals";
import loaders from "./webpack/loaders";
import plugins from "./webpack/plugins";

interface Configuration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

const isProd = process.env.NODE_ENV === "production";
const sourcePath = path.join(__dirname, "src");
const devtool = isProd ? "source-map" : "eval-cheap-module-source-map";
const mode = isProd ? "production" : "development";
const hints = isProd ? "warning" : false;

const externalsRules = externals(process.env.NODE_ENV);
const loadersRules = loaders(process.env.NODE_ENV);
const pluginsRules = plugins(process.env.NODE_ENV);

const config = (): Configuration => ({
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
  externals: externalsRules,
  module: {
    rules: loadersRules,
  },
  output: {
    clean: true,
    filename: "js/chunk-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: pluginsRules,
  optimization: {
    minimize: true,
    minimizer: isProd
      ? [
          new CssMinimizerPlugin(),
          new TerserPlugin({
            test: /\.(j|t)sx?$/,
          }),
        ]
      : [],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
    static: path.join(__dirname, "dist"),
  },
});

export default config;
