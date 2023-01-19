export default new Proxy(
  {},
  {
    get: (_, key: string) => {
      if (key === "__esModule") {
        return false;
      }

      return key.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
    },
  }
);
