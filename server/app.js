/*global response, console*/
'use strict';


var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    db      = require('./models');

var app = express();

// all environments
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {

}

app.get('/', function (request, response) {
    response.send('<h1>Hello World!</h1>');
});
//app.get('/users', user.list);

db.sequelize.sync().then(function () {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Loppekartet server listening on port ' + app.get('port'));
    });
});
