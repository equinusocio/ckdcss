'use strict';

/*
 * > Copy
 */

import gulp from 'gulp';
import paths from '../paths';

gulp.task('copy', function copySrc() {
  return gulp.src([`${paths.scss}*`])
  .pipe(gulp.dest(`${paths.dist}scss`));
});
