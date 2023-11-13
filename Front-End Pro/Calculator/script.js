let shouldContinue = true;
const history = [];
const operations = ['add', 'diff', 'mult', 'div', 'sqrt', 'sin', 'cos', 'history', 'history-remove'];

alert('Welcome to calculator');

calculator: do {
    const operation = prompt(
        `What action you want to do?\n\n${transformFirstChar(operations, (el) => {
            if (el === "history") return history.length;
            if (el === 'history-remove') return history.length;
            return true;
        }).join("\n")}`,
        "Add",
    );
    if (operation) {
        const normalizeOperation = operation.toLowerCase();

        switch (normalizeOperation) {
            case 'add':
            case 'diff':
            case 'mult':
            case 'div': {


                const firstUserNumber = getNumber();
                const firstNumber = validateNumber(firstUserNumber);

                if (firstNumber === null) {
                    break calculator
                }

                const secondUserNumber = getNumber();
                const secondNumber = validateNumber(secondUserNumber);

                if (secondNumber === null) {
                    break calculator
                }

                switch (normalizeOperation) {
                    case 'add': {
                        add(firstNumber, secondNumber, history);
                        break;
                    }
                    case 'diff': {
                        diff(firstNumber, secondNumber, history);
                        break;
                    }
                    case 'mult': {
                        mult(firstNumber, secondNumber, history);
                        break;
                    }
                    case 'div': {
                        div(firstNumber, secondNumber, history);
                        break;
                    }
                    default:
                        alert('Ups somethings went wrong');
                        break;
                }

                startCalculations();

                break;
            }
            case 'sqrt':
            case 'sin':
            case 'cos': {

                const userNumber = getNumber();
                const number = validateNumber(userNumber);

                if (number === null) {
                    break calculator
                }

                switch (normalizeOperation) {
                    case "sqrt": {
                        if (number >= 0) {
                            sqrt(number, history);
                            break;
                        }

                        showNotification('custom', `Number mut to be positive`);
                        break;
                    }
                    case "sin": {
                        sin(number, history);
                        break;
                    }
                    case "cos": {
                        cos(number, history);
                        break;
                    }
                    default:
                        showNotification('invalidOperation');
                        break;
                }

                startCalculations();
                break;
            }
            case 'history': {
                if (!history.length) break;
                let historyMessage = 'Your operations: \n\n';
                history.forEach(function (operation, index) {
                    historyMessage += `${index + 1}. ${operation}\n`;
                });
                alert(historyMessage);

                startCalculations();

                break;
            }


            //homework 10
            case 'history-remove': {
                if (!history.length) break;
                if (removeHistory() === null) break;
                removeHistory(history);
                startCalculations();

                break;
            }
            default: {
                alert('I don\'t recognize your operation. Please choose valid operation.');
                break;
            }
        }
    } else {
        shouldContinue = false
        alert('Good by, see you later.')
    }
} while (shouldContinue)



