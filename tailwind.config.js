const plugin = require("tailwindcss/plugin");
const typography = require("@tailwindcss/typography");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        2: "3fr 5fr",
      },
      gridTemplateRows: {
        4: "auto auto 1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(function ({ addBase }) {
      addBase({
        body: {
          background: "#fffaf0",
        },
      });
    }),
  ],
};
