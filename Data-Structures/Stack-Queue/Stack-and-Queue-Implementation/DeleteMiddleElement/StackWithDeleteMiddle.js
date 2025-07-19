const Stack = require("../stack");

class StackWithDeleteMiddle extends Stack {
  deleteMiddle() {
    const n = this.size();
    if (n === 0) return;
    if (n === 1) {
      this.pop();
      return;
    }

    const middle = n % 2 === 0 ? (n / 2) - 1 : Math.floor(n / 2);
    const tempStack = [];

    // Pop until just above the lower middle
    for (let i = 0; i < n - middle - 1; i++) {
      tempStack.push(this.pop());
    }

    this.pop(); // Remove the lower middle element

    // Push everything back in correct order
    while (tempStack.length > 0) {
      this.push(tempStack.pop());
    }
  }
}

module.exports = StackWithDeleteMiddle;