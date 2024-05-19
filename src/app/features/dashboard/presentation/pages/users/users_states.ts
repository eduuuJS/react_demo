import { create } from "zustand";
import { UsersModel } from "../../../domain/users_model";
import { useUsersController } from "./usersController";

interface IListUsersState {
    users : UsersModel[];
    initializeState : () => void;
    deleteLastUser : () => void;
}

export const listUsersState = create<IListUsersState>((set, get) => ({
    users : [],
    initializeState : () => {
        const listFound = useUsersController.getState().object?.usersList;
        set({users : listFound});
    },
    deleteLastUser : () => {
        const currentList = get().users;
        if (currentList.length > 2) {
            currentList.pop();
        }
        set({users : [...currentList]});
    }
}));

// interface IQuantityUsersState {
//     quantity : number;
//     updateQuantity : () => void;
// }

// export const quantityUsersState = create<IQuantityUsersState>((set) => ({
//     quantity : 0,
//     updateQuantity : () => {
//         const currentLenght = listUsersState.getState().users.length;
//         console.log(currentLenght);
//         set({quantity : currentLenght});
//     }
// }));