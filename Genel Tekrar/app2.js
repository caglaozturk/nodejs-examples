var http = require('http');
var fs = require('fs');
/*
Sadece oluştururur
fs.open("newfile.txt","w",function(){
    console.log("olusturuldu");
});
*/
//Yoksa oluşturup yazar
/*
fs.writeFile("newfile2.txt","Hey naber ya?",function(err){
    console.log("değistiirldi");
});
*/
http.createServer(function(req,res){
    fs.writeFile("newfile2.txt","Hey naber ya?",function(err){
        console.log("olusturuldu");
    });
    fs.readFile("newfile2.txt",function(err,data){
        res.write(data);
    });
    fs.appendFile("newfile2.txt","Metin",function(err){
        if(err) throw err ;
        console.log("Kaydedildi");
    });
    fs.writeFile("newfile2.txt","Yeni Metin",function(err){
        console.log("degistirildi");
    });
    fs.readFile("page.html",function(err,data){
        res.write(data);
    });
    fs.unlink("newfile2.txt",function(err){});
    res.end();
}).listen(5000);
