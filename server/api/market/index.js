'use strict';

var express = require('express');
var controller = require('./market.controller');

var router = express.Router();

router.param('id', controller.paramId)

router.get('/', controller.index);
router.get('/geojson/all', controller.geojson);
router.post('/', controller.create);
router.get('/:id([0-9]+)', controller.show);
router.put('/:id([0-9]+)', controller.update);
router.patch('/:id([0-9]+)', controller.update);
router.delete('/:id([0-9]+)', controller.delete);

module.exports = router;
