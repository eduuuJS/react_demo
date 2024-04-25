export enum ENV{
    DEV,
    QA,
    PROD
}

export class Environment{
    static env: ENV = ENV.DEV;

    static get appConfig() : EnvConfig{
        switch(this.env){
            case ENV.DEV:
                return {
                    env: ENV.DEV,
                    baseUrl: 'https://pokeapi.co/api/v2',
                    connectTimeout: 600000,
                    receiveTimeout: 600000
                }
            case ENV.QA:
                return {
                    env: ENV.QA,
                    baseUrl: 'http://181.40.120.122:8181/coosofan/apiRest/Metodos',
                    connectTimeout: 600000,
                    receiveTimeout: 600000
                }
            case ENV.PROD:
                return {
                    env: ENV.PROD,
                    baseUrl: 'http://181.40.120.122:8181/coosofan/apiRest/Metodos',
                    connectTimeout: 600000,
                    receiveTimeout: 600000
                }
        }
    }
}

export interface EnvConfig{
    env: ENV,
    baseUrl: string,
    connectTimeout: number,
    receiveTimeout: number,
}