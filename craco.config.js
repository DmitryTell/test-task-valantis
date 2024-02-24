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
          "@interface": "./src/interface",
          "@layout": "./src/layout",
          "@shared": "./src/shared",
          "@style": "./src/style",
        },
      },
    },
  ],
};