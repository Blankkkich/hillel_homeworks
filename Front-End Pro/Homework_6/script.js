alert('Welcome to calculator!');

let startCalculation = true;
const history = [];

calculator: do {
        const operation = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos${history.length ? ', History' : ''}`, 'Add');

        if (operation) {
            const normalizeOperation = operation.toLowerCase();

            switch (normalizeOperation) {
                case 'add':
                case 'diff':
                case 'mult':
                case 'div': {

                    //TODO не работает, пересмотреть занятие и доделать
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
                            sum(firstNumber,secondNumber, history);
                            break;
                        }
                        case 'diff': {
                            diff(firstNumber,secondNumber,history);
                            break;
                        }
                        case 'mult': {
                            mult(firstNumber,secondNumber,history);
                            break;
                        }
                        case 'diverse': {
                            diverse(firstNumber,secondNumber,history);
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
                    //TODO доробити мат функції
                    switch (normalizeOperation) {
                        case 'sqrt': {
                            if (number >= 0) {
                                const notification = `Root of ${number} is ${Math.sqrt(number)}`;
                                history.push(notification);
                                alert(notification);
                                break;
                            }
                            alert('Number must to be positive');
                            break;
                        }
                        case 'sin': {
                            const notification = `Sin of ${number} is ${Math.sin(number)}`;
                            history.push(notification);
                            alert(notification);
                            break;
                        }
                        case 'cos': {
                            const notification = `Cos of ${number} is ${Math.cos(number)}`;
                            history.push(notification);
                            alert(notification);
                            break;
                        }
                        default:
                            alert('Ups somethings went wrong');
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
                default: {
                    alert('I don\'t recognize your operation. Please choose valid operation.');
                    break;
                }
            }
        } else {
            startCalculation = false
            alert('Good by, see you later.')
        }
} while (startCalculation)



