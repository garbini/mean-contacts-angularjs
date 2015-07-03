angular.module('meanContacts', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

        $routeProvider.when('/contacts', {
            templateUrl: 'partials/contacts.html',
            controller: 'ContactsController'
        });

        $routeProvider.when('/contact/:id', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController'
        });

        $routeProvider.otherwise({
            retirectTo: '/contacts'
        });

});