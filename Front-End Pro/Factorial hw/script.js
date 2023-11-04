'use strict'
const num = Number(prompt("Enter your number"))
function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

const result = factorial(num);
alert(result);