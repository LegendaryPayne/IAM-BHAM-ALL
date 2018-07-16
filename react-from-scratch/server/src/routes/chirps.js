const express = require('express');
const DataBase = require('../DataBase')
let router = express.Router();





router.get('/:id?', (req, res) => {
   let id = req.params.id;
    if(id) {
        DataBase.getAChirpFromDB(id).then(results => res.json(results));
   } else {
        DataBase.getChirpsFromDB().then(results => res.json(results));
   }
});

router.post('/', (req, res) => {
    DataBase.postAChirpFromDB(req.body.message);
    res.sendStatus(201);
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    DataBase.updateAChirpFromDB(id, req.body.message);
    res.sendStatus(204);
})

router.delete('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        DataBase.deleteAChirpFromDB(id);    
    } else {
        DataBase.deleteAllChirpsFromDB();
    }
    
    res.sendStatus(204);
})


module.exports = router;