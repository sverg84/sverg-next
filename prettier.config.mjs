/** @type {import("prettier").Config} */
const config = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
  tailwindConfig: "./tailwind.config.ts",
};

export default config;
