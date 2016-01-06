'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('build', () => {
  return gulp
    .src('./src/paginator.js')
    .pipe(concat('paginator.js'))
    .pipe(babel({
      presets: ['es2015'],
      plugins: ['transform-object-assign']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build']);