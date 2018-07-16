const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
let fs = require('fs')
let dataPath = path.join(__dirname, "../names.json")
let app = express();

app.use(bodyParser.urlencoded({extended: false}))



app.post('/name', (req, res, next) =>{
    fullname = {firstname: req.body.firstname, lastname: req.body.lastname}
    fs.writeFileSync(dataPath, JSON.stringify(fullname))
    res.send()
})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);