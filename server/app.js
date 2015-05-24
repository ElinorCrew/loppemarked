/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var models = require('./models')


// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

models.sequelize.sync().then(function() {
  // Populate DB with sample data
  if (config.seedDB) {
    require('./config/seed');
  }
  // Start server
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
});

// Expose app
exports = module.exports = app;
