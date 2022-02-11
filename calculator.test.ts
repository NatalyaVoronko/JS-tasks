import {Calculator} from "./Calculator";

describe('Test calculator', () => {
    const calculator = new Calculator();

    test.each([
        [2, '+', 2, 4],
        [4, '-', '2', 2],
        ['4', '*', '2', 8],
        [4, '/', '2', 2]
    ])('return $expected for operations with $a and $b', (a: number | string, operation: string, b: number | string, expected: number | string) => {
        expect(calculator.calculate(a, operation, b)).toBe(expected);

    })

    test('Invalid operator', () => {
        expect(() => {
                calculator.calculate(1, 'f', 3);
            }
        ).toThrowError(new Error('Next operators are supported:/ * + -'));
    })

    test('Not a number', () => {
        expect(() => {
                calculator.calculate('s', '+', 3);
            }
        ).toThrowError(new Error('Only numbers can be counted'));
    })

});
