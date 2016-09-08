/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , colors = require('colors')
    , runSequence = require('run-sequence').use(gulp);

  gulp.task('build', function(cb) {
    runSequence(
      'clean',
      'sass',
      'autoprefixer',
      'minify',
      'banner',
      'copy',
      'finalize',
      function (error) {
        if (error) {
          console.log('[build]'.bold.magenta + ' There was an issue building Material Theme:\n'.bold.red + error.message);
        } else {
          console.log('[build]'.bold.magenta + ' ⚙  Finished successfully ✔'.bold.green);
        }
        cb(error);
      }
    );
  });
}());
