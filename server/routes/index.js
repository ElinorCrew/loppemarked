'use strict';

var db = require('../models'),
    express = require('express'),
    router = express.Router();

router.param('model', function (req, res, next, model) {
    if (db.sequelize.isDefined(model)) {
        req.model = db.sequelize.model(model);
        return next();
    } else {
        res.sendStatus(404);
    }
});

router.param('id', function (req, res, next, id) {
    console.log(id);
    req.model.find(id)
        .error(next)
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
    res.send('please select a model, e.g., /markets');
});

router.get('/:model(\\w+)', function (req, res, next) {
    req.model.findAll()
        .error(next)
        .success(function (models) {
            res.json(models);
        });
});

router.post('/:model(\\w+)', function (req, res, next) {
    req.model.create(req.body)
        .error(next)
        .success(function (item) {
            res.json(item);
        });
});

router.get('/:model(\\w+)/:id([0-9]+)', function (req, res) {
    res.json(req.item);
});

router.put('/:model(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.item.update(req.body)
        .error(next)
        .success(res.sendStatus(200));
});

router.delete('/:model(\\w+)/:id([0-9]+)', function (req, res, next) {
    req.item.destroy()
        .error(next)
        .success(res.sendStatus(200));
});

module.exports = router;
