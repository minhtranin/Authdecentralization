module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  globals: {
    NAM_A_DEVELOPMENT_DESIGN: true,
    BO_USERNAME: true,
    BO_PASSWORD: true,
    page: true,
    CAR_VALUE_ENCRYPT_PASSWORD: true,
    GA_TRACKING_ID: true,
  },
  rules: {
    "max-len": [2, { "code": 150, "tabWidth": 4, "ignoreUrls": true }],
    "indent": [2],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore",
      },
    ],
    "global-require": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "import/prefer-default-export": 0,
    "react/static-property-placement": 0,
    "semi": ["error", "always"],
    "class-methods-use-this": 0,
    "@typescript-eslint/no-empty-interface": ["warn"],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }],
  },
  "overrides": [{
    "excludedFiles": "./build/*.js"
  }]
};
