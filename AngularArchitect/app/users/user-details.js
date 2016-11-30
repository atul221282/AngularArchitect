/// <reference path="~/Scripts/_reference.js" />

(function () {

    function controller($http, RepositoryUser) {
        var vm = this;
        vm.User = {};

        vm.$onChanges = function (id) {
            getUser();
        };

        function getUser() {
            RepositoryUser.getUsers().then(function (response) {
                let id = parseInt(vm.id, 10);
                response.forEach(function (user) {
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
            controller: ['$http', 'repository.user', controller],
            controllerAs: 'vm'
        });

})();