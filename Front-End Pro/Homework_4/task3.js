let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter first number:"));

if (b % a === 0) {
    console.log(a + " " + "є дільником" + " " +b);
} else {
    console.log(a + " " + " не є дільником" + " " +b);
}

if (a % b === 0) {
    console.log(b + " " + "є дільником" + " " +a);
} else {
    console.log(b + " " + " не є дільником" + " " +a);
}