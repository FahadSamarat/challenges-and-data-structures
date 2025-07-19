const StackWithDeleteMiddle = require("../DeleteMiddleElement/StackWithDeleteMiddle");

describe('StackWithDeleteMiddle', () => {
  let stack;

  beforeEach(() => {
    stack = new StackWithDeleteMiddle();
  });

  test('deletes the middle element from a stack with odd number of elements', () => {
    // Stack: 1 (bottom), 2, 3, 4, 5 (top) => Middle is 3
    [1, 2, 3, 4, 5].forEach(num => stack.push(num));
    stack.deleteMiddle();

    const result = [];
    while (!stack.isEmpty()) {
      result.push(stack.pop());
    }

    expect(result).toEqual([5, 4, 2, 1]); // 3 should be removed
  });

  test('deletes the lower middle element from a stack with even number of elements', () => {
    // Stack: 1, 2, 3, 4 => Middle is 2 (0-based index = 1)
    [1, 2, 3, 4].forEach(num => stack.push(num));
    stack.deleteMiddle();

    const result = [];
    while (!stack.isEmpty()) {
      result.push(stack.pop());
    }

    expect(result).toEqual([4, 3, 1]); // 2 should be removed
  });

  test('deleting from an empty stack does nothing', () => {
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe(true);
  });

  test('deleting from a stack with one element removes it', () => {
    stack.push(99);
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe(true);
  });
});
