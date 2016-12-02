'use strict';

/*
 * > Watch
 */

import gulp from 'gulp';
import paths from '../paths';
import colors from 'colors';
import watch from 'gulp-watch';



gulp.task('watch', ['build'], () => {
  gulp.watch(paths.lib + '**', ['build']);
});
