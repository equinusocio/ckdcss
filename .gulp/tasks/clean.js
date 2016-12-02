'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import paths from '../paths';
import clean from 'gulp-clean';

gulp.task('clean', function cleanDist() {
  return gulp.src(`${paths.dist}`, {'read': false})
    .pipe(clean());
});
