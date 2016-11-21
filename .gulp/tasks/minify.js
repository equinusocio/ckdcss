'use strict';

/*
 * > Minify
 */

import gulp from 'gulp';
import paths from '../paths';
import minify from 'gulp-clean-css';
import rename from 'gulp-rename';


gulp.task('minify', function onMinifyCss() {
  return gulp.src(`${paths.dist}**/*.css`)
    .pipe(minify())
    .pipe(rename(function renameThem(path) {

      if (path.basename !== 'ckd-css') {
        path.dirname = path.basename;
      }

      path.basename += ".min";
    }))
    .pipe(gulp.dest(`${paths.dist}`));
});
