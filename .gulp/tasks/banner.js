'use strict';

/*
 * > Banner
 */

import gulp from 'gulp';
import paths from '../paths';
import header from 'gulp-header';

gulp.task('banner', function bannerify() {
  return gulp.src(`${paths.dist}**/*.min.css`)
    .pipe(header(`${paths.banner}`))
    .pipe(gulp.dest(`${paths.dist}`))
});
