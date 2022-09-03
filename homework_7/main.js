class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = null;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  reverseNumber() {
    this.currentOperand = -this.currentOperand;
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.toString().includes('.')) {
      return;
    }

    if (this.currentOperand.toString().length > 12) {
      const slicedDisplayOut = this.currentOperand.toString().slice(0, 13);
      this.currentOperand = slicedDisplayOut;

      return this.currentOperand;
    }

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') {
      return;
    }

    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    let computation;

    if (isNaN(prev) || isNaN(current)) {
      return;
    }

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case 'x':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }

    if (computation.toString().length > 12) {
      const final = computation.toString().slice(0, 13);
      this.currentOperand = final;

      return this.currentOperand;
    }

    this.currentOperand = computation;
    this.operation = null;
    this.previousOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;

    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits;
    }

    if (decimalDigits != null) {
      if (decimalDigits.length > 8) {
        const roundDecimalDigits = Math.ceil(parseFloat(decimalDigits));
        const stringRoundDecimalDigit = roundDecimalDigits.toString();
        const finalDecimalDigits = stringRoundDecimalDigit.slice(0, 8);

        return `${integerDisplay}.${finalDecimalDigits}`;
      }

      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }
}

const numberButtons = document.querySelectorAll('.data-number');
const operationButtons = document.querySelectorAll('.data-operation');
const equalButton = document.querySelector('.equal');
const deleteButton = document.querySelector('.backspace');
const allClearButton = document.querySelector('.cancel');
const reverseButton = document.querySelector('.plus-minus');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

reverseButton.addEventListener('click', () => {
  calculator.reverseNumber();
  calculator.updateDisplay();
});
