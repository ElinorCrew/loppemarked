'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    logger = require('morgan');

var app = express();

app.set('logMode', (process.env.LOG_MODE || 'dev'));
app.set('clientDir', (process.env.CLIENT_DIR || process.argv.slice(2)[0] || '/../client'));
app.set('port', (process.env.PORT || 5000));

app.use('/api', routes);
app.use(logger(app.set('logMode')));
app.use(bodyParser.json({
    type: 'application/*+json'
}));
app.use(express.static(__dirname + app.get('clientDir')));
app.use(express.static(__dirname + '/../client/bower_components'));

app.listen(app.get('port'), function () {
    console.log('Loppekartet server is listening on port ' + app.get('port'));
});
