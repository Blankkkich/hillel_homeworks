function showNotification(action, payload) {
    switch (action) {
        case 'greeting' :
            alert('Welcome to calculator');
            break
        case 'goodBye' :
            alert('Good bye, see you later');
            break;
        case 'askNumber' :
            alert('Enter your number');
            break;
        case 'invalidNumber' :
            alert('This is bad digit, please enter valid number');
            break;
        case 'custom' :
            alert(payload);
            break;
        default :
            alert("Something went wrong");
            break;
    }
}

function startCalculations () {
    startCalculation = confirm('Do you want continue working with calculator?');
    if (!startCalculation) {
        alert('Good by, see you later.');
    }
}
function getNumber() {
    return prompt('Enter your number');
}
function validateNumber(data) {
    let number;

    do {
        if (data === null) {
            return null;
        }

        if (data === "" || isNaN(parseFloat(data))) {
            showNotification('invalidNumber');
            number = getNumber();

            if (number === null){
                showNotification('goodBye');
                return null;
            }
            continue;
        }

        number = parseFloat(data)
    } while (!Number.isInteger(number));
}

function sum(a, b, history = []) {
    const sum = a + b;
    const operation = 'Sum of ${a} and ${b} is ${a + b}';

    if(history) history.push(operation);

    showNotification('custom', operation);
    return sum;
}

function diff(a, b, history= []) {
    const diff = a - b;
    const operation = `Diff of ${a} and ${b} is ${a - b}`;

    if (history) history.push(operation);

    showNotification('custom', operation);
    return diff;
}

function mult(a, b, history= []) {
    const mult = a * b;
    const operation = `Mult of ${a} and ${b} is ${a * b}`;

    if (history) history.push(operation);

    showNotification('custom', operation);
    return mult;
}

function diverse(a, b, history= []) {
    const div = a * b;
    const operation = `Div of ${a} and ${b} is ${a / b}`;

    if (history) history.push(operation);

    showNotification('custom', operation);
    return div;
}


