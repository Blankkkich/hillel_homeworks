let num = Number(prompt("введіть ваше двозначне число"));
let firstDigit = Math.floor(num / 10); //не знаю чи можна без Math(), тільки так вийшло
let secondDigit = num % 10;

if (firstDigit < secondDigit) {
    console.log(firstDigit + " " + "більше за" + " " + secondDigit);
} else if (firstDigit > secondDigit) {
    console.log(secondDigit + " " + "більше за" + " " + firstDigit);
} else {
    console.log("Числа рівні");
}