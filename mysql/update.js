const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(function(err){
    if(err) throw err;
    var values = Array('Ayse',13);
    var sorgu = "UPDATE e-commerce.musteriler SET name=? WHERE id=?";
    connection.query(sorgu,values,function(err){
        if(err) throw err;
        console.log("guncellendi");
    })
})