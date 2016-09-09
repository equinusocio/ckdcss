/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , gulpSass = require('gulp-sass')
    , sassGlob = require('gulp-sass-glob')
    , autprefixer = require('gulp-autoprefixer');

  gulp.task('sass', function sassify() {
    return gulp.src(`${paths.lib}ckd-css.scss`)
    .pipe(sassGlob())
    .pipe(gulpSass())
    .pipe(gulp.dest(`${paths.dist}`));
  });
}());
