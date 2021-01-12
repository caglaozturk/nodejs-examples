const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err){
    if(err) throw err;
    var sorgu = "CREATE DATABASE e-commerce";
    connection.query(sorgu,function(err){
        if(err) throw err;
        console.log("Database Olusturuldu");
    });
});

/*
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "CREATE TABLE e-commerce.musteriler (id int AUTO_INCREMENT PRIMARY KEY,name varchar(30),adres varchar(30))";
    connection.query(sorgu,function(err){
        if(err) throw err;
        console.log("Tablo Olusturuldu");
    });
});
*/
/*
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "ALTER TABLE e-commerce.musteriler add column tcno char(11)";
    connection.query(sorgu, function(err){
        if(err) throw err;
        console.log("Sutun eklendi");
    })
})
*/