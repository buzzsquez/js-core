function concatStrings(string, separator) {
  let sumOfWords = string;
  const separatorValue = typeof separator === 'string' ? separator : '';

  function getAllWords(nextStr) {
    if (typeof nextStr !== 'string') {
      return sumOfWords;
    }

    sumOfWords += separatorValue + nextStr;

    return getAllWords;
  }

  return getAllWords;
}

//---------------------------------------------------------------------------------------

function checkIsValid(value) {
  const isInvalidValues = typeof value !== 'number' || isNaN(value) || !isFinite(value);

  if (isInvalidValues) {
    throw new Error('Invalid type of argument');
  }

  return true;
}

class Calculator {
  constructor() {
    const [value1, value2] = arguments;

    if (arguments.length !== 2) {
      throw new Error('Invalid number of arguments');
    }

    checkIsValid(value1);
    checkIsValid(value2);

    this.value1 = value1;
    this.value2 = value2;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    checkIsValid(num);

    return (this.value1 = num);
  }

  setY(num) {
    checkIsValid(num);

    return (this.value2 = num);
  }

  logSum() {
    return this.value1 + this.value2;
  }

  logMul() {
    return this.value1 * this.value2;
  }

  logSub() {
    return this.value1 - this.value2;
  }

  logDiv() {
    if (this.value2 === 0) {
      throw new Error("you can't divide by zero");
    }

    return this.value1 / this.value2;
  }
}