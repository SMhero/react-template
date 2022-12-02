module.exports = {
  extends: "stylelint-config-recommended",
  ignoreFiles: "**/*.tsx",
  rules: {
    "color-hex-length": "long",
    "number-leading-zero": "always",
    "no-descending-specificity": null,
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
    "string-quotes": "double",
  },
};
