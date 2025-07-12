const Queue = require('../queue');
const Node = require('../nodeClass');


  test('enqueues a node into the queue', () => {
    const queue = new Queue();
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
    expect(queue.isEmpty()).toBe(false);
  });

  test('dequeues a node from the queue', () => {
    const queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(30);
    const dequeued = queue.dequeue();
    expect(dequeued).toBe(20);
    expect(queue.peek()).toBe(30);
  });

  test('checks if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(40);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

