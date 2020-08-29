const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    colors: {
      ...colors,
      indigo: "#41385A",
      bogart: {
        600: "#2A2C5C",
        900: "#0B0720",
      },
    },
  },
  variants: {},
  plugins: [],
};
