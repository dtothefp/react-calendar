var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var insert = require('gulp-insert');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', function () {
  var stream = gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        './node_modules/sass-list-maps/'
      ]
    }))
    .pipe(sourcemaps.write('./', {
      sourceRoot: '../../src'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));

  return stream;
});

gulp.task('autoprefix', ['sass'], function () {
  return gulp.src(config.dest + '/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
    .pipe(insert.append('\n\n/*# sourceMappingURL=app.css.map */'))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});