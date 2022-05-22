const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: "ChatRoom",
    themeColor: "#ff5e3a",
    manifestOptions: {
      short_name: "Chat",
    },
  },
});
