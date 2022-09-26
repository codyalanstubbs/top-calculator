function addTwoNumbers(a, b) {
    a = +a, b = +b;
    return a + b;
}

function subtractTwoNumbers(a, b) {
    a = +a, b = +b;
    return a - b;
}

function multiplyTwoNumbers(a, b) {
    a = +a, b = +b;
    return a * b;
}

function divideTwoNumbers(a, b) {
    a = +a, b = +b;
    return a / b;
}

function operator(number1, number2, operator) {
    if (operator === "+") {
        addTwoNumbers(number1, number2);
    } else if (operator === "-") {
        subtractTwoNumbers(number1, number2);
    } else if (operator === "*") {
        multiplyTwoNumbers(number1, number2);
    } else if (operator === "/") {
        divideTwoNumbers(number1, number2);
    } 
}