import {add, subtract, isEven, createUser, createJWTtoken, calculateAverage} from '../utils';

describe('Utility Functions', () => {
    it('adds two numbers correctly', () => {
        expect(add(5,3)).toBe(8)
    });
     it('subtract two numbers correctly', () => {
        expect(subtract(5,3)).toBe(2)
    });
    it('returns true for even number',()=>{
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).not.toBe(true);
    });
    it('creates user object with correct properties', () => {
        const user = createUser('john doe', 3);
        expect(user).toEqual({name:'john doe', age:3});
        expect(user).not.toEqual({name:'susan doe', age:25});
    });
    it('create JWT Token', async()=>{
        const token = await createJWTtoken();
        expect(token).toBe('jwt_token');
    });
    it('calculate average correcly', ()=>{
        expect(calculateAverage([2,4,6,8])).toBe(5);
    });
    it('calculate avg for empty number arr', () => {
        expect(calculateAverage([])).toBe(0)
    });
})