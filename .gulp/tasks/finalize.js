'use strict';

/*
 * > Copy
 */

import gulp from 'gulp';
import paths from '../paths';
import clean from 'gulp-clean';

gulp.task('finalize', function cleanDist() {
  return gulp.src([`${paths.dist}*.css`, `!${paths.dist}/*.min.css`], {'read': false})
    .pipe(clean());
});
