import { user } from "../user";

describe('user mocking approaches', ()=>{
    it('mocks single method using jest.fn()', () => {
        // user.getRole = jest.fn().mockReturnValue('guest');
        expect(user.getRole()).toBe('guest');
        expect(user.getName()).toBe('peter');
        expect(user.getEmail()).toBe('john@example.com');
    })
});
//  Mocking the Modules with JEST
jest.mock('../user', ()=>({
    user:{
        getRole: jest.fn().mockReturnValue('guest'),
        getName: jest.fn().mockReturnValue('peter'),
        getEmail: jest.fn().mockReturnValue('john@example.com')
    }
}));

// console.log(user)