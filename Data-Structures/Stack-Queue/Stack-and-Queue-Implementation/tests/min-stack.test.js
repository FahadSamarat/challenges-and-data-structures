const MinStack = require("../MinStack/MinStack");

describe('MinStack', () => {
    let minStack;

    beforeEach(() => {
        minStack = new MinStack();
    });

    test('should handle minimum updates correctly', () => {
        minStack.push(5);   // min: 5
        expect(minStack.getMin()).toBe(5);

        minStack.push(2);   // min: 2
        expect(minStack.getMin()).toBe(2);

        minStack.push(8);   // min: 2
        expect(minStack.getMin()).toBe(2);

        minStack.push(1);   // min: 1
        expect(minStack.getMin()).toBe(1);

        minStack.pop();     // remove 1, min becomes 2 again
        expect(minStack.getMin()).toBe(2);
    });


});