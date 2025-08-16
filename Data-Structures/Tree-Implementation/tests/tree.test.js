const TNode  = require("../TNode");
const BinarySearchTree = require("../BinarySearchTree");
const BinaryTree = require("../BinaryTree");

describe('BinaryTree', () => {
  let binaryTree;
  
  beforeEach(() => {
    binaryTree = new BinaryTree();
    const root = new TNode(1);
    root.left = new TNode(2);
    root.right = new TNode(3);
    root.left.left = new TNode(4);
    root.left.right = new TNode(5);
    binaryTree.root = root;
  });
  
  test('preOrder traversal', () => {
    expect(binaryTree.preOrder()).toEqual([1, 2, 4, 5, 3]);
  });
  
  test('inOrder traversal', () => {
    expect(binaryTree.inOrder()).toEqual([4, 2, 5, 1, 3]);
  });
  
  test('postOrder traversal', () => {
    expect(binaryTree.postOrder()).toEqual([4, 5, 2, 3, 1]);
  });
});

describe('BinarySearchTree', () => {
  let bst;
  
  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.add(12);
    bst.add(17);
  });
  
  test('adding nodes', () => {
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 17]);
  });
  
  test('contains existing node', () => {
    expect(bst.contains(7)).toBe(true);
    expect(bst.contains(12)).toBe(true);
  });
  
  test('contains non-existing node', () => {
    expect(bst.contains(8)).toBe(false);
    expect(bst.contains(20)).toBe(false);
  });
  
  test('removing leaf node', () => {
    bst.remove(3);
    expect(bst.contains(3)).toBe(false);
    expect(bst.inOrder()).toEqual([5, 7, 10, 12, 15, 17]);
  });
  
  test('removing node with one child', () => {
    bst.remove(15);
    expect(bst.contains(15)).toBe(false);
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 12, 17]);
  });
  
  test('removing node with two children', () => {
    bst.remove(5);
    expect(bst.contains(5)).toBe(false);
    expect(bst.inOrder()).toEqual([3, 7, 10, 12, 15, 17]);
  });
  
  test('removing root node', () => {
    bst.remove(10);
    expect(bst.contains(10)).toBe(false);
    expect(bst.inOrder()).toEqual([3, 5, 7, 12, 15, 17]);
  });
});