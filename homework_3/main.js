Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") {
    throw new Error("Callback is not a function");
  }

  const context = thisArg || this;
  const result = [];

  for (let i = 0; i < this.length; i++) {
      const current = callbackFn.call(context, this[i], i, this);

      if (current) {
        result.push(this[i]);
      }
  }

  return result;
};

const arr = [1, 2, 3, , 5, 6, 7, , ,10];

function isBigEnough(value) {
  return value >= 3;
}
const result = arr.myFilter(isBigEnough)
console.log(result)

//----------------------------------------------------------------------------------

function createDebounceFunction(callback, ms) {
  let timer = null;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, ms);
  };
}
