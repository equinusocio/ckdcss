'use strict';

/*
 * > Sass
 */

import gulp from 'gulp';
import paths from '../paths';
import gulpSass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import autprefixer from 'gulp-autoprefixer';


gulp.task('sass', function sassify() {
  return gulp.src(`${paths.lib}ckd-css.scss`)
  .pipe(sassGlob())
  .pipe(gulpSass())
  .pipe(gulp.dest(`${paths.dist}`));
});
