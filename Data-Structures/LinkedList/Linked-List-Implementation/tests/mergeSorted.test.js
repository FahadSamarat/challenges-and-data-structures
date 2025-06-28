const LinkedList = require("../LinkedList");
const mergeSortedLists = require("../MergeSorted/mergeSorted");

// Helper to populate list from an array
function createLinkedListFromArray(arr) {
  const list = new LinkedList();
  arr.forEach(value => list.add(value));
  return list;
}

// Helper to get array from linked list
function linkedListToArray(list) {
  const result = [];
  let current = list?.head;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result;
}

describe("mergeSortedLists", () => {

  test("merging when one list is empty", () => {
    const list1 = createLinkedListFromArray([]);
    const list2 = createLinkedListFromArray([1, 3, 5]);

    const merged = mergeSortedLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 3, 5]);
  });

  test("merging when both lists are empty", () => {
    const list1 = createLinkedListFromArray([]);
    const list2 = createLinkedListFromArray([]);

    const merged = mergeSortedLists(list1, list2);
    expect(merged).toBeNull();
  });

  test("merging example: list1 [2, 10, 15], list2 [3, 5, 20]", () => {
    const list1 = createLinkedListFromArray([2, 10, 15]);
    const list2 = createLinkedListFromArray([3, 5, 20]);

    const merged = mergeSortedLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([2, 3, 5, 10, 15, 20]);
  });

});
