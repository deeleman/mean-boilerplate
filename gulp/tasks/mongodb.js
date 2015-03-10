'use strict';

module.exports = function(gulp) {
    var childProcess = require('child_process');
    return gulp.task('mongodb', function() {
        childProcess.exec('sudo mongod', function(err, stdout, stderr) {
            if(err || stderr) {
                console.error(err || stderr); 
            }
        });
    });
};