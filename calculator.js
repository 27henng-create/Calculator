const display = document.getElementsByClassName("display");
const clearbtn = document.getElementsByClassName("clear");

let cureentIntput = ''
let currentOperation = ''
let previousInput = '';

function appendNumber(number) {
    cureentIntput += number;
    updateDisplay();
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') calculate();
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result = null;
    const prev = parseFloat(previousInput)
    const curr = parseFloat(currentInput);
    switch(currentOperation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case 'x': result = prec * curr; break;
        case '/': result = curr !== 0 ? prev / curr : 'Error Cannot Divide by Zero'; break;
        default: return;
    }
    
    currentInput = result.toString();
    currentOPeration = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementbyId('display').value =
    `${previousInput} ${currentOperation} ${currentInput}`;
}
