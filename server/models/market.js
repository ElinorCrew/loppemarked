module.exports = function(sequelize, DataTypes) {
  'use strict';

  var Market = sequelize.define('market', {
    name: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10, 2),
    lng: DataTypes.DECIMAL(10, 2)
  });

  return Market;
};
