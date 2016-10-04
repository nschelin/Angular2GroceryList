const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);