//Http client
var http = require("http")

http.get('http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22', function (response) {
    response.setEncoding('utf8')
    var sonuc = '';
    response.on('data', function (data) {
        sonuc = sonuc + data;
    })
    response.on('end', function () {
        var jsonSonuc = JSON.parse(sonuc);
        console.log(jsonSonuc.name)
    })
    response.on('error', function (hata) {
        console.log('Yüklenme sırasında bir hata oluştu:' + hata.message)
    })
})
.on('error', function (hata) {
        console.log("Açılma sırasında bir hata oluştu." + hata.message)
})