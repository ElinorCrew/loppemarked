/**
 * Express configuration
 */

 'use strict';

 var express = require('express');
 var morgan = require('morgan');
 var compression = require('compression');
 var bodyParser = require('body-parser');
 var methodOverride = require('method-override');
 var cookieParser = require('cookie-parser');
 var errorHandler = require('errorhandler');
 var path = require('path');
 var config = require('./environment');

 module.exports = function (app) {
  var env = app.get('env');

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
  }else {
    app.use(express.static(path.join(config.root, 'public')));
  }
};
