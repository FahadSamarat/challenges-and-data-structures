const Node = require("../NodeClass");
const linkedList = require("../LinkedList");

function mergeSortedLists(list1, list2) {
  // Handle both lists being empty
  if (!list1?.head && !list2?.head) {
    return null;
  }

  // If only one list is empty, return a *copy* of the other
  if (!list1?.head) return cloneList(list2);
  if (!list2?.head) return cloneList(list1);

  // Merge logic
  const mergedList = new linkedList();
  const dummy = new Node(0);
  let tail = dummy;

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    if (current1.data <= current2.data) {
      tail.next = new Node(current1.data);
      current1 = current1.next;
    } else {
      tail.next = new Node(current2.data);
      current2 = current2.next;
    }
    tail = tail.next;
  }

  while (current1) {
    tail.next = new Node(current1.data);
    tail = tail.next;
    current1 = current1.next;
  }

  while (current2) {
    tail.next = new Node(current2.data);
    tail = tail.next;
    current2 = current2.next;
  }

  mergedList.head = dummy.next;
  return mergedList;
}

// Helper to create a copy of a linked list
function cloneList(original) {
  const newList = new linkedList();
  let current = original.head;
  let tail = null;

  while (current) {
    const newNode = new Node(current.data);
    if (!newList.head) {
      newList.head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
    current = current.next;
  }

  return newList;
}

module.exports = mergeSortedLists;
