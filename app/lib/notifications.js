'use strict';

var io = require('socket.io');

module.exports = {
    initialize: function(app) {
        this.sockets = io(app);
        this.sockets.on('connection', function(socket){
            console.log('[socket.io] An user has just connected');
            socket.on('disconnect', function(){
                console.log('[socket.io] An user has just disconnected');
            });
        });
    }
};