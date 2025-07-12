const Node = require("./nodeClass");

class Queue {
  constructor() {
    this.front = null; // points to the front of the queue
    this.rear = null;  // points to the rear(end) of the queue
  }

  // Add an element to the end of the queue
  enqueue(data) {
    const newNode = new Node(data);

    if (this.rear) {
      this.rear.next = newNode;
    } else {
      this.front = newNode; // if queue was empty
    }

    this.rear = newNode;
  }

  // Remove and return the element from the front
  dequeue() {
    if (!this.front) return null;

    const removedValue = this.front.data;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null; // queue is now empty
    }

    return removedValue;
  }

  // Peek at the front element
  peek() {
    return this.front ? this.front.data : null;
  }

isEmpty() {
  return this.front === null;
}


  printQueue() {
    let current = this.front;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log("Queue - Front:", result.join(' <- '));
  }
}

module.exports = Queue;
