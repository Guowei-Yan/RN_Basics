import Constants from "./Constants";
import {post} from './HiNet';
/**
 * login
 */

export default class LoginAPI {
    private static instance: LoginAPI;
    private constructor(){ }
    public static getInstance(): LoginAPI {
        if (!LoginAPI.instance){
            LoginAPI.instance = new LoginAPI();
        }
        return LoginAPI.instance;
    }
    login(userName: string, password:string): Promise<any> {
        return new Promise
    }

}