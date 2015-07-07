var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/mean_contacts');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server escutando na porta ' + app.get('port'));
});