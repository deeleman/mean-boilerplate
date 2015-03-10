'use strict';

module.exports = function (gulp, errorHandler, settings) {
    var minifyHTML = require('gulp-minify-html');
    var config = settings.html;

    gulp.task('html:minify', function () {
        gulp.src(config.src)
            .pipe(minifyHTML(config))
            .pipe(gulp.dest(config.dest));
    });

    gulp.task('html:watch', ['html:minify'], function () {
        gulp.watch(config.src, ['html:minify'])
            .on('change', function (event) {
                console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
    });

    gulp.task('html', ['html:watch']);
};