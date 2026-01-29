const user = {
    saveProfile: (name: string) => {
        return `saved-${name}`;
    },
    getRole: (userId: number) => {
        if(userId > 10){
            return 'guest';
        }
        return 'admin'
    },
    fetchUserData: async (userId: number) => {
        return {id: userId, name: 'John'}
    }
};

describe('spy mocking examples', ()=> {
    it('uses mockReturnValue for sync functions', ()=>{
        jest.spyOn(user, 'getRole').mockReturnValue('guest')
        const result = user.getRole(9);
        expect(result).toBe('guest')
    });
    it('uses mockResolvedValue for async functions', async() => {
        const mockUser = {id:44, name:'Mock User'}
        jest.spyOn(user, 'fetchUserData').mockResolvedValue(mockUser);
        const result = await user.fetchUserData(34);
        expect(result).toEqual(mockUser)
    });
    it('uses mockimplementation for complex logic', () => {
        jest.spyOn(user, 'saveProfile').mockImplementation((name:string)=>{
            if(!name){
                throw new Error('Name is required')
            };
            return `saved-${name}`;
        });
        expect(() => user.saveProfile('')).toThrow('Name is required');
    });
});
