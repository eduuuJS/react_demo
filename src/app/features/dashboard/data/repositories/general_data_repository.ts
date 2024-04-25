import { injectable } from "inversify";
import { AxiosClient } from "../../../../../core/network/axios_client";
import { UsersModel } from "../../domain/users_model";
import { toUsersModel } from "../dto/response_users_dto";

export abstract class IGeneralDataRepository {
    abstract getGeneralData(): Promise<UsersModel[]>;
}

@injectable()
export class GeneralDataRepository implements IGeneralDataRepository {

    axiosClient : AxiosClient = AxiosClient.instance;

    async getGeneralData(): Promise<UsersModel[]> {
        try {
            const {status, data} = await this.axiosClient.get({
                url: '/pokemon?limit=15&offset=0'
            });
            if (status === 200) {
                return toUsersModel(data);
            }
            return [];
        } catch (error) {
            return [];
        }
    }
    
}