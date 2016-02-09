module.exports = function (sequelize, DataTypes) {
  'use strict';

  let market = sequelize.define('market', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    heroImage: DataTypes.STRING,
    eventDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {isDate: true}
    },
    lat: {
      type: DataTypes.DECIMAL(10, 2),
      get: function () {
        let lat = this.getDataValue('lat');
        return parseFloat(lat);
      }
    },
    lng: {
      type: DataTypes.DECIMAL(10, 2),
      get: function () {
        let lat = this.getDataValue('lng');
        return parseFloat(lat);
      }
    },
  });

  return market;
};
