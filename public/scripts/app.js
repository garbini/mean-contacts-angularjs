angular.module('meanContacts', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

        var contactsRoute = {
            templateUrl: 'partials/contacts.html',
            controller: 'ContactsController'
        };

        var contactRoute = {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController'
        };

        $routeProvider.when('/', contactsRoute);

        $routeProvider.when('/contacts', contactsRoute);

        $routeProvider.when('/contact', contactRoute);

        $routeProvider.when('/contact/:id', contactRoute);

        $routeProvider.otherwise({
            redirectTo: '/contacts'
        });

});