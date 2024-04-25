import { Environment } from "../environment/environment";
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";

export class AxiosClient{
    
    static instance: AxiosClient = new AxiosClient();

    private axiosClient = axios.create(
        {
            baseURL: Environment.appConfig.baseUrl,
            timeout: Environment.appConfig.connectTimeout,
            responseType: "json",
        }
    );

    async get(params : AxiosGetParams): Promise<AxiosResponse> {
        // const token = localStorage.getItem('token');
        const config: AxiosRequestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
                'Content-Type': 'application/json',
                // Authorization : `Bearer ${token}`,
            },
            params: params.queryParameters
        };
        return await this.axiosClient.get(
            params.url,
            config
        );
    }

    async post(params : AxiosPostParams): Promise<AxiosResponse> {
        // const token = localStorage.getItem('token');
        const config: AxiosRequestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
                'Content-Type': 'application/json',
                // Authorization : `Bearer ${token}`,
            },
            params: params.queryParameters
        };
        return await this.axiosClient.post(
            params.url,
            params.body,
            config
        );
    }

    async put(params : AxiosPostParams): Promise<AxiosResponse> {
        // const token = localStorage.getItem('token');
        const config: AxiosRequestConfig = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
                'Content-Type': 'application/json',
                // Authorization : `Bearer ${token}`,
            },
            params: params.queryParameters
        };
        return await this.axiosClient.put(
            params.url,
            params.body,
            config
        );
    }
}

export interface AxiosGetParams{
    url: string,
    queryParameters?: any,
}

export interface AxiosPostParams{
    url: string,
    body?: any,
    queryParameters?: any,
}