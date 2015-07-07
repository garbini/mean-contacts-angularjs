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
                        class: 'danger',
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
                        class: 'success',
                        text: 'Contact successfully created!'
                    };

                    $scope.contact = new Contact();

                })
                .catch(function (error) {
                    $scope.message = {
                        class: 'danger',
                        text: 'Could not create a new contact!'
                    };
                });

        };

        Contact.query(function (contacts) {
            $scope.contacts = contacts;
        });

});