/// <reference path="~/Scripts/_reference.js" />

(function () {

    function controller($http, RepositoryUser) {
        var vm = this;
        vm.Users = [];

        vm.$onInit = function () {
            RepositoryUser.getUsers().then(function (response) {
                vm.Users = response.data;
            });
        };

        vm.setUser = function (index, value) {
            vm.Users[index] = angular.copy(value);
        };
    };

    angular
        .module('app.users')
        .component('users', {
            templateUrl: "Template/Index?feature=users&template=users",
            controller: ['$http', 'repository.user', controller],
            controllerAs: 'vm'
        });

})();