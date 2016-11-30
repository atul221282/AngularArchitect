module app.data.repository {

    interface IUserRepository {
        getUsers(): ng.IPromise<app.model.users.IUser[]>;
    }

    export class UserRepository {

        static $inject = ["$http", "$q"];

        constructor(public http: ng.IHttpService, public q: ng.IQService) {
        }

        public getUsers(): ng.IPromise<app.model.users.IUser[]> {

            var deferred = this.q.defer();
            this.http.get<app.model.users.IUser[]>("./app/json/users.json").then((response) => {
                deferred.resolve((response.data) as app.model.users.IUser[]);
            });

            return deferred.promise;
        }
    }
}

angular.module("app.data").factory("repository.user",
    ["$http", "$q", ($http, $q) => new app.data.repository.UserRepository($http, $q)]);

