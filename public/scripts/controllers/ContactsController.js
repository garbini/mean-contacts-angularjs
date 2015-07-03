angular.module('meanContacts')
    .controller('ContactsController', function ($scope, $resource) {

        $scope.contacts = [];

        $scope.search = '';

        var Contacts = $resource('/contacts/:id');

        var getContacts = function () {

            Contacts.query(
                function (data) {
                    $scope.contacts = data;
                    $scope.total = data.length;
                },
                function (error) {
                    console.log(error);
                }
            );

        };

        getContacts();

        $scope.remove = function (contact) {

            Contacts.delete(
                { id: contact.id },
                getContacts,
                function (error) {
                    console.log(error);
                }
            );

        };

});