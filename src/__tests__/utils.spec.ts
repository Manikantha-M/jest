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
    })
})