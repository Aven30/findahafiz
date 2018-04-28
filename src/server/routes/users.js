const models = require('../models');
const express = require('express');
const router = express.Router();
const validator = require('validator');
const Promise = require('bluebird');
const scrypt = require("scrypt-for-humans");

const emailExists = (email) => {
    return models.fh_users.findOne({
        where: {email_address: email}
    });
};

router.get('/current', (req, res) => {
    res.send(JSON.stringify(req.session.user));
});

router.get('/:id', (req, res) => {
    models.fh_users.findById(req.params.id).then(usr => {
        res.send(JSON.stringify(usr));
    }).catch(console.warn);
});

router.post('/logout', (req, res) => {
   req.session.user = null;
   res.sendStatus(200);
});

router.post('/login', (req, res) => {
    console.log('test');
    let email = req.body.data.email;
    let password = req.body.data.password;

    if (!validator.isEmail(email)) {
        res.status(500).send('Error Occured');
    }

    let user = null;
    models.fh_users.findOne({
        where: {email_address: email}
    }).then(usr => {
        user = usr;
        return scrypt.verifyHash(password, usr.password);
    }).then(() => {
        req.session.user = {
            email: user.email,
            firstName: user.first_name,
            lastName: user.last_name
        };
        res.send(200);
    }).catch(err => {
        console.log(err);
        res.status(500).send('Invalid email or password');
    });
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
        res.status(500).send('Error occured');
    }

    let theHash;

    Promise.try(() => {
        return emailExists(email);
    }).then(usr => {
        if (usr !== null) {
            res.status(500).send('Email Already Exists')
        }
        return scrypt.hash(password);
    }).then(hash => {
        return models.fh_users.create({
            email_address: email,
            first_name: firstName,
            last_name: lastName,
            password: hash,
            is_hafiz: isHafiz
        });
    }).then(usr => {
        console.log(usr);
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });

});

module.exports = router;