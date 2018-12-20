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
      },
      insertBefore: {
        "nesting-rules": require("postcss-mixins")()
      }
    },
    cssnano: {
      preset: [
        "advanced",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    },
    "postcss-reporter": { clearReportedMessages: true }
  }
};
