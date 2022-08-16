Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function") {
    throw new Error("Callback is not a function");
  }

  const context = thisArg || this;
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const current = callbackFn.call(context, this[i], i, this);

      if (current) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

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
