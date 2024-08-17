/** @type {import("prettier").Config} */
const config = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  arrowParens: "avoid",
  tailwindConfig: "./tailwind.config.mjs",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
