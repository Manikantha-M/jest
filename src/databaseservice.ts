export class DatabaseService {
    constructor(){}
    createUser (name:string, email:string ){
        return {name, email};
    }
}