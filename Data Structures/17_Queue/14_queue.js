// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(items) {
    this.data.push(items);
  }
  dequeue(items) {
    this.data.shift(items);
  }
  peek() {
    return this.data[0];
  }
  getlength() {
    return this.data.length;
  }
  isEmpty() {
    return this.getlength() === 0;
  }
}
const q = new Queue();
//can add elements to a queue
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
//can remove elements from a queue
q.dequeue(1);
q.dequeue(2);
//q.dequeue(3);
console.log(q);
// get the current item at the front of the queue
console.log(q.peek()); // 1
// get the current length of queue
console.log(q.getlength());
console.log(q.isEmpty());
