import {NewsletterService} from './newsletterservice';
import {DatabaseService} from './databaseservice';

export class UserService {
    constructor(private name:string, private email:string,  private databaseService: DatabaseService,
        private newsletterService: NewsletterService) {}
    async registerUser(): Promise<{msg:string}> {
        try {
            let dbService = this.databaseService || new DatabaseService();
            let newsLservice = this.newsletterService || new NewsletterService();
            const user = await dbService.createUser(this.name, this.email);
            await newsLservice.subscribeUser(user);
            return {msg:'user registered successfully'}
        } catch (error) {
            console.log(error);
            return {msg: 'failed to register user'}
        }
    }
}