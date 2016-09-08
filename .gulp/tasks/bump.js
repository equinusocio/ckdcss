/*global require*/
(function gulpTask() {
  'use strict';

  const gulp = require('gulp')
    , paths = require('../paths')
    , runSequence = require('run-sequence')
    , colors = require('colors')
    , argv = require('yargs').argv
    , bump = require('gulp-bump')
    , gulpif = require('gulp-if')
    , fs = require('fs');

  gulp.task('bump', function(cb) {
    runSequence(
      'bump-pkg-version',
      function (error) {
        if (error) {
          console.log('[bump]'.bold.magenta + ' There was an issue bumping version:\n'.bold.red + error.message);
        } else {
          console.log('[bump]'.bold.magenta + ' Finished successfully'.bold.green);
        }
        cb(error);
      }
    );
  });

  gulp.task('bump-pkg-version', function() {
    return gulp.src(['./bower.json', './package.json'])
      .pipe(gulpif( (Object.keys(argv).length === 2), bump() ))
      .pipe(gulpif(argv.patch, bump()))
      .pipe(gulpif(argv.minor, bump({ type: 'minor' })))
      .pipe(gulpif(argv.major, bump({ type: 'major' })))
      .pipe(gulp.dest('./'));
  });
}());
