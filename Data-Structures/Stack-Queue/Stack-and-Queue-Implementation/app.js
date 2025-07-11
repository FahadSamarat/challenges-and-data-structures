const Stack = require("./stack");
const Queue = require("./queue");

console.log("Stacks");
const stack = new Stack();
stack.push(4);
stack.push(32);
stack.push(22);
stack.push(8);
stack.printStack();
console.log("poping: ", stack.pop());
stack.printStack();
console.log("is stack empty? ", stack.isEmpty());
console.log("peek: ", stack.peek());

console.log("Queues");
const queue = new Queue();
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(12);
queue.enqueue(10);
queue.printQueue();
console.log("dequeue: ", queue.dequeue());
queue.printQueue();
console.log("peek: ", queue.front.next.data);


