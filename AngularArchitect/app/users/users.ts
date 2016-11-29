interface ISomeComponentController extends ng.IController {
    setUser(id: number, value: any): void;
}

class Users implements ng.IComponentOptions {
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
    public Users: any[];
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

    public setUser(id: number, value: any): void {
        let user = this.vm.Users.filter((x, y, arr) => {
            if (x.id == id) {
                x.name = value.name;
                return x;
            }
        })[0];
    }
}

angular.module("app.users").component("users", new Users());