'use strict';

module.exports = {
    js: {
        vendor: {
            src: [
                './node_modules/angular/angular.js',
                './node_modules/angular-ui-router/release/angular-ui-router.js',
                './node_modules/angular-resource/angular-resource.js',
                './node_modules/lodash/lodash.js',
                './node_modules/socket.io-client/socket.io.js'
            ],
            filename: 'vendor.js'
        },
        app: {
            src: [
                './src/js/*.js',
                './src/js/**/*.js'
            ],
            filename: 'app.js'
        },
        dest: './app/public/js'
    },
    sass: {
        src: './src/scss/*.scss',
        dest: './app/public/css',
        options: {
            outputStyle: 'compressed',
            sourceComments: false
        }
    },
    html: {
        src: './src/html/**/*.html',
        dest: './app/views',
        options: {
            comments: true,
            conditionals: true
        }
    },
    server: {
        nodemon: {
            script: 'server.js',
            ext: 'js',
            ignore: ['gulp*', 'public*', 'src*', 'test*']
        }
    }
};
