module.exports = {
  files: '/dist/ckd.css',
  server: {
    baseDir: 'test/',
    index: "index.html",
    serveStaticOptions: {
      extensions: ['html', 'css']
    }
  },
  open: true,
  injectChanges: true,
  notify: true
};