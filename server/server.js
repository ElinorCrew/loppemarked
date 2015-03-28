'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    db = require('./models');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use('/api', routes);
app.use(express.static(__dirname + '/../app'));

app.listen(app.get('port'), function () {
    console.log('Loppekartet server is listening on port ' + app.get('port'));
});
