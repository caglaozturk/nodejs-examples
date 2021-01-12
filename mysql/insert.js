const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});
/*
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "INSERT INTO e-commerce.musteriler (id,name,adres,tcno) VALUES (1,'Seda','Istanbul',123)";
    connection.query(sorgu, function(err){
        if(err) throw err;
        console.log("Veriler eklendi");
    });
})
*/
//Çoklu satır ekleme
connection.connect(function(err){
    if(err) throw err;
    var sorgu = "INSERT INTO e-commerce.musteriler (name,adres) VALUES ?";
    var values = [
        ['Ali','Zonguldak'],
        ['Veli','Giresun'],
        ['Akin','Samsun']
    ]
    connection.query(sorgu,[values],function(err){
        if(err)   throw err;
        console.log("Verileri ekledim");
    })
});