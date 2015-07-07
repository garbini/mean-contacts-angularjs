var mongoose = require('mongoose');

module.exports = function (uri) {

    mongoose.set('debug', true);

    mongoose.connect(uri, {
        server: {
            poolSize: 15
        }
    });

    mongoose.connection.on('connected', function () {
        console.log('Mongoose: Connected to ' + uri);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose: Disconnected from ' + uri);
    });

    mongoose.connection.on('error', function (error) {
        console.log('Mongoose: Connection error: ' + error);
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose: Disconnected');
            process.exit(0);
        });
    });

};