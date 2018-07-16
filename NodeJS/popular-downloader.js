let path = require('path')
let fs = require('fs')
let request = require('request')
let rp = require('request-promise')
let dataPath = path.join(__dirname, "./downloads/")
let dataPath2 = path.join(__dirname, "./downloads/testing.json")

console.log(dataPath)
function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|gifv|)$/) != null);
}

rp('https://reddit.com/r/popular.json').then(results => {
    let array = []
    let obj = JSON.parse(results)
    obj.data.children.forEach(element => {
       let extracted = {title: element.data.title, url: element.data.url, author: element.data.author} 
       array.push(extracted)
    });
    return(array)
}).then(results => {

    results.forEach(element => {
        if(checkURL(element.url)) {
        console.log(element.url) 
        let myURL = new URL(element.url)
        console.log(element.url.split('/').pop())
        if (element.url.split('/').pop() === '.gifv') {
            rp(element.url).then(results)
        }
        rp(element.url).pipe(fs.createWriteStream(path.join(dataPath, element.url.split('/').pop())))

        }
        });
        
        fs.writeFile(dataPath2, JSON.stringify(results), err => {
            if(err) console.log(err);
        });

        })
