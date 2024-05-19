import { create } from "zustand";
import { NyxObject, NyxObjectWrapper } from "../../../../../shared/application/nyx_controller";
import { UsersModel } from "../../../domain/users_model";
import { listUsersState } from "./users_states";
import { IGeneralDataRepository } from "../../../data/repositories/general_data_repository";
import { sl } from "../../../../../../core/utils/dependency_injection";


export class UsersController implements NyxObject{

    //Instances
    repository : IGeneralDataRepository = sl.get<IGeneralDataRepository>("GeneralDataRepository");

    //Variables
    usersList : UsersModel[] = [];


    //Functions
    async initialize() : Promise<void>{
        await this.getUserList();
    }

    async getUserList() : Promise<void>{
        const response =  await this.repository.getGeneralData();
        this.usersList = [...response];
        listUsersState.getState().initializeState();
    }

    deleteLastUser(){
        listUsersState.getState().deleteLastUser();
    }
}

export const useUsersController = create<NyxObjectWrapper<UsersController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

// export class UsersDataBox implements NyxObject{

//     //Instances
//     repository : IGeneralDataRepository = sl.get<IGeneralDataRepository>("GeneralDataRepository");

//     //Variables
//     userId : number = 0;
//     usersList : UsersModel[] = [];

//     //Functions
//     async initialize(userId : number) : Promise<void>{
//         this.userId = userId;
//         await this.getData();
//     }

//     async getData() : Promise<void>{
//         const response = await (await this.repository.getGeneralData()).sort((first, second) => first.name.localeCompare(second.name) );
//         this.usersList = [...response];
//     }

    
// }

// export const useUsersDataBox = create<NyxObjectWrapper<UsersDataBox>>((set) => ({
//     object : null,
//     setObject : (object) => set({object})
// }));


