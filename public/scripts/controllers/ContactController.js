angular.module('meanContacts')
    .controller('ContactController', function ($scope, $routeParams, Contact) {

        if ( $routeParams.id ) {

            Contact.get(
                { id: $routeParams.id },
                function (contact) {
                    $scope.contact = contact;
                },
                function (error) {
                    $scope.message = {
                        text: 'Could not remove contact! Try again later.'
                    };
                    console.log(error);
                }
            );

        } else {

            $scope.contact = new Contact();

        }

        $scope.save = function () {

            $scope.contact.$save()
                .then(function () {

                    $scope.message = {
                        text: 'Contact successfully created!'
                    };

                    $scope.contact = new Contact();

                    window.location = '#/contacts';

                })
                .catch(function (error) {
                    $scope.message = {
                        text: 'Could not create a new contact!'
                    };
                });

        };

});