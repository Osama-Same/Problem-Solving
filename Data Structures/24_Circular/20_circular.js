// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
const { Node, LinkedList } = require("./linkedlist");
const l = new LinkedList();
function circular(list) {
  list = l.head;
  let slow = list;
  let fast = list;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
// circular detects circular linked lists

l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(circular(l)); // true
// circular detects circular linked lists linked at the head

l.head = a;
a.next = b;
b.next = c;
c.next = a;
console.log(circular(l)); // true
// circular detects non-circular linked lists

l.head = a;
a.next = b;
b.next = c;
c.next = null;
console.log(circular(l)); // true
module.exports = circular;
