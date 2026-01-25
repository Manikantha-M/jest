import Calculator from '../calculator';

describe('Calculator', () => {
    it('initial value zero', ()=> {
        const calculator = new Calculator();
        expect(calculator.value).toBe(0)
    });
    it('should add number to the current value', ()=> {
        const calculator = new Calculator();
        expect(calculator.add(5)).toBe(5)
    });
    it('should subtract number from the current value', ()=> {
        const calculator = new Calculator();
        expect(calculator.subtract(5)).toBe(-5)
    });
     it('should say positve or negative value', ()=> {
        const calculator = new Calculator();
        expect(calculator.isPositive()).not.toBeTruthy();
    });
    it('should say positve', ()=> {
        const calculator = new Calculator();
        calculator.add(1);
        expect(calculator.isPositive()).toBeTruthy();
    });
})