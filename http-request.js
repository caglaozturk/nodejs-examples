const http = require('http');

http.createServer(function(req,res){
    if(req.url == '/')  res.end('Index sayfasindasin');
    else if(req.url == '/api/urunler')   res.end(JSON.parse({0:1,1:2,2:3}));
    else res.end('404 Not Found');
}).listen(5000);