'use strict';

// Development specific configuration
// ==================================

module.exports = {
  database: 'database',
  user: 'root',
  password: 'null',
  options: {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './server/db.development.sqlite'
  },
  seedDB: true
};
