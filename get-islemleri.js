const express = require('express');
const app = express();
const port = process.env.port || 5000;

let students = Array(
    {id:1, name:'Kaan'},
    {id:2, name:'Ali'},
    {id:3, name:'Veli'},
    {id:4, name:'Demir'}
);

app.get('/students', (req,res) => {
    students.find(function(student){
        if(student.id == 3) 
        console.log(student);
    });
    res.send(students);
});

app.get('/students/:id',(req,res)=>{
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student)    res.status(404, "Girdiğiniz Id'ye sahip öğrenci bulunamadı");
    res.send(student);
});

app.listen(port);