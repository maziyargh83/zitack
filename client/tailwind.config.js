const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    colors: {
      ...colors,
      indigo: "#41385A",
      bogart: {
        900: "#0B0720",
      },
    },
  },
  variants: {},
  plugins: [],
};
