import {getBookDisplayTitle} from '../bookservice';

describe('getBookDisplayTitle', ()=>{
    it('should format the book title correctly', ()=> {
        const dummyBook = {
            title: 'Deep Work',
            author: 'Cal Newport'
        } as any;
        const result = getBookDisplayTitle(dummyBook);
        expect(result).toBe('Deep Work by Cal Newport');
    })
})