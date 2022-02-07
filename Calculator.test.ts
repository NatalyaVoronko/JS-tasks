import {Calculator} from "./Calculator";

describe('Test calculator', () => {
    const calculator = new Calculator();

    test('Test sum', () => {
        expect(calculator.calculate(2, '+', 2)).toBe(4);
    });

    test('Test min', () => {
        expect(calculator.calculate(4, '-', 2)).toBe(2);
    });

    test('Test del', () => {
        expect(calculator.calculate(8, '/', 2)).toBe(4);
    })

    test('Test mul', () => {
        expect(calculator.calculate('4', '*', 4)).toBe(16);
    })

    test('Invalid operator', () => {
        expect(calculator.calculate(4, '%', 4)).toBe('Next operators are supported:/ * + -');
    })

    test('Not a number', () => {
        expect(calculator.calculate('f', '+', 2)).toBe('Only numbers can be counted')
    })


});
