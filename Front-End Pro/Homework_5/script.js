'use strict'

alert("Welcome to calculator!");
let action = prompt("What action you want to do?\n" 
    + "\nAdd" + "\nDiff" + "\nMult" + "\nDiv"
    + "\nSqrt" + "\nSin" + "\nCos");

if (action === null || NaN || undefined) {
    alert("Goodbye, see you later.");
} else {
    if (action === "Add" || action === "Diff" || action === "Mult" || action === "Div" ||action === "Cos" || action === "Sin"){
        let num1 = Number(prompt("Enter first number"));
        let num2 = Number(prompt("Enter second number"));
        if (num1 && num2 === NaN || undefined || null) {
            alert("Invalid number. Good bye!")
        }
        if(action === "Add"){
            let result = num1 + num2;
            alert("Sum of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Diff"){
            let result = num1 - num2;
            alert("Substraction of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Mult"){
            let result = num1 * num2;
            alert("Product of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Div"){
            if (num2 !== 0) {
                let result = num1 / num2;
                alert("Quotient of " + num1 + " and " + num2 + " is " +result);
            } else {
                alert('Error: Division by zero is not allowed. Good bye!');
            }
        }
    }
}
