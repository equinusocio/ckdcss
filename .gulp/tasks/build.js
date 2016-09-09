/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , colors = require('colors')
    , runSequence = require('run-sequence').use(gulp);

  gulp.task('build', function(cb) {
    console.log('\n[build]'.bold.magenta + ' ⚙  Start bulding \n'.bold.blue);
    runSequence(
      'clean',
      'sass',
      'autoprefixer',
      'minify',
      'banner',
      //'copy',
      'finalize',
      function (error) {
        if (error) {
          console.log('\n[build]'.bold.magenta + ' There was an issue building Material Theme:\n'.bold.red + error.message + '\n');
        } else {
          console.log('\n[build]'.bold.magenta + ' ✔  Build finished successfully \n'.bold.green);
        }
        cb(error);
      }
    );
  });
}());
