const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

connection.connect(function(err){
    if(err) throw err;
    var sorgu = "DELETE FROM e-commerce.musteriler WHERE id=17";
    connection.query(sorgu, function(err){console.log('silindi')});
})