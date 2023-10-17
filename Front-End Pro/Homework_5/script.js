'use strict'

alert("Welcome to calculator!");
const action = prompt("What action you want to do?\n" 
    + "\nAdd" + "\nDiff" + "\nMult" + "\nDiv"
    + "\nSqrt" + "\nSin" + "\nCos");

if (action === null || NaN || undefined) {
    alert("Goodbye, see you later.");
} else {
    if (action === "Add" || action === "Diff" || action === "Mult" || action === "Div" ||action === "Cos" || action === "Sin"){
        const num1 = Number(prompt("Enter first number"));
        const num2 = Number(prompt("Enter second number"));
        if (num1 && num2 === NaN || undefined || null) {
            alert("Invalid number. Good bye!")
        }
        if(action === "Add"){
            const result = num1 + num2;
            alert("Sum of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Diff"){
            const result = num1 - num2;
            alert("Substraction of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Mult"){
            const result = num1 * num2;
            alert("Product of " + num1 + " and " + num2 + " is " +result);
        }else if(action === "Div"){
            if (num2 !== 0) {
                const result = num1 / num2;
                alert("Quotient of " + num1 + " and " + num2 + " is " +result);
            } else {
                alert('Error: Division by zero is not allowed. Good bye!');
            }
        }
    } else if (action ==="Sqrt") {
        let num = Number(prompt("Enter a number"));
        if (num >= 0) {
            const numSqrt = Math.sqrt(num);
            alert("Square root of " + num + " is " + numSqrt)
        } else {
            alert("Error: Square root of a negative number if high math dumbass. Good bye!")
        }
    } else if (action === "Sin" || action === "Cos") {
        const angle = Number(prompt("Enter an angle in degrees"));
        if(!isNaN(angle)){
            if(action === "Sin"){
                const sin = Math.sin(angle * (Math.PI / 180));
                alert("Sine of " + angle + " degrees is " + sin);
            } else if (action === "Cos") {
                var cos = Math.cos(angle * (Math.PI / 180));
                alert("Cosine of " + angle + " degrees is " + cos);
            }
        } else {
            alert("Error: Invalid input for angle.");
        }
    } else {
        alert("Error: Invalid action. Please select one of the specified options.");
    }
}
