module app.users {

    interface ISomeComponentController extends ng.IController {
        setUser(id: number, value: any): void;
    }

    export class Users implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public template: string;
        public templateUrl: string;
        public transclude: boolean;
        public controllerAs: string;

        constructor() {
            this.controller = UsersController;
            this.templateUrl = "Template/Index?feature=users&template=users";
            this.transclude = false;
            this.controllerAs = "vm";
        }
    }

    class UsersController implements ISomeComponentController {
        public name: string;
        public test: string;
        public Users: app.model.users.IUser[];
        public vm: UsersController;
        static $inject: string[] = ["$http", "repository.user"];

        constructor(private $http: any, private RepositoryUser: any) {
            this.vm = this;
        }

        public $onInit(): void {
            let data = this.vm;
            this.RepositoryUser.getUsers().then(function (response) {
                data.Users = response.data;
                console.dir(this.Users);
            });
        }

        public setUser(id: number, value: app.model.users.IUser): void {
            this.vm.Users.forEach((data, index, array) => {
                if (data.id == id) {
                    data.name = value.name;
                    return;
                }
            });
        }
    }
}

angular.module("app.users").component("users", new app.users.Users());