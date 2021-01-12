var io = require('socket.io-client');
var socket = io.connect('http://localhost:5000', { reconnect: true });

socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.emit('womandeveloper', 'me', 'Woman Developer');