const noir_loader = require("i18n");
const { join } = require("path");
const { LOCALE } = require("./noir_env");


noir_loader.configure({
  locales: "en",
  directory: join(__dirname, "..", "NOIR_VOCAL"),
  defaultLocale: "en",
  retryInDefaultLocale: true,
  objectNotation: true,
  register: global,

  logWarnFn: function (msg) {
    console.log(msg);
  },

  logErrorFn: function (msg) {
    console.log(msg);
  },

  missingKeyFn: function (locale, value) {
    return value;
  },

  mustacheConfig: {
    tags: ["{{", "}}"],
    disable: false
  }
});

noir_loader.setLocale(LOCALE);

module.exports = noir_loader;
