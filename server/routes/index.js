'use strict';

var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/hallo', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

router.get('/markets', function (req, res) {
    models.User.findAll()
        .then(function (users) {
            res.json(users);
        });
});

module.exports = router;
