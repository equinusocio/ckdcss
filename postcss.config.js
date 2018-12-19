module.exports = {
  plugins: {
    "postcss-normalize": {},
    "postcss-easy-import": {
      extensions: ".pcss"
    },
    "postcss-responsive-type": {},
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
