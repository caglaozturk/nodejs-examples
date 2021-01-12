const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});
/*
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "select * from e-commerce.musteriler";
    connection.query(sorgu, function(err,data,fields){
        console.log(data);
        console.log(data[5].adres);
        console.log(fields);
    })
})
*/
/*
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "select * from e-commerce.musteriler where name LIKE 'A%'";
    connection.query(sorgu, function(err,data,fields){
        console.log(data);
    })
})
*/
/*
connection.connect(function(err){
    if(err) throw err;
    var isim = 'Ali';
    var adres = 'Zonguldak';
    var sorgu = "SELECT * FROM e-commerce.musteriler WHERE name=? and adres=? ORDER BY id DESC";
    connection.query(sorgu,[isim,adres],function(err,data){
        if(err) throw err;
        console.log(data);
    })
})
*/
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "select * from e-commerce.musteriler LIMIT 3 OFFSET 3";
    connection.query(sorgu, function(err,data){
        console.log(data);
    })
})
