const BinarySearchTree = require('../BinarySearchTree');

describe('BinarySearchTree findSecondMax', () => {
  test('should find second maximum value in a BST', () => {
    const bst = new BinarySearchTree();
    [15, 10, 20, 8, 12, 17, 25].forEach(val => bst.add(val));
    expect(bst.findSecondMax()).toBe(20);
  });

  test('should handle tree with only one node', () => {
    const bst = new BinarySearchTree();
    bst.add(42);
    expect(bst.findSecondMax()).toBeNull();
  });

  test('should handle tree with negative values', () => {
    const bst = new BinarySearchTree();
    [-5, -10, -3, -8, -1].forEach(val => bst.add(val));
    expect(bst.findSecondMax()).toBe(-3); // -1 is max, -3 is second max
  });

  test('should handle tree where second max is in left subtree of max node', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 12, 20, 18, 25].forEach(val => bst.add(val));
    expect(bst.findSecondMax()).toBe(20);
  });

  test('should handle tree where max node has no left subtree', () => {
    const bst = new BinarySearchTree();
    [10, 5, 15, 12, 20].forEach(val => bst.add(val));
    expect(bst.findSecondMax()).toBe(15);
  });

  test('should handle tree with duplicate values (BST should ignore duplicates)', () => {
    const bst = new BinarySearchTree();
    [10, 20, 15, 20, 25, 25].forEach(val => bst.add(val));
    expect(bst.findSecondMax()).toBe(20);
  });

  test('should handle empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst.findSecondMax()).toBeNull();
  });
});