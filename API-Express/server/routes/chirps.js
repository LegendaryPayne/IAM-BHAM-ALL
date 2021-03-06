const express = require('express');
const chirpStore = require('../chirpstore');
let router = express.Router();

router.get('/:id?', (req, res) => {
   let id = req.params.id;
    if(id) {
       res.json(chirpStore.GetChirp(id));
   } else {
       res.json(chirpStore.GetChirps());
   }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    console.log(req.body);
    res.sendStatus(201);
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    chirpStore.UpdateChirp(id, req.body);
    res.sendStatus(204);
})

router.delete('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        chirpStore.DeleteChirp(id);     
    } else {
        chirpStore.DeleteChirps();
    }
    
    res.sendStatus(204);
})


module.exports = router;