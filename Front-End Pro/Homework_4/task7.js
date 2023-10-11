let number = prompt("введіть своє трьохзначне число")
let digits = number.split('').map(Number);

if (digits[0] === digits[1] && digits[1] === digits[2]) {
    console.log('Всі цифри однакові.');
} else if(digits[0] === digits[1] || digits[1] === digits[2] || digits[0] === digits[2]) {
    console.log('Серед цифр є хоча б одна однакова.');
} else {
    console.log('Серед цифр немає однакових.');
}