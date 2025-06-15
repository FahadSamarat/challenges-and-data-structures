const Node = require("./NodeClass");

class linkedList {
  constructor() {
    this.head = null;
  }

  add(data) {

    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

remove(data) {
  try {
    if (this.head === null) {
      throw new Error("Cannot remove from an empty list");
    }
    
    // If the head node holds the data to be removed
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }

    console.log("Data not found in the list.");

  } catch (error) {
    console.error("Error removing node:", error.message);
    return false;
  }
}


includes(data) {
  let current = this.head;

  while (current !== null) {
    if (current.data === data) {
      return true;
    }
    current = current.next;
  }

      return false;
}

insertAt(data, index) {
  try {
    if (index < 0) {
      throw new Error("Index cannot be negative");
    }

    const newNode = new Node(data);

    // Insert at head
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let currentIndex = 0;

    while (current !== null && currentIndex < index) {
      previous = current;
      current = current.next;
      currentIndex++;
    }

    if (currentIndex !== index) {
      throw new Error("Index exceeds the length of the list");
    }

    newNode.next = current;
    previous.next = newNode;

  } catch (error) {
    console.error("Error inserting at index:", error.message);
    return false;
  }
}




printList() {
  try {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let result = "";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log("head -> " + result);

  } catch (error) {
    console.error("Error printing list:", error.message);
  }
}

}

module.exports = linkedList;
