'use strict';

import errors from './components/errors';
import config from './config/environment';
import path from 'path';

module.exports = function (app) {

  // Insert routes below
  app.use('/api/markets', require('./api/market'));


  // All other routes should redirect to the index.html
  app.route('/home')
    .get(function(req, res) {
      res.sendFile(path.join(config.root, 'public') + '/index.html');
    });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components)/*')
    .get(errors[404]);
};
