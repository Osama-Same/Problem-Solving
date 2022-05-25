// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
class Queue {
  constructor() {
    this.innerStack = [];
    this.outerStack = [];
  }
  enqueue = (val) => {
    this.innerStack.push(val);
  };
  isEmpty = () => {
    return this.innerStack.length === 0;
  };
  dequeue = () => {
    if (this.isEmpty()) return;
    while (!this.isEmpty()) {
      this.outerStack.push(this.innerStack.pop());
    }
    return this.outerStack.pop();
  };
  peek = () => {
    return this.outerStack[this.outerStack.length - 1];
  };
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.peek(); // returns 1
q.dequeue(); // returns 1
q.dequeue(); // returns 2
console.log(q.peek());
