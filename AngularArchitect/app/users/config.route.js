

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
          .state("users", {
              url: "/users",
              template: '<users></users>'
          });
    }
})();