'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/<DATABASE_NAME>', function() {
    console.log('mongodb connected. We\'re in!');
});

module.exports = mongoose;
