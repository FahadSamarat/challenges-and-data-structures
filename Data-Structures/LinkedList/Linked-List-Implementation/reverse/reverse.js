
function reverseLinkedList(head) {
  if (head === null) {
    throw new Error("Cannot reverse an empty list");
  }

  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev; // New head
}

module.exports = reverseLinkedList;
