const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
  });

  gulp.task('mincss', function() {
    return gulp.src("./*.css")
    .pipe(rename({suffix: ".min"}))
    .pipe(cleanCSS())
    .pipe(gulp.dest("app/css"));
    });