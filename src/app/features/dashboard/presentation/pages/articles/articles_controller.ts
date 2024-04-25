import { create } from "zustand";
import { NyxObject, NyxObjectWrapper } from "../../../../../shared/application/nyx_controller";

export class ArticlesController extends NyxObject{

    async initialize() : Promise<void>{
        await articlesStoreProvider.getState().object?.initialize();
    }

}

export class ArticlesStore extends NyxObject{

    async initialize() : Promise<void>{
        await new Promise((resolve) => setTimeout(resolve, 2000));
    }

}

export const articlesControllerProvider = create<NyxObjectWrapper<ArticlesController>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));

export const articlesStoreProvider = create<NyxObjectWrapper<ArticlesStore>>((set) => ({
    object : null,
    setObject : (object) => set({object})
}));
