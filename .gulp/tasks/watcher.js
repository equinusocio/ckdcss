/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , colors = require('colors')
    , watch = require('gulp-watch');

  gulp.task('watch', ['build'], function() {
    gulp.watch(paths.lib + '**', ['build']);
  });
}());
