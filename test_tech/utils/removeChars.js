function removeChars(string, chars) {
    let result = '';

    for (const char of string) {
        if (!chars.includes(char)) result += char;
    }

    return result
}

const userString = prompt('enter your strings');
const userChars = prompt('enter some chars without spaces, like this :q,e,t,g,f,s').split(',');
console.log(removeChars(userChars, userString));