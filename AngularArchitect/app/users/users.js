var app;
(function (app) {
    var users;
    (function (users) {
        var Users = (function () {
            function Users() {
                this.controller = UsersController;
                this.templateUrl = "Template/Index?feature=users&template=users";
                this.transclude = false;
                this.controllerAs = "vm";
            }
            return Users;
        }());
        users.Users = Users;
        var UsersController = (function () {
            function UsersController($http, RepositoryUser) {
                this.$http = $http;
                this.RepositoryUser = RepositoryUser;
                this.vm = this;
            }
            UsersController.prototype.$onInit = function () {
                var _this = this;
                var data = this.vm;
                this.RepositoryUser.getUsers().then(function (response) {
                    data.Users = response;
                    console.dir(_this.Users);
                });
            };
            UsersController.prototype.setUser = function (id, value) {
                this.vm.Users.forEach(function (data, index, array) {
                    if (data.id == id) {
                        data.name = value.name;
                        return;
                    }
                });
            };
            UsersController.$inject = ["$http", "repository.user"];
            return UsersController;
        }());
    })(users = app.users || (app.users = {}));
})(app || (app = {}));
angular.module("app.users").component("users", new app.users.Users());
//# sourceMappingURL=users.js.map