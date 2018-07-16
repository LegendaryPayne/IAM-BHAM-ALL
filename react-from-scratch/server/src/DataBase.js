const mysql = require('mysql')

function chacterCheck(id, element) {
    let characters = element.split("")
        if(characters[0]=== '@') {
            console.log(element)
            let untagged = characters.shift()
            console.log(characters.join(""))
            sendingtoDB(id ,characters.join(""))
}
    return
}

let connection = mysql.createConnection(
    {
    host: 'localhost',
    database: 'ChirperDataBase',
    user: 'Testing1',
    password: 'testing123'
    }
)

let sendingtoDB = (id, message) => {
    connection.query(`CALL CheckForUser(${JSON.stringify(message)})`, (err, results, fields) => {
        if(err) {
            console.log(err);
        }
        console.log(results[0][0])
        if(results[0][0] !== undefined) {
            let testing = results[0][0].userid
            console.log(id , testing)
                        connection.query(`CALL AddtoMentions(${id}, ${testing})`, (err, results, fields) => {
                if(err) {
                    console.log(err);
                    return
                }
                console.log('Added to Mentions')
            })
        }
    })
}

let getChirpsFromDB = () => {
    return new Promise((resolve, reject) => {
    connection.query('CALL getchirps(1)', (err, results, fields) => {
        if(err) {
            reject(err);
        }
        let testing = results[0].map(element => Object.values(element))
        resolve(testing);
    })        
    })


}

let getAChirpFromDB = (id) => {
    return new Promise((resolve, reject) => {
    connection.query(`CALL getachirps(${id})`, (err, results, fields) => {
        if(err) {
            reject(err);
        }
        let testing = []
        console.log(...results[0]);
        results[0].forEach(element => testing.push(Object.values(element)))
        resolve(testing)
    });        
    })

}
    
let postAChirpFromDB = (message) => {
    return new Promise((resolve, reject) => {
    connection.query(`CALL addachirp(${JSON.stringify(message)})`, (err, results, fields) => {
        if(err) {
            reject(err);
        }
        let id = results[0][0].chirpid
        
        checkAChirpForDB(id, message)
        resolve()        
    });
    })

}
    
let updateAChirpFromDB = (id,message) => {
    return new Promise((resolve, reject) => {
    connection.query(`CALL updateachirp(${id},${JSON.stringify(message)})`, (err, results, fields) => {
        if(err) {
            reject(err);
        }
        checkifMentioned(id)
        checkAChirpForDB(id, message)
        resolve()
    });
    })

}

let deleteAChirpFromDB = (id) => {
    connection.query(`CALL deleteachirp(${id})`,(err, results, fields) => {
        if(err) {
            console.log(err);
            }
    });

}

let deleteAllChirpsFromDB = () => {
    connection.query(`CALL deleteallchirps(1)`,(err, results, fields) => {
        if(err) {
            console.log(err);
            }
    });

}
let checkAChirpForDB = (id, message) => {
    console.log(message)
    let spacecheck = new RegExp(" ")
if(spacecheck.test(message)){
    let x = message.split(' ')
    x.forEach(element => {
        let sending = chacterCheck(id, element)
        })             
} else {
    let sending = chacterCheck(id, message)

}

}

let checkifMentioned = (id) => {
    connection.query(`CALL CheckForMentions(${id})`, (err, results, fields) => {
        if(err) {
            console.log(err);
        }
        console.log(results[0][0])
        if(results[0][0] !== undefined) {
                        connection.query(`CALL RemoveFromMentions(${id})`, (err, results, fields) => {
                if(err) {
                    console.log(err);
                    return
                }
                console.log('Added to Mentions')
            })
        }
    })
}

let getAllMentionsFromDB = (id) => {
    return new Promise((resolve, reject) => {
    connection.query(`CALL geta(${id})`, (err, results, fields) => {
        if(err) {
            reject(err);
        }
        let testing = []
        console.log(...results[0]);
        results[0].forEach(element => testing.push(Object.values(element)))
        resolve(testing)
    });        
    })

}

module.exports = {
    getChirpsFromDB: getChirpsFromDB,
    getAChirpFromDB: getAChirpFromDB,
    postAChirpFromDB: postAChirpFromDB,
    updateAChirpFromDB: updateAChirpFromDB,
    deleteAChirpFromDB: deleteAChirpFromDB,
    deleteAllChirpsFromDB: deleteAllChirpsFromDB,
    getAllMentionsFromDB: getAllMentionsFromDB
}