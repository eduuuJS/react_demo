import { ENV, Environment } from "../environment/environment";

export class AppConfig {
    static initialize(){
        Environment.env = ENV.DEV;
    }
}