/// <reference path="~/Scripts/_reference.js" />


(function () {

    'use strict';

    angular.module('app.data')
    .factory('repository.user', RepositoryUser);

    RepositorySession.$inject = ['breeze.config', 'model', 'repository.abstract'];

    function RepositorySession(breezeConfig, model, AbstractRepository) {
        let repo = {
            getUsers:getUsers
        };

        function getUsers() {

        };

        return repo;
    }
})();