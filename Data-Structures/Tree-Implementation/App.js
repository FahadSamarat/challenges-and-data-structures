// const BinarySearchTree = require("./BinarySearchTree");

const Tnode = require("./TNode");
const BinaryTree = require("./BinaryTree");

const Btree = new BinaryTree();
Btree.root = new Tnode(9);
Btree.root.left = new Tnode(8);
Btree.root.right = new Tnode(12);
Btree.root.left.left = new Tnode(3);
Btree.root.left.right = new Tnode(7);
Btree.root.right.left = new Tnode(17);
Btree.root.right.right = new Tnode(23);
Btree.root.left.left.right = new Tnode(4);

console.log("Binary Tree Structure:");
Btree.print();

const leafSum = Btree.sumOfLeafNodes();
console.log("Sum of leaf nodes:", leafSum); // Output: 51

// console.log("Binary Search Tree Example:");
// const bst = new BinarySearchTree();

// bst.add(10);
// bst.add(5);
// bst.add(15);
// bst.add(7);
// bst.add(3);
// bst.add(12);
// bst.add(17);

// console.log("Tree structure:");
// bst.print();

// console.log("Contains 7:", bst.contains(7)); // true
// console.log("Contains 8:", bst.contains(8)); // false

// console.log("\nPre-order traversal:", bst.preOrder());
// console.log("In-order traversal:", bst.inOrder());
// console.log("Post-order traversal:", bst.postOrder());

// console.log("\nRemoving node 5...");
// bst.remove(5);

// console.log("Tree structure after removal:");
// bst.print();

// console.log("Contains 5:", bst.contains(5)); // false

// console.log("findSecondMax:", bst.findSecondMax());
