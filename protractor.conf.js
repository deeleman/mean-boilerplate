'use strict';

var testPort = 3001;

exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'test/e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:' + testPort,

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: false
    },

    onPrepare: function() {
        process.env.PORT = testPort;
        require('./server');
    }
};
