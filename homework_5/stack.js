class Stack {
  constructor(maxQuantity = 10) {
    this.items = {};

    if (typeof maxQuantity !== 'number' || maxQuantity <= 0) {
      throw new Error('Quantity is not a valid number');
    }

    this.maxQuantity = maxQuantity;
    this.count = 0;
  }

  static fromIterable(iterable) {
    const isIterable = iterable && Symbol.iterator in Object(iterable);

    if (!isIterable) {
      throw new Error('Non-iterable entity');
    }

    const valueLength = iterable.length;
    const stack = new Stack(valueLength);

    for (let value of iterable) {
      stack.push(value);
    }

    return stack;
  }

  push(elem) {
    if (this.count >= this.maxQuantity) {
      throw new Error('Stack is full');
    }

    this.items[this.count] = elem;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    const deletedItem = this.items[this.count - 1];

    this.count--;
    delete this.items[this.count];

    return deletedItem;
  }

  peek() {
    if (this.count === 0) {
      return null;
    }

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    return Object.values(this.items);
  }
}

module.exports = { Stack };
