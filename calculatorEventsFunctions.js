const currentResult = document.querySelector('.result');
const currentCalculation = document.querySelector('.calculation');
const equals = document.querySelector('#equals');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

let number1;
let operator;
let number2;

numberButtons.forEach(numberBtn => {
    numberBtn.addEventListener('click', (e) => {
        if (number1 === undefined) {
            number1 = numberBtn.id.toString();
            currentResult.textContent = number1;
        } else if (operator !== undefined) {
            if (number2 === undefined) {
                number2 = numberBtn.id.toString();
                currentResult.textContent = number2;
            }
            else {
                number2 += (numberBtn.id.toString());
                currentResult.textContent = number2;
            }
        }
        else {
            number1 += (numberBtn.id.toString());
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