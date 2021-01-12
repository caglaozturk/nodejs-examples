const express = require('express');
const app = express();
const port = process.env.port || 5000;

const students = [
    {id:1, name:'Ali'},
    {id:2, name:'Veli'},
    {id:3, name:'Günay'}
]

app.use(express.json());

app.post('/students', (req,res) => {
    const student = {id: students.length+1, name:req.body.name};
    students.push(student);
    res.send(student);
});

app.listen(port);