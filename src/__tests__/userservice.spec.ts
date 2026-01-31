import { UserService } from "../userservice";
import { DatabaseService } from "../databaseservice";
import { NewsletterService } from "../newsletterservice";

describe('UserService', () => {
    const mockName = 'John Doe';
    const mockEmail = 'test@test.com';
    const mockUser = {
        name: mockName,
        email: mockEmail,
    };
    // it('should register user and return success message', async() => {
    //     const userService = new UserService(mockName, mockEmail);
    //     const result = await userService.registerUser();
    //     expect(result).toEqual({"msg": "user registered successfully"})
    // });

    const databaseService:DatabaseService = new DatabaseService();
    const newsletterservice:NewsletterService = new NewsletterService();
    let createUserSpy:jest.SpyInstance;
    let subscribeUserSpy:jest.SpyInstance;

    beforeEach(()=>{
        createUserSpy = jest.spyOn(databaseService, 'createUser');
        subscribeUserSpy = jest.spyOn(newsletterservice, 'subscribeUser');
    });
    afterEach(()=>{
        jest.restoreAllMocks();
    });
    it('should register user and return success message', async()=>{
        const userService = new UserService(mockName, mockEmail, databaseService, newsletterservice);
        createUserSpy.mockResolvedValue(mockUser);
        subscribeUserSpy.mockResolvedValue({msg:'success'});
        const result = await userService.registerUser();
        expect(createUserSpy).toHaveBeenLastCalledWith(mockName, mockEmail);
        expect(subscribeUserSpy).toHaveBeenLastCalledWith(mockUser);
        expect(result).toEqual({"msg": "user registered successfully"})
    });
});