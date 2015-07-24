var passport       = require('passport');
var GithubStrategy = require('passport-github').Strategy;
var findOrCreate   = require('mongoose-findorcreate');
var mongoose       = require('mongoose');

module.exports = function () {

    var User = mongoose.model('User');

    passport.use(new GithubStrategy({
        clientID: '8e041e37a097083a985c',
        clientSecret: '956d141adc9efc3c57c727f5d859be3fe80cbcfe',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    }, function (accessToken, refreshToken, profile, done) {

        User.findOrCreate(
            { 'login': profile.username },
            { 'name': profile.username },
            function (error, user) {

                if (error) {
                    return done(error);
                }

                return done(null, user);

            }
        );

    }));

    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {

        User.findById(id)
            .exec()
            .then(function (user) {
                done(null, user);
            });

    });

};