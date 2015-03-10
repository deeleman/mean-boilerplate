'use strict';

module.exports = function (gulp, errorHandler, settings) {
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var sourcemaps = require('gulp-sourcemaps');
    var config = settings.js;

    gulp.task('js:vendor', function () {
        gulp.src(config.vendor.src)
            .pipe(concat(config.vendor.filename))
            .on('error', errorHandler)
            .pipe(uglify())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('js:src', function () {
        gulp.src(config.app.src)
            .pipe(sourcemaps.init())
            .pipe(concat(config.app.filename))
            .on('error', errorHandler)
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('js:watch', ['js:src'], function () {
        gulp.watch(config.app.src, ['js:src'])
            .on('change', function (event) {
                console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
    });

    gulp.task('js', ['js:vendor', 'js:watch']);
};