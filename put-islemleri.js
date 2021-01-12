const express = require('express');
const Joi = require('@hapi/joi');
const app = express();
const port = process.env.port || 5000;
app.use(express.json() );
const students = Array(
    {id:1, name:'Ali'},
    {id:2, name:'Gülay'},
    {id:3, name:'Ferit'}
);

app.put('/students/:id', (req,res) => {
    const student = students.find(student => student.id === parseInt(req.params.id));
    if(!student)    res.send(404, "Girilen id'ye sahip eleman yoktur");
    const schema = Joi.object({
        isim_kontrol : Joi.string().min(3).required()
    });
    const result = schema.validate({isim_kontrol: req.body.name});
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    } 
    student.name = req.body.name;
    res.send(student);
});
app.listen(port);