var app   = require('express')();
var http  = require('http').Server(app);
var io    = require('socket.io')(http);
var mysql = require('mysql');
var con = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: ""
});
con.connect(function (err) {
    if (err) console.log(err);
})
io.on('connection', function (socket) {
    console.log('connection');
    socket.on('womandeveloper', function (from, msg) {
        console.log('womandeveloper', from, ' saying ', msg);
        var sql = "INSERT INTO messages (msg) VALUES ('" + msg + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
});
http.listen(5000, function () {
    console.log('listening on *:5000');
});