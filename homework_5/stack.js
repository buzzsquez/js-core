class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(maxQuantity = 10) {
    if (typeof maxQuantity !== 'number' || maxQuantity <= 0) {
      throw new Error('Quantity is not a valid number');
    }

    this.top = null;
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

    const newNode = new Node(elem);

    newNode.next = this.top;
    this.top = newNode;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      throw new Error('Stack is empty');
    }

    if (this.top !== null) {
      const topItem = this.top.data;
      this.top = this.top.next;
      this.count--;

      return topItem;
    }

    return null;
  }

  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.data;
  }

  isEmpty() {
    return this.count === 0;
  }

  toArray() {
    if (this.top === null) {
      return null;
    }

    const arr = [];
    let current = this.top;

    for (let i = 0; i < this.count; i++) {
      arr[i] = current.data;
      current = current.next;
    }

    return arr.reverse();
  }
}

module.exports = { Stack };
