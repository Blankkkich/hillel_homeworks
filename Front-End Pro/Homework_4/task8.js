let num = prompt("Введіть ваше шестичзначне число");
let reverseNum = num.split('').reverse().join('');

if (reverseNum === num){
    console.log(num + " " + "є дзеркальним");
} else {
    console.log(num + " " + "не є дзеркальним");
}


