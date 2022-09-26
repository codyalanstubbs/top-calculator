const currentResult = document.querySelector('.result');
const currentCalculation = document.querySelector('.calculation');
const btnEquals = document.querySelector('#equals');
const btnClearEverything = document.querySelector('#clearEverything');
const btnClearResult = document.querySelector('#clearResult');
const btnBackspace = document.querySelector('#backspace');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const negPos = document.querySelector('.negPos');
const dot = document.querySelector('.dot');

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
        } else if (currentCalculation.textContent !== undefined && currentCalculation.textContent !== '') {
            number1 = numberBtn.id.toString();
            currentResult.textContent = number1;
            currentCalculation.textContent = '';
        } else {
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

btnEquals.addEventListener('click', () => {
    if (operator === undefined || number2 === undefined) {

    } else {
        currentCalculation.textContent = currentCalculation.textContent + number2 + ' = ';
        currentResult.textContent = useOperator(+number1, +number2, operator);
        number1 = currentResult.textContent;
        operator = undefined;
        number2 = undefined;
    }
})

btnBackspace.addEventListener('click', () => {
    if (number2 !== undefined) {
        currentResult.textContent = currentResult.textContent.slice(0, -1);
        number2 = currentResult.textContent;
    } else {
        currentResult.textContent = currentResult.textContent.slice(0, -1);
        number1 = currentResult.textContent;
    }
})

btnClearResult.addEventListener('click', () => {
    currentResult.textContent = 0;
})

btnClearEverything.addEventListener('click', () => {
    currentResult.textContent = 0;
    currentCalculation.textContent = '';
    number1 = undefined;
    operator = undefined;
    number2 = undefined;
})

dot.addEventListener('click', () => {
    if (currentResult.textContent.includes('.')) {

    } else {
        if (number2 !== undefined) {
            currentResult.textContent += ".";
            number2 = +currentResult.textContent;
        } else {
            currentResult.textContent += ".";
            number1 = +currentResult.textContent;
        }
    }
})

negPos.addEventListener('click', () => {

        if (number2 !== undefined) {
            number2 = -number2;
            currentResult.textContent = number2;
        } else {
            number1 = -number1;
            currentResult.textContent = number1;
        }
})
