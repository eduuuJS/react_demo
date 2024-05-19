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
