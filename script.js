const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';

function clear() {
  num1 = '';
  num2 = '';
  operator = '';
  display.value = '';
}

function calculate() {
  let result = 0;
  switch(operator) {
    case '+':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = '';
  }
  display.value = result;
  num1 = result;
  num2 = '';
  operator = '';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value >= '0' && value <= '9') {
      if (operator === '') {
        num1 += value;
      } else {
        num2 += value;
      }
      display.value += value;
    } else if (value === '.') {
      if (operator === '' && !num1.includes('.')) {
        num1 += value;
        display.value += value;
      } else if (operator !== '' && !num2.includes('.')) {
        num2 += value;
        display.value += value;
      }
    } else if (value === 'C') {
      clear();
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (operator === '' && num1 !== '') {
        operator = value;
        display.value += value;
      } else if (operator !== '' && num1 !== '' && num2 !== '') {
        calculate();
        operator = value;
        display.value += value;
      }
    } else if (value === '=') {
      if (num1 !== '' && num2 !== '' && operator !== '') {
        calculate();
      }
    }
  });
});