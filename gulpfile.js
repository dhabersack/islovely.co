var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['css'], function () {
  gulp.watch('sass/**/*.scss', ['css']);
});

gulp.task('css', function () {
  gulp.src('sass/**/*.scss')
      .pipe(sass({
        // outputStyle: 'compressed'
      }).on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('_site'));
});
