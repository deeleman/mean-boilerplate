'use strict';

module.exports = function (gulp, errorHandler, settings) {
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var sourcemaps = require('gulp-sourcemaps');
    var config = settings.sass;

    gulp.task('sass:app', function () {
        gulp.src(config.src)
            .pipe(sourcemaps.init())
            .pipe(sass(config.options))
            .on('error', errorHandler)
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('sass:watch', ['sass:app'], function () {
        gulp.watch(config.src, ['sass:app'])
            .on('change', function (event) {
                console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
    });

    gulp.task('sass', ['sass:watch']);
};