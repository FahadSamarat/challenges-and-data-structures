const Stack = require("./stack");
const Queue = require("./queue");
const StackWithDeleteMiddle = require("./DeleteMiddleElement/StackWithDeleteMiddle");
const MinStack = require("./MinStack/MinStack");

// console.log("Stacks");
// const stack = new Stack();
// stack.push(4);
// stack.push(32);
// stack.push(22);
// stack.push(8);
// stack.printStack();
// console.log("poping: ", stack.pop());
// stack.printStack();
// console.log("is stack empty? ", stack.isEmpty());
// console.log("peek: ", stack.peek());

// console.log("Queues");
// const queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(7);
// queue.enqueue(8);
// queue.enqueue(12);
// queue.enqueue(10);
// queue.printQueue();
// console.log("dequeue: ", queue.dequeue());
// queue.printQueue();
// console.log("peek: ", queue.peek());

// const stack = new StackWithDeleteMiddle();
// console.log("stack example 1");

// stack.push(7);
// stack.push(14);
// stack.push(1);
// stack.push(8);
// stack.push(5);

// stack.printStack(); 
// console.log("deleteMiddle()");
// stack.deleteMiddle();
// stack.printStack(); 

// console.log("stack example 2");
// stack.push(3);
// stack.push(22);
// stack.printStack();
// console.log("deleteMiddle()");
// stack.deleteMiddle();
// stack.printStack(); 

const minStack = new MinStack();

// Push elements
minStack.push(15); // Top -> 15(min:15)
minStack.push(7);  // Top -> 7(min:7) -> 15(min:15)
minStack.push(12); // Top -> 12(min:7) -> 7(min:7) -> 15(min:15)
minStack.push(3);  // Top -> 3(min:3) -> 12(min:3) -> 7(min:3) -> 15(min:3)

// Print the stack
minStack.printStack();
// Output: Top -> 3(min:3) -> 12(min:3) -> 7(min:3) -> 15(min:3)

// Get the minimum element
let min = minStack.getMin(); // min: 3
console.log(`Minimum: ${min}`);

// Pop a node from the stack
let popped = minStack.pop(); // popped: 3
console.log(`Popped: ${popped}`);
minStack.printStack();
// Output: Top -> 12(min:7) -> 7(min:7) -> 15(min:15)

// Get the new minimum element
min = minStack.getMin(); // min: 7
console.log(`New minimum: ${min}`);

// Peek the top node
let peeked = minStack.top(); // peeked: 12
console.log(`Top element: ${peeked}`);

// Push another element
minStack.push(2); // Top -> 2(min:2) -> 12(min:2) -> 7(min:2) -> 15(min:2)
minStack.printStack();
// Output: Top -> 2(min:2) -> 12(min:2) -> 7(min:2) -> 15(min:2)

// Get the new minimum element
min = minStack.getMin(); // min: 2
console.log(`New minimum: ${min}`);

// Check if the stack is empty
let isEmpty = minStack.isEmpty(); // isEmpty: false
console.log(`Is empty: ${isEmpty}`);
