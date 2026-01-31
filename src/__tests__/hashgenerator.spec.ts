import { HashGenerator } from "../hashgenerator";
describe('HashGenerator', () => {
    const testSalt = 'testSalt123';
    const differentSalt = 'differentSalt123';
    const randomInput = 'randomInput123';
    it('should create a new instance with hash salt', ()=>{
        const hashGenerator = HashGenerator.createHashGenerator(testSalt);
        expect(hashGenerator).toBeDefined();
        expect(hashGenerator).toBeInstanceOf(HashGenerator);
    });
    it('should create a different instances when called multiple times', ()=>{
        const hashGenerator1 = HashGenerator.createHashGenerator(testSalt);
        const hashGenerator2 = HashGenerator.createHashGenerator(testSalt);
        expect(hashGenerator1).not.toBe(hashGenerator2)
    });
    it('should generate URL-Safe hashes', ()=>{
        const hashGenerator = HashGenerator.createHashGenerator(testSalt);
        const hash = hashGenerator.generateHash(randomInput);
        expect(hash).not.toMatch(/[+/=]/);
    });
    it('should generate different hashes with different secrets', ()=>{
        const hashGenerator1 = HashGenerator.createHashGenerator(testSalt);
        const hashGenerator2 = HashGenerator.createHashGenerator(differentSalt);
        const hash1 = hashGenerator1.generateHash(randomInput);
        const hash2 = hashGenerator2.generateHash(randomInput);
        expect(hash1).not.toBe(hash2);
    });
    it('should handle empty input', ()=>{
        const hashGenerator = HashGenerator.createHashGenerator(testSalt);
        const emptyInput = '';
        expect(()=>hashGenerator.generateHash(emptyInput)).not.toThrow()
    });
})