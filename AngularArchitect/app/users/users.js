/// <reference path="~/Scripts/_reference.js" />

(function () {

    function controller($http) {
        var vm = this;
        vm.Users = [];

        vm.$onInit = function () {
            $http.get("./app/json/users.json").then(function (response) {
                vm.Users = response.data;
            });
        };

        vm.setUser = function (user, value) {
            user.name = value.name;
        };
    };

    angular
        .module('app.users')
        .component('users', {
            templateUrl: "Template/Index?feature=users&template=users",
            controller: ["$http", controller],
            controllerAs: 'vm'
        });

})();