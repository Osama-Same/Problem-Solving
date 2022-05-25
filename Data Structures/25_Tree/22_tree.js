// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, left, rigth) {
    this.data = data;
    this.left = left || null;
    this.rigth = rigth || null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    }
    if (data <= this.root.data) {
      this.root.left = node;
    }
    if (data >= this.root.data) {
      this.root.rigth = node;
    }
  }
  remove() {}
  traverseBF(value) {
    let collection = [this.root];
    while (collection.length) {
      let node = collection.shift();
      
    }
  }
}
const tree = new Tree();
tree.insert(64);
tree.insert(127);
tree.insert(0);
tree.insert(32);
tree.insert(256);
console.log(tree);
