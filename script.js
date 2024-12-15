const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = 0;
let secondNum = 0;
let operator = '';

function operate(firstNum, secondNum, operator) {

    let result = 0;
    switch (operator) {
        case '+':
            result = add(firstNum, secondNum);
            break;
        case '-':
            result = subtract(firstNum, secondNum);
            break;
        case '*':
            result = multiply(firstNum, secondNum);
            break;
        case '/':
            result = divide(firstNum, secondNum);
            break;
        default:
            break;
    }

    return result;

}

let userClicks = [];

function addToUserClicks() {
    userClicks.push(this.innerText);
    populateDisplay();
}

const buttons = Array.from(document.querySelectorAll('.digit, .operator'));
buttons.map((button) => button.addEventListener('click', addToUserClicks));


const calculatorDisplay = document.querySelector('.calculator-display');
function populateDisplay() {
    calculatorDisplay.innerText = userClicks.join('');
}

