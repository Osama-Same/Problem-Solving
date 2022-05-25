// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size++;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  getSize() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head.data;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    return (this.head = null);
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}
// [1] A Node
//  has properties "data" and "next"
const node = new Node("a", "b");
console.log("Data" + " => " + node.data); // a
console.log("Next" + " => " + node.next); // b

// [2] Insert First
// appends a node to the start of the list
const l = new LinkedList();
l.insertFirst(1);
console.log("Insert First" + " => " + l.head.data);
l.insertFirst(2);
console.log("Insert First" + " => " + l.head.data);

// [3] Size
// returns the number of items in the linked list
console.log("Size" + " => " + l.getSize());

// [4] Get First
// returns the first element
console.log("Get First" + " => " + l.getFirst()); // 2

// [5] GetLast
//returns the last element
console.log(l.getLast()); // Node { data: 1, next: null }

// [6] Clear
//empties out the list
console.log("Clear" + " => " + l.clear()); // null
console.log("Size" + " => " + l.getSize()); // 0

// [7] RemoveFirst
//removes the first node when the list has a size of one
l.insertFirst("a");
l.insertFirst("b");
l.removeFirst();
console.log("Remove first Size" + " => " + l.getSize()); // 1
console.log("Remove first Element" + " => " + l.getFirst()); // a

// [8] Remove Last
// Remove Last removes the last node when list is empty
l.clear();
// Remove Last removes the last node when list is length 1
l.insertFirst("a");
console.log(l.head); // Node { data: 'a', next: null }
// RemoveLast removes the last node when list is length 2
l.insertFirst("b");
l.insertFirst("a");
l.removeLast();
console.log("Remove Last length 2" + " => " + l.head.data); // a
// RemoveLast removes the last node when list is length 3
l.clear();
l.insertFirst("c");
l.insertFirst("b");
l.insertFirst("a");
l.removeLast();
console.log("Remove Last length 3 Size" + " => " + l.getSize()); // 2
console.log("Remove Last length 3 Data" + " => " + l.getLast().data); // b

// [9] InsertLast
// adds to the end of the list
l.clear();
l.insertFirst("a");
l.insertLast("b");
console.log("Insert Last Size" + " => " + l.getSize()); // 2
console.log("Insert Last Data" + " => " + l.getLast().data); // b

// [10] GetAt
// returns the node at given index
l.clear();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
console.log("GetAt Index 0" + " => " + l.getAt(0).data); // 1
console.log("GetAt Index 1" + " => " + l.getAt(1).data); // 2
console.log("GetAt Index 2" + " => " + l.getAt(2).data); // 3

// [11] RemoveAt
// removeAt doesnt crash on an empty list
l.removeAt(0);
l.removeAt(1);
l.removeAt(2);
//removeAt doesnt crash on an index out of bounds
l.clear();
l.insertFirst("a");
//l.removeAt(1); // error
l.removeAt(0); // empty

//removeAt deletes the first node
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log("removeAt index 0 before" + " => " + l.getAt(0).data); // 1
l.removeAt(0);
console.log("removeAt index 0 After" + " => " + l.getAt(0).data); // 2
// removeAt deletes the node at the given index
l.clear();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log("removeAt index 1 before" + " => " + l.getAt(1).data); // 2
l.removeAt(1);
console.log("removeAt index 1 After" + " => " + l.getAt(1).data); // 3

// removeAt works on the last node
l.clear();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);
console.log("removeAt index 3 before" + " => " + l.getAt(3).data); // 4
l.removeAt(3);
console.log("removeAt index 3 After" + " => " + l.getAt(3)); // null

// [11] InsertAt
// inserts a new node with data at the 0 index when the list is empty
l.clear();
l.insertAt("hi", 0);
console.log(l.getLast().data); // hi
//inserts a new node with data at the 0 index when the list has elements
l.clear();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertAt("hi", 0);
console.log("insertAt First index 0 " + " => " + l.getAt(0).data); // hi
console.log("insertAt First index 1 " + " => " + l.getAt(1).data); // a
console.log("insertAt First index 2 " + " => " + l.getAt(2).data); // b
console.log("insertAt First index 3 " + " => " + l.getAt(3).data); // c

// inserts a new node with data at a middle index
l.clear();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
l.insertLast("d");
l.insertAt("hi", 2);
console.log("insertAt middle index 0 " + " => " + l.getAt(0).data); // a
console.log("insertAt middle index 1 " + " => " + l.getAt(1).data); // b
console.log("insertAt middle index 2 " + " => " + l.getAt(2).data); // hi
console.log("insertAt middle index 3 " + " => " + l.getAt(3).data); // c
//inserts a new node with data at a last index
l.clear();
l.insertLast("a");
l.insertLast("b");
l.insertAt("hi", 2);

console.log("insertAt last index 0 " + " => " + l.getAt(0).data); // a
console.log("insertAt last index 1 " + " => " + l.getAt(1).data); // b
console.log("insertAt last index 2 " + " => " + l.getAt(2).data); // hi

// insert a new node when index is out of bounds
l.insertLast("a");
l.insertLast("b");
l.insertAt("hi", 30);
console.log("insertAt bounds index 0 " + " => " + l.getAt(0).data); // a
console.log("insertAt bounds index 1 " + " => " + l.getAt(1).data); // b
console.log("insertAt bounds index 2 " + " => " + l.getAt(2).data); // hi

