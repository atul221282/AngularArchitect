module app.data.repository {

    interface IUserRepository extends IBaseRepository {
        getUsers(): ng.IPromise<app.model.users.IUser[]>;
    }

    export class UserRepository implements IUserRepository {
        public error: any;
        public hasError: boolean;

        static $inject = ["$http", "$q"];

        constructor(public http: ng.IHttpService, public q: ng.IQService) {
        }

        public getUsers(): ng.IPromise<app.model.users.IUser[]> {
            var deferred = this.q.defer();

            this.http.get<app.model.users.IUser[]>("./app/json/users.jsond").then((response) => {
                this.hasError = false;
                deferred.resolve((response.data) as app.model.users.IUser[]);
            }).catch((reason) => {
                this.error = reason;
                this.hasError = true;
            });

            return deferred.promise;
        }
    }
}

angular.module("app.data").factory("repository.user",
    ["$http", "$q", ($http, $q) => new app.data.repository.UserRepository($http, $q)]);

