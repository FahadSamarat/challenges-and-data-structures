class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder(node = this.root, result = []) {
    if (!node) return result;

    result.push(node.value);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);

    return result;
  }

  inOrder(node = this.root, result = []) {
    if (!node) return result;

    this.inOrder(node.left, result);
    result.push(node.value);
    this.inOrder(node.right, result);

    return result;
  }

  postOrder(node = this.root, result = []) {
    if (!node) return result;

    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.value);

    return result;
  }

  print(node = this.root, prefix = "", isLeft = true) {
    if (!node) return;

    console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
    this.print(node.left, prefix + (isLeft ? "│   " : "    "), true);
    this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
  }
}

module.exports = BinaryTree;
