if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize'),
    sequelize = null;

  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
  } else {
    sequelize = new Sequelize('database', 'root', 'null', {
      host: 'localhost',
      dialect: 'sqlite',
      storage: './server/db.development.sqlite'
    });
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Markets: sequelize.import(__dirname + '/markets')
  };
}

module.exports = global.db;
