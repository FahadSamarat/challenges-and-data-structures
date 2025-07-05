function rotateLeft(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Handle negative k by rotating right
  if (k < 0) {
    return rotateRight(head, Math.abs(k));
  }

  // Get list length and tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  // Find new tail (k-th node)
  let current = head;
  for (let i = 1; i < k; i++) {
    current = current.next;
  }

  const newHead = current.next;
  current.next = null;
  tail.next = head;

  return newHead;
}

function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  // Get list length and tail
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  // Find new tail (length - k - 1)
  let stepsToNewTail = length - k;
  let current = head;
  for (let i = 1; i < stepsToNewTail; i++) {
    current = current.next;
  }

  const newHead = current.next;
  current.next = null;
  tail.next = head;

  return newHead;
}

module.exports = {
  rotateLeft,
  rotateRight
};
