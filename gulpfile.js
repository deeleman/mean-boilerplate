'use strict';

var gulp = require('gulp');
var errorHandler = require('./gulp/errorHandler');
var settings = require('./gulp/gulp-settings');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp/tasks').forEach(function(task) {
    require('./gulp/tasks/' + task)(gulp, errorHandler, settings);
});

gulp.task('dev', ['sass', 'js', 'html', 'server'/*, 'mongodb'*/]);