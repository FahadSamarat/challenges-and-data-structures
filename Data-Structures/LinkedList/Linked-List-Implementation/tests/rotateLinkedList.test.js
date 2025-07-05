const LinkedList = require('../LinkedList');

describe('rotateLeft', () => {
  let list;

  // Helper to build a list from an array
  const createList = (arr) => {
    const ll = new LinkedList();
    arr.forEach(val => ll.add(val));
    return ll;
  };

  // Helper to get array from list
  const listToArray = (list) => {
    const result = [];
    let current = list.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  };

  test('should return the same list when rotating by k = 0', () => {
    list = createList([1, 2, 3, 4, 5, 6]);
    list.rotateLeft(0);
    expect(listToArray(list)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should rotate correctly when k = 7 (greater than length)', () => {
    list = createList([1, 2, 3, 4, 5, 6]); // length = 6
    list.rotateLeft(7); // 7 % 6 = 1, so rotate left by 1
    expect(listToArray(list)).toEqual([2, 3, 4, 5, 6, 1]);
  });
});
