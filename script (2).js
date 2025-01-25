
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
 
  currentInput += number;
  updateDisplay(currentInput);
}

function performOperation(op) {
  if (currentInput === '' && previousInput === '') return;

  if (currentInput !== '') {
    if (previousInput === '') {
      previousInput = currentInput;
    } else {
      previousInput = calculateIntermediateResult();
    }
  }
  operator = op;
  currentInput = '';
  updateDisplay('');
}

function calculate() {
  if (currentInput === '' || operator === '' || previousInput === '') return;

  currentInput = calculateIntermediateResult();
  operator = '';
  previousInput = '';
  updateDisplay(currentInput);
}

function calculateIntermediateResult() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(curr)) return '';
  switch (operator) {
    case '+':
      return (prev + curr).toString();
    case '-':
      return (prev - curr).toString();
    case '*':
      return (prev * curr).toString();
    case '/':
      return curr !== 0 ? (prev / curr).toString() : 'Error';
    default:
      return '';
  }
}

function clearDisplay() {
 
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
}

function updateDisplay(value) {
 
  const displayElement = document.getElementById('display');
  displayElement.value = value || '0';
}
