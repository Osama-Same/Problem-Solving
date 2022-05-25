// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
const { LinkedList } = require("./linkedlist");
const l = new LinkedList();

//Midpoint returns the middle node of an odd numbered list

function midpoint(list) {
  list = l.head;
  let fast = list;
  let slow = list;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
// when the list has 3 elements
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
console.log("Elements 3" + " => " + midpoint(l).data); // b
//when the list has 5 elements
l.clear();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");
console.log("Elements 5" + " => " + midpoint(l).data); // c
// when the list has 2 elements
l.clear();
l.insertLast("a");
l.insertLast("b");
console.log("Elements 2" + " => " + midpoint(l).data); // b
// when the list has 4 elements
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
console.log("Elements 4" + " => " + midpoint(l).data); // b

module.exports = midpoint;
