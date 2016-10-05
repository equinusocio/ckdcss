/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , conventionalChangelog = require('gulp-conventional-changelog');

  gulp.task('changelog', function () {
    return gulp.src('CHANGELOG.md')
      .pipe(conventionalChangelog({
        // conventional-changelog options go here
        preset: 'angular',
        releaseCount: 0
      }))
      .pipe(gulp.dest('./'));
  });
}());


