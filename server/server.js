'use strict';

var express = require('express');
var webpack = require('webpack');
var config = require('./config/environment');
var models = require('./models');
var webpackconfig = require('../webpack/webpack.config.dev.js');
var compiler = webpack(webpackconfig);


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

var isDev = process.env.NODE_ENV === 'development';

if (isDev) {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// Expose app
exports = module.exports = app;
