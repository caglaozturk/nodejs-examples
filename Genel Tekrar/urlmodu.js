var url = require("url");
var adr = "http://localhost:8080/default.html?year=2017&month=Şubat";

var q = url.parse(adr,true);

console.log(q.host);
console.log(q.path);
console.log(q.query);
console.log(q.search);