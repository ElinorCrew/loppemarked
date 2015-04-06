module.exports = function (sequelize, DataTypes) {
  'use strict';

  var Market = sequelize.define('market', {
    name: DataTypes.STRING
  });

  Market.sync({
    force: true
  }).then(function () {
    Market.create({
      name: 'Briskeby Janitsar loppemarked'
    });
    Market.create({
      name: 'Dælenenga idrettskrets loppebonanza'
    });
    Market.create({
      name: 'Gryners Gate velforenings kvartale gatesalg'
    });
  });

  return Market;
};