if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize'),
    sequelize = null,
    config = require('../config/environment');

  if (process.env.NODE_ENV === 'production') {
    sequelize = new Sequelize(process.env.DATABASE_URL);
  } else {
    sequelize = new Sequelize(config.database, config.user, config.password, config.options);
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Markets: sequelize.import(__dirname + '/market')
  };
}

module.exports = global.db;
