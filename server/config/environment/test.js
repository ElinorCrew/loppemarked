'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
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
