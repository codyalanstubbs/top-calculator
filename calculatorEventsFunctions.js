const currentResult = document.querySelector('.result');
const currentCalculation = document.querySelector('.calculation');
const equals = document.querySelector('#equals');
const numberButtons = document.querySelectorAll('.number');
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
