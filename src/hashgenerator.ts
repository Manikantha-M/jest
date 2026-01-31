import{createHmac} from 'crypto';

export class HashGenerator {
    private hashSalt:string;
    private constructor(hashSalt:string){
        this.hashSalt = hashSalt;
    };
    static createHashGenerator(hashSalt:string):HashGenerator{
        return new HashGenerator(hashSalt);
    };
    public generateHash(input:string):string {
        return this.makeUrlsafe(
            Buffer.from(
                createHmac('sha256', this.hashSalt).update(input).digest('base64')
            ).toString()
        )
    };
    private makeUrlsafe(base64: string): string {
        return base64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    };
}