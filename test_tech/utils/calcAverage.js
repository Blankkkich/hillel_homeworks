'use strict'
function calcAverage(arr) {
    const numValues = arr.filter(function (el){
        return typeof el === 'number';
    });

    if (!numValues.length) return 0;

    const sum = numValues.reduce(function (acc, el){
        return acc + el;
    }, 0);

    return  sum / numValues.length;
}

const arr = ["st", 2, "st", 22, "cock", 33];

console.log(calcAverage(arr));