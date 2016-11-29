var Users = (function () {
    function Users() {
        this.controller = UsersController;
        this.templateUrl = "Template/Index?feature=users&template=users";
        this.transclude = false;
        this.controllerAs = "vm";
    }
    return Users;
}());
var UsersController = (function () {
    function UsersController($http, RepositoryUser) {
        this.$http = $http;
        this.RepositoryUser = RepositoryUser;
        this.vm = this;
    }
    UsersController.prototype.$onInit = function () {
        var data = this.vm;
        this.RepositoryUser.getUsers().then(function (response) {
            data.Users = response.data;
            console.dir(this.Users);
        });
    };
    UsersController.prototype.setUser = function (id, value) {
        var user = this.vm.Users.filter(function (x, y, arr) {
            if (x.id == id) {
                x.name = value.name;
                return x;
            }
        })[0];
    };
    UsersController.$inject = ["$http", "repository.user"];
    return UsersController;
}());
angular.module("app.users").component("users", new Users());
//# sourceMappingURL=users.js.map