const currentResult = document.querySelector('.result');
const currentCalculation = document.querySelector('.calculation');
const equals = document.querySelector('#equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let number1;
let operator;
let number2;

numberButtons.forEach(number => {
    number.addEventListener('click', (e) => {
        if (number1 === undefined) {
            number1 = number.id.toString();
            currentResult.textContent = number1;
            console.log(number1);
        } else {
            number1 += (number.id.toString());
            currentResult.textContent = number1;
        }
    })
})

operatorButtons.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        if (operator === undefined) {
            operator = operatorBtn.id.toString();
            currentCalculation.textContent = currentResult.textContent + ' ' + operator + ' ';
            currentResult.textContent = '0';
        } else {

        }
    })
})