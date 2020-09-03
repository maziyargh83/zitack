const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    colors: {
      ...colors,
      indigo: "#41385A",
      bogart: {
        500: "#413A6F",
        600: "#2A2C5C",
        900: "#0B0720",
      },
    },
  },
  variants: {},
  plugins: [],
};
