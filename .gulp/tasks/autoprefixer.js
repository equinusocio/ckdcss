'use strict';

/*
 * > Autoprefixer
 */

import gulp from 'gulp';
import paths from '../paths';
import autoprefixer from 'gulp-autoprefixer';


gulp.task('autoprefixer', function onCallback() {
  return gulp.src(`${paths.dist}*.css`)
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${paths.dist}`));
});
