const ERROR_MESSAGE = 'Некорректный ввод!';
const MIN_NUMERAL_SYSTEM_VALUE = 2;
const MAX_NUMERAL_SYSTEM_VALUE = 36;

const firstValue = Number(prompt('Введите первое значение'));
const secondValue = Number(prompt('Введите второе значение'));

if (isNaN(firstValue) || isNaN(secondValue)
  || !(secondValue >= MIN_NUMERAL_SYSTEM_VALUE && secondValue <= MAX_NUMERAL_SYSTEM_VALUE)) {
  console.log(ERROR_MESSAGE);
} else {
  console.log(+(firstValue).toString(secondValue));
}

// -----------------------------------------------------------

const ERROR_MESSAGE = 'Некорректный ввод!';

const firstValue = Number(prompt('Введите первое значение'));

if (isNaN(firstValue)) {
  console.log(ERROR_MESSAGE);
} else {
  const secondValue = Number(prompt('Введите второе значение'));
  if (isNaN(secondValue) || secondValue === 0) {
    console.log(ERROR_MESSAGE);
  } else {
    console.log(`Ответ: ${firstValue + secondValue}, ${firstValue / secondValue}.`);
  }
}
