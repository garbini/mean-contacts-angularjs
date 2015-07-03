angular.module('meanContacts').factory('Contact', function ($resource) {
    return $resource('/contacts/:id');
});