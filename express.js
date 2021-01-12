var express = require('express');
var app = express();
var port = process.env.port || 5000;

app.get('/',function(req,res){
    res.send('Hello World')
});

app.get('/api/urunler',(req,res)=>{
    res.send('urunleri listele');
});

app.get('/api/urunler/:year/:month',(req,res)=>{
    console.log("urunler");
    console.log(req.query);
    //res.send(`${req.params.year}-${req.params.month}`);
    res.send(req.params);
});

console.log(`Sunucu ${port} portunda calisiyor`)

app.listen(5000);