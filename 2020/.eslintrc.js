const isProd = process.env.NODE_ENV === "production";

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["json", "prettier"],
  rules: {
    // Only allow debugger in development
    // "no-debugger": isProd ? "error" : "off",
    // Only allow `console.log` in development
    // "no-console": isProd ? ["error", { allow: ["warn", "error"] }] : "off",

    // "no-param-reassign": [2, { props: false }],
    "import/prefer-default-export": 0,
    "prettier/prettier": "error",
  },
};
