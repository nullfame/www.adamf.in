// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Adam Finlayson",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: "**/*.md",
        typeName: "Content",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./meta-content",
        path: "*.yaml",
        typeName: "MetaContent",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      // * These are the default options.
      // options: {
      //   tailwindConfig: "./tailwind.config.js",
      //   presetEnvConfig: {},
      //   shouldImport: false,
      //   shouldTimeTravel: false,
      // },
    },
  ],
  templates: {
    Content: "/:path",
  },
};
