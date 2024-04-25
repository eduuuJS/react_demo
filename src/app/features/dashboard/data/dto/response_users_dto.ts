import { UsersModel } from "../../domain/users_model";

export type ResponseUsersDto = {
    count?:    number;
    next?:     string;
    previous?: string;
    results?:  Result[];
}

export type Result = {
    name?: string;
    url?:  string;
}

export function toUsersModel(response: ResponseUsersDto): UsersModel[] {
    return response.results?.map((item: Result) => {
        return new UsersModel(
            item.name ?? "",
            item.name ?? "",
            item.url ?? "",
            "Actividad no iniciada"
        );
    }) ?? [];
}