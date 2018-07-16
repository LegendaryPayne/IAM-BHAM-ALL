let path = require('path')
let fs = require('fs')
let request = require('request')
let dataPath = path.join(__dirname, "../chirps.json")

let chirps = [
    {
        id:1,
        message: 'test1',
        date: new Date
    },
    {
        id:2,
        message: 'test2',
        date: new Date
    },
    {
        id:3,
        message: 'test3',
        date: new Date
    },
    {
        id:4,
        message: 'test4',
        date: new Date
    },
    {
        id:5,
        message: 'test5',
        date: new Date
    }
]
let json = JSON.stringify(chirps);

fs.writeFile(dataPath, json, err => {
    if(err) console.log(err);
});

fs.readFile(dataPath,'utf-8', (err, data)=> {
    if(err) console.log(err);
    console.log(JSON.parse(data))
})