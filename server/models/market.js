module.exports = function(sequelize, DataTypes) {
  'use strict';

  var Market = sequelize.define('market', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    imageSmall: DataTypes.STRING,
    imageMedium: DataTypes.STRING,
    lat: {
      type: DataTypes.DECIMAL(10, 2),
      get: function() {
        var lat = this.getDataValue('lat');
        return parseFloat(lat);
      }
    },
    lng: {
      type: DataTypes.DECIMAL(10, 2),
      get: function() {
        var lat = this.getDataValue('lng');
        return parseFloat(lat);
      }
    },
  });

  return Market;
};
