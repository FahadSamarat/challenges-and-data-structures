const LinkedList = require("../LinkedList");

describe('LinkedList Reverse Functionality', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('1. Reversing a non-empty list (1 -> 2 -> 3 becomes 3 -> 2 -> 1)', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    
    list.reverse();

    const result = [];
    let current = list.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([3, 2, 1]);
  });

  test('2. Reversing a single-node list (should remain unchanged)', () => {
    list.add(42);
    
    list.reverse();

    expect(list.head.data).toBe(42);
    expect(list.head.next).toBe(null);
  });

  test('3. Reversing an empty list (should return null)', () => {
    list.reverse();
    expect(list.head).toBe(null);
  });

  test('4. Reversing a list with duplicate values (1 -> 2 -> 2 -> 3 becomes 3 -> 2 -> 2 -> 1)', () => {
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    
    list.reverse();

    const result = [];
    let current = list.head;

    while (current !== null) {
      result.push(current.data);
      current = current.next;
    }

    expect(result).toEqual([3, 2, 2, 1]);
  });
});
