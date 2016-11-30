var app;
(function (app) {
    var data;
    (function (data) {
        var repository;
        (function (repository) {
            var UserRepository = (function () {
                function UserRepository(http, q) {
                    this.http = http;
                    this.q = q;
                }
                UserRepository.prototype.getUsers = function () {
                    var deferred = this.q.defer();
                    this.http.get("./app/json/users.json").then(function (response) {
                        deferred.resolve((response.data));
                    });
                    return deferred.promise;
                };
                UserRepository.$inject = ["$http", "$q"];
                return UserRepository;
            }());
            repository.UserRepository = UserRepository;
        })(repository = data.repository || (data.repository = {}));
    })(data = app.data || (app.data = {}));
})(app || (app = {}));
angular.module("app.data").factory("repository.user", ["$http", "$q", function ($http, $q) { return new app.data.repository.UserRepository($http, $q); }]);
//# sourceMappingURL=repository.user.js.map