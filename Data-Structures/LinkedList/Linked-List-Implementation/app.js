const LinkedList = require("./LinkedList");
// const mergeSortedLists = require("./MergeSorted/mergeSorted");

/* const list = new LinkedList();

list.add(5);
list.add(7);
list.add(88);
list.add(12);
list.printList();

list.remove(88);
list.remove(999);
list.printList();

console.log(list.includes(7));
console.log(list.includes(9));

list.insertAt(4,2);
list.insertAt(77,5);
list.printList();

list.reverse();
list.printList(); */

// const list1 = new LinkedList();
// list1.add(1);
// list1.add(3);
// list1.add(5);
// list1.printList();

// const list2 = new LinkedList();
// list2.add(2);
// list2.add(4);
// list2.add(6);
// list2.printList();

// const merged = mergeSortedLists(list1, list2);
// merged.printList();


// [1, 2, 3, 4, 5].forEach(num => list.add(num));
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);

console.log("Original:");
list.printList();

list.rotateLeft(3);
console.log("After rotateLeft(3):");
list.printList();

// list.rotateLeft(3);
// console.log("After rotateLeft(3):");
// list.printList();

