const display = document.getElementsByClassName("display");
const clearbtn = document.getElementsByClassName("clear");

let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    addEventListener("click", () => appendNumber);
    currentInput += number;
    updateDisplay(previousInput, currentOperation, currentInput);
}

const addButton = document.getElementById('add');
addButton.addEventListener("click", () => {
    currentOperation = '+'
    previousInput = curentInput
    console.log(currentOperation)
});

const minusButton = document.getElementById('minus');
minusButton.addEventListener("click", () => {
    currentOperation = '-'
    previousInput = currentInput
    console.log(currentOperation)
});

const multButton = document.getElementById('multiply');
multButton.addEventListener("click", () => {
    currentOperation = 'x'
    previousInput = currentInput
    console.log(currentOperation)
});

const divButton = document.getElementById('divide');
divButton.addEventListener("click", () => {
    currentOperation = '/'
    previousInput = currentInput
    console.log(currentOperation)
});

const oneButton = document.getElementById('one');
oneButton.addEventListener("click", () => {
    currentInput += '1'
    console.log(currentInput)
});

const twoButton = document.getElementById('two');
twoButton.addEventListener("click", () => {
    currentInput += '2'
    console.log(currentInput)
});

const threeButton = document.getElementById('three');
threeButton.addEventListener("click", () => {
    currentInput += '3'
    console.log(currentInput)
});

const fourButton = document.getElementById('four');
fourButton.addEventListener("click", () => {
    currentInput += '4'
    console.log(currentInput)
});

const fiveButton = document.getElementById('five');
fiveButton.addEventListener("click", () => {
    currentInput += '5'
    console.log(currentInput)
});

const sixButton = document.getElementById('six');
sixButton.addEventListener("click", () => {
    currentInput += '6'
    console.log(currentInput)
});

const sevenButton = document.getElementById('seven');
sevenButton.addEventListener("click", () => {
    currentInput += '7'
    console.log(currentInput)
});

const eightButton = document.getElementById('eight');
eightButton.addEventListener("click", () => {
    currentInput += '8'
    console.log(currentInput)
});

const nineButton = document.getElementById('nine');
nineButton.addEventListener("click", () => {
    currentInput += '9'
    console.log(currentInput)
});

const zeroButton = document.getElementById('zero');
zeroButton.addEventListener("click", () => {
    currentInput += '0'
    console.log(currentInput)
});

const decimalButton = document.getElementById('decimal');
decimalButton.addEventListener("click", () => {
    currentInput += '.'
    console.log(currentInput)
});

const negativeButton = document.getElementById('negative');
negativeButton.addEventListener("click", () => {
    currentInput += '(-)'
    console.log(currentInput)
});

// function appendOperation(operation) {
//     if (currentInput === '') return;
//     if (previousInput !== '') calculate();
//     currentOperation = operation;
//     previousInput = currentInput;
//     currentInput = '';
//     updateDisplay();
// }

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
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay(previousInput, currentOperation, currentInput) {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    updateDisplay();
}

function updateDisplay(previousInput, currentOperation, currentInput) {
    document.getElementsByClassName('display').value =
    `${previousInput} ${currentOperation} ${currentInput}`;
}

