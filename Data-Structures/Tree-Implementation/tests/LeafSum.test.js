const TNode = require('../TNode');
const BinaryTree = require('../BinaryTree');

describe('BinaryTree Leaf Sum', () => {
  test('should calculate sum of all leaf TNodes in a binary tree', () => {
    const tree = new BinaryTree();
    tree.root = new TNode(9);
    tree.root.left = new TNode(8);
    tree.root.right = new TNode(12);
    tree.root.left.left = new TNode(3);
    tree.root.left.right = new TNode(7);
    tree.root.right.left = new TNode(17);
    tree.root.right.right = new TNode(23);
    tree.root.left.left.right = new TNode(4);

    expect(tree.sumOfLeafNodes()).toBe(51); // 4 + 7 + 17 + 23 = 51
  });

  test('should calculate sum of all leaf TNodes with negative values', () => {
    const tree = new BinaryTree();
    tree.root = new TNode(10);
    tree.root.left = new TNode(-5);
    tree.root.right = new TNode(15);
    tree.root.left.left = new TNode(-2);
    tree.root.left.right = new TNode(7);
    tree.root.right.right = new TNode(-3);

    expect(tree.sumOfLeafNodes()).toBe(2); // -2 + 7 + (-3) = 2
  });

  test('should return 0 for empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.sumOfLeafNodes()).toBe(0);
  });



  test('should handle tree with only left children', () => {
    const tree = new BinaryTree();
    tree.root = new TNode(1);
    tree.root.left = new TNode(2);
    tree.root.left.left = new TNode(3);
    tree.root.left.left.left = new TNode(4);

    expect(tree.sumOfLeafNodes()).toBe(4);
  });

  test('should handle tree with only right children', () => {
    const tree = new BinaryTree();
    tree.root = new TNode(1);
    tree.root.right = new TNode(2);
    tree.root.right.right = new TNode(3);
    tree.root.right.right.right = new TNode(4);

    expect(tree.sumOfLeafNodes()).toBe(4);
  });
});