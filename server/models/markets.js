'use strict';

module.exports = function (sequelize, DataTypes) {
  var Markets = sequelize.define('Markets', {
    name: DataTypes.STRING
  });

  Markets.sync({
    force: true
  }).then(function () {
    Markets.create({
      name: 'Grunders'
    });
    return Markets.create({
      name: 'Dælenenggata'
    });
  });

  return Markets;
};
