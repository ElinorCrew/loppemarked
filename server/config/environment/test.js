'use strict';

// Test specific configuration
// ===========================
module.exports = {
  database: 'database',
  user: 'root',
  password: 'null',
  options: {
    host: 'localhost',
    dialect: 'sqlite',
    storage: './db.test.sqlite'
  },
  seedDB: false
};
