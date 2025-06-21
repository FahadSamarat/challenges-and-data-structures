const LinkedList = require("./LinkedList");
const list = new LinkedList();

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
list.printList();

