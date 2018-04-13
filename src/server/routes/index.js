var express = require('express');
var router = express.Router();
var users = require('./users');

router.use(users);

module.exports = router;