import fs from 'fs';
// Mocking external and node built-in modules

jest.mock('fs');

it('should mock file reading', ()=> {
    const mockContent = 'file content';
    (fs.readFileSync as jest.Mock).mockReturnValue(mockContent);
    const content = fs.readFileSync('test.txt', 'utf-8');
    expect(content).toBe(mockContent);
});