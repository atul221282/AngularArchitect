/// <reference path="~/Scripts/_reference.js" />

(function (ng) {

    'use strict';

    angular
        .module('app.users')
        .controller('Users', Dashboard);

    Dashboard.$inject = ['Users'];

    function Dashboard(Users) {

        var vm = this;
        vm.Users = Users;

        console.log(vm.Users);

    }
})(angular);