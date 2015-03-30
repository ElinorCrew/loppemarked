'use strict';

var db = require('../models'),
    express = require('express'),
    router = express.Router();

router.param('modelName', function (req, res, next, modelName) {
    if (db.sequelize.isDefined(modelName)) {
        req.model = db.sequelize.model(modelName);
        return next();
    } else {
        res.sendStatus(404);
    }
});

router.param('id', function (req, res, next, id) {
    console.log(id);
    req.model.find(id)
        .catch(next)
        .then(function (item) {
            if (item) {
                console.log(item);
                req.item = item;
                next();
            } else {
                res.sendStatus(404);
            }
        });
});

router.get('/', function (req, res) {
    res.send('please select a modelName, e.g., /markets');
});

router.get('/:modelName(\\w+)', function (req, res, next) {
    req.model.findAll()
        .catch(next)
        .then(function (models) {
            res.json(models);
        });
});

router.post('/:modelName(\\w+)', function (req, res, next) {
    req.model.create(req.body)
        .catch(next)
        .then(function (item) {
            res.json(item);
        });
});

router.get('/:modelName(\\w+)/:id([0-9]+)', function (req, res) {
    res.json(req.item);
});

router.put('/:modelName(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.item.update(req.body)
        .then(res.sendStatus(200))
        .catch(next);
});

router.delete('/:modelName(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.item.destroy()
        .catch(next)
        .then(res.sendStatus(200));
});

module.exports = router;
