/// <reference path="~/Scripts/_reference.js" />


(function () {

    'use strict';

    angular.module('app.data')
    .factory('repository.user', RepositoryUser);

    RepositoryUser.$inject = ['api.factory'];

    function RepositoryUser(APIFactory) {
        let repo = {
            getUsers: getUsers
        };

        function getUsers() {
            return APIFactory.Get('./app/json/users.json').then(function (data) {
                return data;
            }, function (error) {
                return error;
            });
        };

        return repo;
    }
})();