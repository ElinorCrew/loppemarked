module.exports = function (sequelize, DataTypes) {
  'use strict';

  var Markets = sequelize.define('Markets', {
    name: DataTypes.STRING
  });

  Markets.sync({
    force: true
  }).then(function () {
    Markets.create({
      name: 'Briskeby Janitsar loppemarked'
    });
    Markets.create({
      name: 'Dælenenga idrettskrets loppebonanza'
    });
    Markets.create({
      name: 'Gryners Gate velforenings kvartale gatesalg'
    });
  });

  return Markets;
};
