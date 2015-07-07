angular.module('meanContacts')
    .controller('ContactsController', function ($scope, Contact) {

        $scope.contacts = [];

        $scope.search = '';

        $scope.message = {};

        var getContacts = function () {

            Contact.query(
                function (data) {
                    $scope.contacts = data;
                    $scope.total = data.length;
                },
                function (error) {
                    $scope.message = {
                        text: 'Could not get the contact list! Try again later.'
                    };
                    console.log(error);
                }
            );

        };

        getContacts();

        $scope.remove = function (contact) {

            Contact.delete(
                { id: contact._id },
                getContacts,
                function (error) {
                    $scope.message = {
                        text: 'Could not remove contact! Try again later.'
                    };
                    console.log(error);
                }
            );

        };

});