﻿/// <reference path="~/Scripts/_reference.js" />

(function () {

    function controller($http) {
        var vm = this;
        vm.User = {};

        vm.$onInit = function () {

            $http.get('./app/json/users.json').then(function (response) {
                let id = parseInt(vm.id, 10);
                response.data.forEach(function (user) {
                    if (id === user.id) {
                        vm.User = user;
                        return;
                    }
                });
            });
        };

    };

    angular
        .module('app.users')
        .component('userDetails', {
            templateUrl: 'Template/Index?feature=users&template=user-details',
            bindings: {
                id: "<",
                setUser: '&'
            },
            controller: ['$http', controller],
            controllerAs: 'vm'
        });

})();