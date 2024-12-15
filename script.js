let firstNum = '';
let secondNum = '';
let currentOperator = null;
let shouldResetScreen = false;

const digitBtn = document.querySelectorAll('.digit');
const operatorBtn = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const lastDisplay = document.querySelector('.lastDisplay');
const currentDisplay = document.querySelector('.currentDisplay');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            return null;
    }
}

digitBtn.forEach((btn) =>
    btn.addEventListener('click', () => appendDigit(btn.textContent))
);

operatorBtn.forEach((btn) =>
    btn.addEventListener('click', () => setOperation(btn.textContent))
);

equalBtn.addEventListener('click', evaluate)

function appendDigit(digit) {
    if (shouldResetScreen) {
        resetDisplay();
    }
    currentDisplay.textContent += digit;
}


function resetDisplay() {
    currentDisplay.textContent = '';
    shouldResetScreen = false;
}


function setOperation(operator) {
    if (currentOperator !== null) {
        evaluate();
    }

    firstNum = parseFloat(currentDisplay.textContent);
    currentOperator = operator;
    lastDisplay.textContent = `${firstNum} ${currentOperator}`;
    shouldResetScreen = true;
}

function evaluate() {
    secondNum = parseFloat(currentDisplay.textContent);
    const result = operate(firstNum, secondNum, currentOperator);
    currentDisplay.textContent = result;
    lastDisplay.textContent = `${firstNum} ${currentOperator} ${secondNum} = ${result}`;
    currentOperator = null;

}


