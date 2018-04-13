var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/:id', (req, res) => {
    models.fh_users.findById(req.params.id).then(usr => {
        res.send(JSON.stringify(usr));
    }).catch(console.warn);
});

router.post('/', (req, res) => {
    res.sendStatus(200);
});


module.exports = router;