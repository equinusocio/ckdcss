module.exports = {
  syntax: require("postcss-syntax"),
  plugins: {
    stylelint: {
      options: {
        configFile: "./.stylelintrc"
      }
    },
    "postcss-easy-import": {
      extensions: ".pcss"
    },
    "postcss-preset-env": {
      stage: 0,
      autoprefixer: {
        grid: true
      }
    },
    cssnano: { preset: "advanced" },
    "postcss-reporter": { clearReportedMessages: true }
  }
};
