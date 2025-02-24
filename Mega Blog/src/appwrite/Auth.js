import {Client , Account , ID} from "appwrite";
import conf from '../config/config_file';
export class AuthService{
    client = new Client();
    account = new Account();
    constructor(){
        this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectId)
        this.account = new Account(this.client);
    }
    async createAccount({email,password,name}){
        // eslint-disable-next-line no-useless-catch
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
             if(userAccount){ this.login({email,password})}
        else return userAccount;
        }
        catch(error){
            throw error;
        }
    }
    async login({email,password}){
        // eslint-disable-next-line no-useless-catch
        try{
             return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error;
        }
    }
    async getcurrentuser(){
        // eslint-disable-next-line no-useless-catch
        try{
            return await this.account.get();
        }
        catch(error){
            throw error;
        }
    }
    async logout(){
        try{
             await this.account.deleteSessions();
        }
        catch(error){
            return null;
        }
    }
}
const authService = new AuthService();
export default authService;