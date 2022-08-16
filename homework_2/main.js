function makeObjectDeepCopy(object) {
  const clonedObject = {};

  for (let key in object) {
    if (object[key] instanceof Object) {
      clonedObject[key] = makeObjectDeepCopy(object[key]);
      continue;
    }
    clonedObject[key] = object[key];
  }

  return clonedObject;
}

//------------------------------------------------------------------

function selectFromInterval(arrayOfNumbers, firstRange, secondRange) {
  const isNotValidRange = typeof firstRange !== "number" || typeof secondRange !== "number";
  
  const isNotValidArray = !arrayOfNumbers.every(Number);

  if (!Array.isArray(arrayOfNumbers)) {
    throw new Error(`${arrayOfNumbers} is not array`);
  } else if (isNotValidArray) {
    throw new Error(`Invalid value in array`);
  } else if (isNotValidRange) {
    throw new Error(`Invalid range value`);
  }

  const newArray = [];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (firstRange > secondRange) {
      if (arrayOfNumbers[i] <= firstRange && arrayOfNumbers[i] >= secondRange) {
        newArray.push(arrayOfNumbers[i]);
      }
    } else if (arrayOfNumbers[i] <= secondRange && arrayOfNumbers[i] >= firstRange) {
      newArray.push(arrayOfNumbers[i]);
    }
  }

  return newArray;
}

//-------------------------------------------------------------------------------------------

const myIterable = {
  from: 1,
  to: 6,
};

myIterable[Symbol.iterator] = function () {
  let current = this.from;
  let last = this.to;

  const isNotValid = current > last || !current || !last || isNaN(current) || isNaN(last);

  if (isNotValid) {
    throw new Error(`Error values of 'from' or 'to'`);
  }

  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};