'use strict';

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
var fs = require('fs');
var notifications = require('./app/lib/notifications');

// Routes
fs.readdirSync(__dirname + '/app/routes').forEach(function (controller) {
    app.use('/api/' + controller.replace('.js', ''), require('./app/routes/' + controller));
});

// Public files and folders
app.use(express.static(__dirname + '/app/public'));
app.use(express.static(__dirname + '/app/views'));

// Main shell route, protected against hotlinking
app.get('/shell.html', function(req, res) {
    res.send(404);
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app/views/shell.html');
});

// Error handling
app.use(function (err, req, res, foo) {
    console.error(err);
    res.status(500).send(err.stack);
});

// Server + Sockets initialization
notifications.initialize(app.listen(port, function () {
    console.log('Server running on port', port);
}));
