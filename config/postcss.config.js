const BROWSERS_LIST = ['last 1 versions', 'not ie <= 11', 'not op_mini all', 'not dead', '> 0.5%'];

module.exports = () => ({
  plugins: {
    'stylelint': {},
    'postcss-easy-import': {
      prefix: '_',
      extensions: '.pcss',
      plugins: [require('stylelint')()]
    },
    'postcss-preset-env': {
      browsers: BROWSERS_LIST,
      stage: 0,
      autoprefixer: {
        grid: true
      }
    },
    'cssnano': { preset: 'advanced' },
    'postcss-reporter': { clearReportedMessages: true }
  }
})