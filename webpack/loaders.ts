import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postCssAutoprefixer from "autoprefixer";
import postCssImport from "postcss-import";
import postCssPresetEnv from "postcss-preset-env";

const sourcePath = path.join(__dirname, "../src");
console.log(sourcePath);

const loaders = (NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"]) => [
  {
    exclude: /(node_modules)/,
    include: [sourcePath],
    test: /\.(j|t)sx?$/,
    use: [
      "thread-loader",
      {
        loader: "babel-loader",
        options: {
          cacheCompression: false,
          cacheDirectory: true,
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader:
          NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
      },
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
];

export default loaders;
