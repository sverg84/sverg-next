/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;
