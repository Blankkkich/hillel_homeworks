class SuperMath {
    constructor() {
    }

    check(obj) {
        const { X, Y, symbol} = obj;

        if (!this.isValidOperator(symbol)) {
            console.log("Неправильний оператор. Введіть +, -, /, *, %.");
            this.input(obj);
            return;
        }

        const result = this.calculate(X, Y, symbol);

        console.log(`Результат операції ${X} ${symbol} ${Y} = ${result}`);
    }

    input(obj) {
        const newX = parseFloat(prompt("Введіть нове значення X:"));
        const newY = parseFloat(prompt("Введіть нове значення Y:"));
        const newSymbol = prompt("Введіть новий оператор (+, -, /, *, %):");

        obj.X = isNaN(newX) ? obj.X : newX;
        obj.Y = isNaN(newY) ? obj.Y : newY;
        obj.znak = this.isValidOperator(newSymbol) ? newSymbol : obj.znak;

        this.check(obj);
    }

    isValidOperator(operator) {
        const validOperators = ["+", "-", "*", "/", "%"];
        return validOperators.includes(operator);
    }

    calculate(X, Y, symbol) {
        switch (symbol) {
            case "+":
                return X + Y;
            case "-":
                return X - Y;
            case "*":
                return X * Y;
            case "/":
                return X / Y;
            case "%":
                return X % Y;
            default:
                return NaN;
        }
    }
}

const obj = { X: 22, Y: 20, symbol: "-" };
const superMath = new SuperMath();
superMath.check(obj);
