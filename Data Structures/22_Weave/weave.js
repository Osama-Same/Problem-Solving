// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
//weave can combine two queues
const sourceOne = new Queue();
sourceOne.add(1);
sourceOne.add(2);
sourceOne.add(3);
sourceOne.add(4);
console.log(sourceOne.peek());
const sourceTwo = new Queue();
sourceTwo.add("one");
sourceTwo.add("two");
sourceTwo.add("there");
sourceTwo.add("four");
console.log(sourceTwo.peek());

const result = new Queue(sourceOne, sourceTwo);
function weave(sourceOne, sourceTwo) {
  if (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }
  return result;
}
console.log(weave(sourceOne, sourceTwo));
