const express = require('express');
const Joi = require('@hapi/joi');
const { func } = require('@hapi/joi');
const app = express();
const port = process.env.port || 5000;
app.use(express.json());
const students = [
    {id:1, name:'Ali'},
    {id:2, name:'Veli'},
    {id:3, name:'Günay'}
]

app.post('/students', (req,res) => {
    const schema = Joi.object({
        isim_kontrol : Joi.string().min(3).required(),
        //sifre_kontrol : Joi.number().min(10).required()
    });
    const result = schema.validate({isim_kontrol: req.body.name});
    if(result.error){    
        res.status(400).send(result.error.details[0].message);
        return;
    }
    console.log(result);

    const student = {id: students.length+1, name: req.body.name};
    students.push(students.length+1, req.body.name);
    res.send(student);
});
app.listen(port);

