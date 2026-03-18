const container = document.getElementById("container");
const display = document.getElementsByClassName("display");
const clearbtn = document.getElementsByClassName("clear");

let cureentIntput = '', currentOperation = '', previousInput = '';

function appendNumber() {
    cureentIntput += num;
    updateDisplay();
}

function appendOperation() {
    if (!currentInput) return;
    if (previousInput) calculate();
    currentOperation = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    if (!previousInput || !currentInput) return;
    let result;
    const prev = parseFloat(previousInput), curr = parseFloat(currentInput);
    switch(currentOperation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case 'x': result = prec * curr; break;
        case '/': if (curr === 0) return alert("ERROR Cannot Divide by Zero");
        result = prev / curr; break 
    }
    currentInput = result.toString(display);
    currentOPeration = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = previousInput = currentOperation = '';
    updateDisplay();
}
