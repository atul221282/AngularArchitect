

(function () {
    'use strict';

    angular
        .module('app.users')
        .config(config);

    config.$inject = ["$stateProvider", "$urlRouterProvider"];

    function config($stateProvider, $urlRouterProvider) {

        var clientBaseUrl = "app/users/";

        // For any unmatched url, redirect to /maintain client
        $urlRouterProvider.otherwise("/users");

        // Now set up the states
        $stateProvider
          .state("users", {
              url: "/users",
              templateUrl: "Template/Index?feature=users&template=users",
              controller: "Users",
              controllerAs: "vm",
              resolve: {
                  Users: function ($q) {
                      var deferred = $q.defer();
                      deferred.resolve(["Atul", "Bani", "Iha", "Kapil", "Sonia", "Harbans Singh", "Sudarshana Devi"]);
                      return deferred.promise;
                  }
              }
          });
    }
})();