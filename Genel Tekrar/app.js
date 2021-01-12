
const http = require('http');
http.createServer((req,res) => res.end('Hello World')).listen(5000);


const http = require('http');
const modulum = require('./modulum');
http.createServer((req,res) => res.end("Anlik tarih bilgisi :"+modulum.anlik_tarih())).listen(5000);


const http = require('http');
http.createServer(
    (req,res) => { 
        if(req.url=='/') res.write('Giris Sayfasindasin');
        res.end();
    }
).listen(5000);


const http = require('http');
http.createServer((req,res) => {
    res.writeHead("200",{"Content-Type":"text/html"});
    res.write("<h1>Hello world</h1>");
    if(req.url == '/') res.write("Giris sayfasindasin");
    else if(req.url == '/login') res.write("Login sayfasindasin");
    else res.write(req.url + " sayfasindasin");
    res.end();
}).listen(5000);


const http = require('http');
const url = require('url');
var ornek_adres = "http://localhost:5000/login?name=veli&lastname=kaya&country=tr";
http.createServer((req,res) => {
    var url_parse = url.parse(req.url,true);
    console.log(url_parse);
    var qdata = url_parse.query;
    console.log(qdata.name);
    console.log(qdata.lastname);
    console.log(qdata.country);
}).listen(5000);

