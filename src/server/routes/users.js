var models = require('../models');
var express = require('express');
var router = express.Router();
var validator = require('validator');

router.get('/:id', (req, res) => {
    models.fh_users.findById(req.params.id).then(usr => {
        res.send(JSON.stringify(usr));
    }).catch(console.warn);
});

router.post('/', (req, res) => {
    let email = req.body.data.email;
    let firstName = req.body.data.firstName;
    let lastName = req.body.data.lastName;
    let password = req.body.data.password;
    let isHafiz = req.body.data.isHafiz === 'hafiz';

    if (!validator.isEmail(email)
        || validator.isEmpty(firstName)
        || !validator.isAlpha(firstName)
        || validator.isEmpty(lastName)
        || !validator.isAlpha(lastName)
        || password.length < 7
    ) {
        res.send(500);
        return;
    }

    models.fh_users.create({
        email_address: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        is_hafiz: isHafiz
    }).then(user => {
     //  console.log(user);
    }).catch(err => {
        console.log(err.message);
    });

   res.sendStatus(200);

});


module.exports = router;