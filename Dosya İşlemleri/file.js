var module = require('./module');

var file_path = "file.txt" ;

module(file_path, function (hata, data) {
    if (hata) {
        console.log("Bir hata oluştu.");
        return;
    }    
    console.log(data);
    
    var satirlar = data.toString().split("\n");
    console.log("Satır Sayısı: "+satirlar.length);
});