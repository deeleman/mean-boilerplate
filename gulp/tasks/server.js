'use strict';

module.exports = function (gulp, errorHandler, settings) { 
    var nodemon = require('gulp-nodemon');
    var config = settings.server;
    
    gulp.task('server', function(){
        nodemon(config.nodemon);
    });
};