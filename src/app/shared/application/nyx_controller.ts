export abstract class NyxObject{

    async initialize(_params: any) : Promise<any>{}
}

export interface NyxObjectWrapper<T>{
    object : T | null;
    setObject : (object : T | null) => void;
}