import { create } from "zustand";
import { NyxObject, NyxObjectWrapper } from "../../../../../shared/application/nyx_controller";
import { UsersModel } from "../../../domain/users_model";
import { listUsersState, quantityUsersState } from "./users_states";
import { IGeneralDataRepository } from "../../../data/repositories/general_data_repository";
import { sl } from "../../../../../../core/utils/dependency_injection";


export class UsersController implements NyxObject{

    userId : number = 0;

    async initialize(userId : number) : Promise<void>{
        this.userId = userId;
        await useUsersDataBox.getState().object?.initialize(userId);
        listUsersState.getState().initializeState();
        quantityUsersState.getState().updateQuantity();
    }

    deleteLastUser(){
        listUsersState.getState().deleteLastUser();
        quantityUsersState.getState().updateQuantity();
    }
}

export class UsersDataBox implements NyxObject{

    //Instances
    repository : IGeneralDataRepository = sl.get<IGeneralDataRepository>("GeneralDataRepository");

    //Variables
    userId : number = 0;
    usersList : UsersModel[] = [];

    //Functions
    async initialize(userId : number) : Promise<void>{
        this.userId = userId;
        await this.getData();
    }

    async getData() : Promise<void>{
        const response = await (await this.repository.getGeneralData()).sort((first, second) => first.name.localeCompare(second.name) );
        this.usersList = [...response];
    }

    
}

export const useUsersController = create<NyxObjectWrapper<UsersController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

export const useUsersDataBox = create<NyxObjectWrapper<UsersDataBox>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));


