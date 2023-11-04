'use strict'
const string = prompt('Enter your key');

function toHash(string) {
    let i;
    let hash = 0;

    if (string.length === 0 ) return  hash;

    for (i = 0; i < string.length; i++) {
        let char;
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash ) + char;
        hash = hash & hash;
    }

    return hash;
}

console.log(toHash(string));
