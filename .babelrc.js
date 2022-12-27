module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV === "production");

  return {
    plugins: [
      ["@babel/plugin-proposal-class-properties"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
    env: {
      development: {
        plugins: [
          ["@babel/plugin-transform-react-display-name"],
          [
            "@babel/plugin-transform-runtime",
            {
              regenerator: true,
            },
          ],
        ],
        presets: [
          [
            "@babel/env",
            {
              modules: false,
            },
          ],
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
          [
            "@babel/typescript",
            {
              allExtensions: true,
              isTSX: true,
            },
          ],
        ],
      },
      production: {
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: 3.6,
              targets: {
                browsers: [
                  "last 2 versions",
                  "> 0.2%",
                  "not dead",
                  "not ie <= 11",
                ],
              },
              useBuiltIns: "entry",
            },
          ],
          [
            "@babel/preset-react",
            {
              runtime: "automatic",
            },
          ],
          [
            "@babel/typescript",
            {
              allExtensions: true,
              isTSX: true,
            },
          ],
        ],
      },
    },
  };
};
