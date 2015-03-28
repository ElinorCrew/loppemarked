'use strict';

var express = require('express'),
    routes = require('./routes'),
    db = require('./models');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/api', routes);
app.use(express.static(__dirname + '/../app'));

db.sequelize.sync().then(function () {
    app.listen(app.get('port'), function () {
        console.log('Loppekartet server is listening on port ' + app.get('port'));
    });
});
