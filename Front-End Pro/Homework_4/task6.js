let number = prompt("Введіть своє трьохзначне число")
let digits = number.split('').map(Number);
let sumOfDigits = digits.reduce((acc, curr) => acc + curr, 0);

if (sumOfDigits % 2 === 0) {
    console.log('Сума цифр є парною.');
} else {
    console.log('Сума цифр не є парною.');
}

if (sumOfDigits % 5 === 0) {
    console.log('Сума цифр кратна числу 5.');
} else {
    console.log('Сума цифр не кратна числу 5.');
}

const productOfDigits = digits.reduce((acc, curr) => acc * curr, 1);

if (productOfDigits > 100) {
  console.log('Добуток цифр більше 100.');
} else {
  console.log('Добуток цифр не більше 100.');
}