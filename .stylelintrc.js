module.exports = {
  extends: ["stylelint-config-standard"],
  rules: {
    "color-hex-length": "long",
    "import-notation": "string",
    "no-descending-specificity": null,
    "property-no-vendor-prefix": true,
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
  },
};
