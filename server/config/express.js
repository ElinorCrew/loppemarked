/**
 * Express configuration
 */

'use strict';

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const errorHandler = require('errorhandler');
const path = require('path');
const config = require('./environment');

module.exports = function(app) {
  const env = app.get('env');

  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());


  if ('development' === env || 'test' === env) {
    app.use(express.static(path.join(config.root, 'app')));
    app.set('appPath', 'app');
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  } else {
    app.use(express.static(path.join(config.root, 'public')));
  }
};
