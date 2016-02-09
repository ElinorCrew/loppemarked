'use strict';

var _ = require('lodash'),
  db = require('../../models'),
  geojson = require('geojson'),
  marketApi = {};

marketApi.paramId = function(req, res, next, id) {
  db.Markets.find(id)
    .catch(next)
    .then(function(item) {
      if (item) {
        console.log(item);
        req.item = item;
        next();
      } else {
        res.sendStatus(404);
      }
    });
};

marketApi.index = function(req, res, next) {
  db.Markets.findAll()
    .catch(next)
    .then(function(models) {
      res.json(models);
    });
};

marketApi.geojson = function(req, res, next) {
  db.Markets.findAll()
    .catch(next)
    .then(function(models) {
      var features = models.map(function(val){
        return val.dataValues
      });
      var featureCollection = geojson.parse(features, {Point: ['lat','lng']});
      res.send(featureCollection);
    });
};

marketApi.create = function(req, res, next) {
  db.Markets.create(req.body)
    .catch(next)
    .then(function(item) {
      res.json(item);
    });
};

marketApi.show = function(req, res) {
  res.json(req.item);
};

marketApi.update = function(req, res, next) {
  req.item.update(req.body)
    .then(res.sendStatus(200))
    .catch(next);
};

marketApi.delete = function(req, res, next) {
  req.item.destroy()
    .catch(next)
    .then(res.sendStatus(200));
};

module.exports = marketApi;
