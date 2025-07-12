const Node = require("./nodeClass");

class Stack {
  constructor() {
    this.top = null; // top pointer of the stack
  }

  // add new elemnt
  push(data) {
    const newNode = new Node(data);

    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (!this.top) return "cannot pop - stack is empty";

    const popped = this.top.data;

    this.top = this.top.next;

    return popped;
  }

  peek() { 
    return this.top ? this.top.data : null;
  }

  isEmpty() {
    return this.top === null;
  }

  printStack() {
    let current = this.top;

    const result = [];

    while (current) {
      result.push(current.data);

      current = current.next;
    }

    console.log("Stack - Top:", result.join(" -> "));
  }
}

module.exports = Stack;
