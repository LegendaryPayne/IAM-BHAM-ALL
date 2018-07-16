let path = require('path')
let fs = require('fs')
let request = require('request')
let requestPromise = require('request-promise')
let dataPath = path.join(__dirname, "./popularArticles.json")
console.log(dataPath)

requestPromise('https://reddit.com/r/popular.json').then(results => {
    let array = []
    let obj = JSON.parse(results)
    obj.data.children.forEach(element => {
       let extracted = {title: element.data.title, url: element.data.url, author: element.data.author} 
       array.push(extracted)
    });
    return(array)
}).then(results => {
    fs.writeFile(dataPath, JSON.stringify(results), err => {
        if(err) console.log(err);
    });
})

