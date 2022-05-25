// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const { LinkedList } = require("./linkedlist");
const l = new LinkedList();
function fromLast(list, n) {
  list = l.getAt(n);
  return list.data;
}
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertLast("e");
console.log(fromLast(l, 3)); // b
module.exports = fromLast;
