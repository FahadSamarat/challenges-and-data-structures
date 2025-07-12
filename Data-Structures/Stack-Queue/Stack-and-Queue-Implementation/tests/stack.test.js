const Stack = require('../stack');
const Node = require('../nodeClass');


  test('pushes a node onto the stack', () => {
    const stack = new Stack();
    stack.push(10);
    expect(stack.peek()).toBe(10);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pops a node from the stack', () => {
    const stack = new Stack();
    stack.push(20);
    stack.push(30);
    const popped = stack.pop();
    expect(popped).toBe(30);
    expect(stack.peek()).toBe(20);
  });

  test('checks if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(40);
    expect(stack.isEmpty()).toBe(false);
  });

