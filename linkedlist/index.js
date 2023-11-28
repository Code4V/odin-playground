'use strict';

const Node = require('./classes/Node');
const LinkedList = require('./classes/LinkedList');


const test = new Node(123);
const newNode = new Node(333);
const newNodeA = new Node(3343);
const newNodeB = new Node(1343);
const linkedList = new LinkedList(test)

// console.log(test.nextNode.nextNode.value);

// while (test.nextNode != null) {
//   const next = test.nextNode;
//   console.log(next.value);
//   test.nextNode = next.nextNode;
// }

linkedList.append(newNode);
linkedList.append(newNodeA);
linkedList.append(newNodeB);

linkedList.prepend(new Node('Shheshh'));

// console.log(linkedList.toString);
linkedList.prepend(new Node('ASDeshh'));
linkedList.pop();
linkedList.pop();
// console.log(linkedList.toString);

const NEEDLE = 'Shheshh';

// console.log(linkedList.tail.value)
// console.log(linkedList.contains(NEEDLE))
// console.log(linkedList.find(NEEDLE))

linkedList.insertAt(new Node('test'), 0)
linkedList.insertAt(new Node('tes23t'), 0)
linkedList.insertAt(new Node('tes12t'), 0)
linkedList.insertAt(new Node('wetest'), 2)

console.log(
  linkedList.toString
);

linkedList.removeAt(7)

console.log(
  linkedList.toString
);