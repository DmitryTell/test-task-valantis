const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@api": "./src/api",
          "@components": "./src/components",
          "@helpers": "./src/helpers",
          "@interface": "./src/interface",
          "@layout": "./src/layout",
          "page": "./src/page",
          "@shared": "./src/shared",
          "@style": "./src/style",
        },
      },
    },
  ],
};