import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { Configuration } from "webpack";

const optimization = (NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"]) => {
  const result: Configuration["optimization"] = {};

  if (NODE_ENV === "production") {
    result.minimize = true;
    result.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        test: /\.(j|t)sx?$/,
      }),
    ];

    result.runtimeChunk = {
      name: "runtime",
    };
    result.concatenateModules = true;
    result.moduleIds = "deterministic";
    result.innerGraph = true;
    result.splitChunks = {
      cacheGroups: {
        vendor: {
          chunks: "all",
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    };
  }

  return result;
};

export default optimization;
