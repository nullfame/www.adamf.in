const plugin = require("tailwindcss/plugin");
const typography = require("@tailwindcss/typography");

module.exports = {
  purge: ["./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        headline: "'Cormorant Garamond', Baskerville, serif",
        body: "'Noto Serif TC', Baskerville, serif",
      },
      gridTemplateColumns: {
        2: "3fr 5fr",
      },
      gridTemplateRows: {
        4: "auto auto 1fr auto",
      },
      textColor: {
        "light-brown": "#836953",
        brown: "#6f4e37",
        "dark-brown": "#2c1608",
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              color: "#6f4e37",
              fontFamily: "'Cormorant Garamond', Baskerville, serif",
              fontWeight: "normal",
            },
          },
        },
        xl: {
          css: {
            "h2:first-child": {
              marginTop: "2.15em",
              marginBottom: "0.6em",
            },
            "h2 + p": {
              marginTop: "0",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography,
    plugin(function ({ addBase, addUtilities }) {
      addBase({
        body: {
          background: "#fffaf0",
        },
      });

      const breakWords = {
        ".break-words": {
          "word-spacing": "100vw",
        },
      };
      addUtilities(breakWords, ["responsive"]);
    }),
  ],
};
