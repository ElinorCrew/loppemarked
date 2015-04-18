module.exports = function(sequelize, DataTypes) {
  'use strict';

  var Market = sequelize.define('market', {
    name: DataTypes.STRING,
    lat: DataTypes.DECIMAL(10, 2),
    lng: DataTypes.DECIMAL(10, 2)
  });

  Market.sync({
    force: true
  }).then(function() {
    Market.create({
      name: 'Briskeby Janitsar loppemarked',
      lat:'59.916741595387904',
      lng:'10.728836059570312'
    });
    Market.create({
      name: 'Dælenenga idrettskrets loppebonanza',
      lat:'59.916741595387904',
      lng:'10.628836059570312'
    });
    Market.create({
      name: 'Gryners Gate velforenings kvartale gatesalg',
      lat:'59.916741595387904',
      lng:'10.228836059570312'
    });
    Market.create({
      name: 'Gryners Gate gatesalg',
      lat:'59.916741595387904',
      lng:'10.528836059570312'
    });
    Market.create({
      name: 'Gryners velforenings gatesalg',
      lat:'59.916741595387904',
      lng:'10.428836059570312'
    });
    Market.create({
      name: 'Gryners velforenings gatesalg',
      lat:'59.916741595387904',
      lng:'10.328836059570312'
    });
  });

  return Market;
};
