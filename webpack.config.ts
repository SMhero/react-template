import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import postCssAutoprefixer from "autoprefixer";
import postCssImport from "postcss-import";
import postCssPresetEnv from "postcss-preset-env";

interface Configuration extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

const isProd = process.env.NODE_ENV === "production";
const sourcePath = path.join(__dirname, "src");
const devtool = isProd ? "eval-cheap-module-source-map" : "source-map";
const mode = isProd ? "production" : "development";
const hints = isProd ? "warning" : false;

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
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isProd
            ? { loader: MiniCssExtractPlugin.loader }
            : { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: "camelCase",
                mode: "local",
                localIdentName: "[path][name]__[local]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  postCssAutoprefixer(),
                  postCssImport({ path: sourcePath }),
                  postCssPresetEnv({
                    features: {
                      "nesting-rules": true,
                    },
                  }),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      title: "React Template",
      template: path.join(__dirname, "index.html"),
      favicon: path.join(sourcePath, "/assets/favicon.ico"),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: isProd ? [new CssMinimizerPlugin()] : [],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3000,
    static: path.join(__dirname, "dist"),
  },
};

export default config;
