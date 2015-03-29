var express = require('express'),
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    db = require('./models'),

    app = express(),
    clientDir = process.env.CLIENT_DIR || process.argv.slice(2)[0] || '/../client';    

console.log("Her er client dir: " + clientDir);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use('/api', routes);
app.use(express.static(__dirname + clientDir));
app.use(express.static(__dirname + '/../bower_components'));

app.listen(app.get('port'), function () {
    console.log('Loppekartet server is listening on port ' + app.get('port'));
});
