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
                    var _this = this;
                    var deferred = this.q.defer();
                    this.http.get("./app/json/users.json").then(function (response) {
                        _this.hasError = false;
                        deferred.resolve((response.data));
                    }).catch(function (reason) {
                        _this.error = reason;
                        _this.hasError = true;
                        deferred.reject(reason);
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