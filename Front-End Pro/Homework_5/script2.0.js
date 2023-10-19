'use strict'

alert('Welcome to calculator!');

const action = prompt('What action you want to do? \nAdd \nDiff \nMult \nDiv \nSqrt \nSin \nCos');
if (action === null) {
  alert('Good bye, see you later.');
} else {
  switch (action) {
    case 'Add':
    case 'Diff':
    case 'Mult':
    case 'Div':
    case 'Sqrt':
    case 'Sin':
    case 'cCos':
      // Спитати чило або числа в залежності від операції
      const num1 = Number(prompt('Enter the first number'));
      if (!isNaN(num1)) {
        let result;
        if (action === 'Sqrt') {
          result = Math.sqrt(num1);
          alert(`Result of ${action} operation: ${result}`);
        } else {
          const num2 = Number(prompt('Enter the second number'));
          if (!isNaN(num2)) {
            switch (action) {
              case 'Add':
                result = num1 + num2;
                break;
              case 'Diff':
                result = num1 - num2;
                break;
              case 'Mult':
                result = num1 * num2;
                break;
              case 'Div':
                result = num1 / num2;
                break;
              case 'Sin':
                result = Math.sin(num1);
                break;
              case 'Cos':
                result = Math.cos(num1);
                break;
            }
            alert(`Result of ${action} operation: ${result}`);
          } else {
            alert('This is a bad second number. Good bye.');
          }
        }
      } else {
        alert('This is a bad first number. Good bye.');
      }
      break;
    default:
      alert('Good bye, see you later.');
  }
}