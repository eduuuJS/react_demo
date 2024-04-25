export class UsersModel{
    id: string;
    name : string;
    role : string;
    status : string;

    constructor(id: string, name: string, role: string, status: string){
        this.id = id;
        this.name = name;
        this.role = role;
        this.status = status;
    }
}

export let pruebaUsers: UsersModel[] = [
    new UsersModel("1", "John Doe", "Admin", "Active"),
    new UsersModel("2", "Jane Smith", "User", "Active"),
    new UsersModel("3", "Mike Johnson", "User", "Inactive"),
    new UsersModel("4", "Sarah Williams", "Admin", "Active"),
    new UsersModel("5", "David Brown", "User", "Inactive"),
    new UsersModel("1", "John Doe", "Admin", "Active"),
    new UsersModel("2", "Jane Smith", "User", "Active"),
    new UsersModel("3", "Mike Johnson", "User", "Inactive"),
    new UsersModel("4", "Sarah Williams", "Admin", "Active"),
    new UsersModel("5", "David Brown", "User", "Inactive"),
    new UsersModel("1", "John Doe", "Admin", "Active"),
    new UsersModel("2", "Jane Smith", "User", "Active"),
    new UsersModel("3", "Mike Johnson", "User", "Inactive"),
    new UsersModel("4", "Sarah Williams", "Admin", "Active"),
    new UsersModel("5", "David Brown", "User", "Inactive")
];