// Задачка:
// создай class Calculator, с методом calculate который в качестве параметров принимает 1й аргумент, операцию и 2й аргумент
// доступные операции сложение, вычитание, умножение и деление

export class Calculator {
    calculate(a: number | string, operation: string, b: number | string): number | string {
        const validOperatorList = ['*', '/', '+', '-'];
        const validFirstNum = !isNaN(+a);
        const validSecondNum = !isNaN(+b);
        const validOperator = validOperatorList.includes(operation);

        if (!validFirstNum || !validSecondNum) {
            throw new Error('Only numbers can be counted');
        }

        if (!validOperator) {
            throw new Error('Next operators are supported:/ * + -');
        }


        switch (operation) {
            case '+':
                return +a + +b;
            case '-':
                return +a - +b;
            case '*':
                return +a * +b;
            default:
                return +a / +b;
        }
    };
}
