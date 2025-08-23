const TNode = require("./TNode");
const BinaryTree = require("./BinaryTree");

class BinarySearchTree extends BinaryTree {
  add(value) {
    try {
      const newNode = new TNode(value);

      if (!this.root) {
        this.root = newNode;
        return;
      }

      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        } else {
          // Value already exists in the tree
          return;
        }
      }
    } catch (error) {
      console.error(`Error adding value ${value}:`, error);
    }
  }

  contains(value) {
    try {
      let current = this.root;

      while (current) {
        if (value === current.value) {
          return true;
        } else if (value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
      }

      return false;
    } catch (error) {
      console.error(`Error checking for value ${value}:`, error);
      return false;
    }
  }

  remove(value) {
    try {
      this.root = this._removeNode(this.root, value);
    } catch (error) {
      console.error(`Error removing value ${value}:`, error);
    }
  }

  _removeNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // Node with two children: get the inorder successor (smallest in the right subtree)
      const tempNode = this._findMinNode(node.right);
      node.value = tempNode.value;

      // Delete the inorder successor
      node.right = this._removeNode(node.right, tempNode.value);
      return node;
    }
  }

  _findMinNode(node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  findSecondMax() {
    try {
      if (!this.root) {
        throw new Error("Tree is empty");
      }

      if (!this.root.left && !this.root.right) {
        throw new Error("Tree has only one node");
      }

      let current = this.root;
      let parent = null;
      let secondMax = null;

      // Find the maximum node (rightmost node)
      while (current.right) {
        parent = current;
        current = current.right;
      }

      // If the maximum node has a left subtree, the second maximum is the maximum of that subtree
      if (current.left) {
        secondMax = this._findMaxNode(current.left).value;
      } else if (parent) {
        // If no left subtree, the parent is the second maximum
        secondMax = parent.value;
      } else {
        // This handles the case where root is max and has no right children
        secondMax = this._findMaxNode(current.left).value;
      }

      return secondMax;
    } catch (error) {
      console.error("Error finding second maximum value:", error.message);
      return null;
    }
  }

  _findMaxNode(node) {
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }
}

module.exports = BinarySearchTree;
