import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import path from "path";

import externals from "./webpack/externals";
import loaders from "./webpack/loaders";
import optimization from "./webpack/optimization";
import plugins from "./webpack/plugins";

interface Configuration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

interface Env extends __WebpackModuleApi.NodeProcess {
  NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"];
  WEBPACK_SERVE?: boolean;
}

const config = (env: Env): Configuration => {
  const isProd = env.NODE_ENV === "production";
  const sourcePath = path.join(__dirname, "src");
  const devtool = isProd ? "source-map" : "eval-cheap-module-source-map";
  const mode = isProd ? "production" : "development";
  const hints = isProd ? "warning" : false;

  const externalsRules = externals(env.NODE_ENV);
  const loadersRules = loaders(env.NODE_ENV);
  const pluginsRules = plugins(env.NODE_ENV);
  const optimizationRules = optimization(env.NODE_ENV);

  return {
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
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: pluginsRules,
    optimization: optimizationRules,
    devServer: {
      compress: true,
      historyApiFallback: true,
      hot: true,
      port: 3000,
      static: path.join(__dirname, "dist"),
    },
  };
};

export default config;
