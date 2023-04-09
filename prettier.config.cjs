/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
};

module.exports = config;
