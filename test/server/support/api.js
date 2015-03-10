var express = require('express');
var request = require('supertest');
var fs = require('fs');
var app = express();

// Routes
fs.readdirSync(__dirname + '/../../../app/routes').forEach(function (controller) {
    app.use('/api/' + controller.replace('.js', ''), require('../../../app/routes/' + controller));
});

module.exports = request(app);
