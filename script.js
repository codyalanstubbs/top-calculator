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

function useOperator(number1, number2, operator) {
    if (operator === "+") {
        return addTwoNumbers(number1, number2);
    } else if (operator === "-") {
        return subtractTwoNumbers(number1, number2);
    } else if (operator === "*") {
        return multiplyTwoNumbers(number1, number2);
    } else if (operator === "/") {
        return divideTwoNumbers(number1, number2);
    } 
}