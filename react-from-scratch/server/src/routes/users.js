const express = require('express');
const DataBase = require('../DataBase')
let router = express.Router();

router.get('/:id', (req, res) => {
   let id = req.params.id;
        DataBase.getAllMentionsFromDB(id).then(results => res.json(results));
});

module.exports = router;