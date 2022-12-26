const externals = (NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"]) =>
  Object.assign(
    {},
    NODE_ENV === "production"
      ? {
          "react-dom": "ReactDOM",
          "react-redux": "ReactRedux",
          lodash: "_",
          react: "React",
          redux: "Redux",
        }
      : null
  );

export default externals;
