module.exports = {
  files: './dist/ckd.css',
  server: {
    baseDir: 'test/',
    serveStaticOptions: {
      extensions: ['html', 'css']
    }
  },
  open: true,
  injectChanges: true,
  notify: true
};