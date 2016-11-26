

(function () {
    'use strict';

    angular
        .module('app.users')
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {

        var clientBaseUrl = "app/users/";

        // For any unmatched url, redirect to /users
        $urlRouterProvider.otherwise("/users");

        // Now set up the states
        $stateProvider
        .state("user-details", {
            url: "/user/:id",
            template: '<user-details id="vm.id"></user-details>',
            controllerAs: 'vm',
            controller: ["id", function (id) {
                let vm = this;
                vm.id = id;
            }],
            resolve: {
                id: ["$stateParams", function ($stateParams) {
                    return $stateParams.id;
                }]
            }
        })
        .state("users", {
            url: "/users",
            template: '<users></users>'
        });
    }
})();