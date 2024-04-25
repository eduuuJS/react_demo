import { create } from "zustand";
import { NyxObject, NyxObjectWrapper } from "../../../../../shared/application/nyx_controller";

export class SalesController extends NyxObject{

    async initialize() : Promise<void>{
        await salesStoreProvider.getState().object?.initialize();
    }

}

export class SalesStore extends NyxObject{

    async initialize() : Promise<void>{
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

}

export const salesControllerProvider = create<NyxObjectWrapper<SalesController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

export const salesStoreProvider = create<NyxObjectWrapper<SalesStore>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));
