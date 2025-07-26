const Node = require("../nodeClass");

class MinStack {
    constructor() {
        this.head = null;
        this.minHead = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        // Update minimum
        if (this.minHead === null || value <= this.minHead.data) {
            const newMinNode = new Node(value);
            newMinNode.next = this.minHead;
            this.minHead = newMinNode;
        }
    }

    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }

        const poppedValue = this.head.data;
        this.head = this.head.next;

        // If popped value was the current minimum, remove from min list
        if (poppedValue === this.minHead.data) {
            this.minHead = this.minHead.next;
        }

        return poppedValue;
    }

    top() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        return this.head.data;
    }

    getMin() {
        if (this.minHead === null) {
            throw new Error("Stack is empty");
        }
        return this.minHead.data;
    }

    isEmpty() {
        return this.head === null;
    }

    printStack() {
        let current = this.head;

        const result = [];

        while (current) {
            result.push(current.data);

            current = current.next;
        }

        console.log("Stack - Top:", result.join(" -> "));
    }
}

module.exports = MinStack;