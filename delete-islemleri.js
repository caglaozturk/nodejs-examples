const express = require('express');
const app = express();
const port = process.env.port || 5000;
const students = [
    {id:1, name:'Ali'},
    {id:2, name:'Veli'},
    {id:3, name:'Günay'}
]

app.delete('/students/:id', (req,res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student) res.status(404, 'Girilen bilgilere uygun ogrenci  bulunmamaktadir');
    const index = students.indexOf(student);
    students.splice(index,1);
    res.send(student);
});
app.listen(port);