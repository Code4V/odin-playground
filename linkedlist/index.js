const Node = require('./classes/Node');
const LinkedList = require('./classes/LinkedList');

const test = new Node(123);
const newNode = new Node(333);
const newNodeA = new Node(3343);
const newNodeB = new Node(1343);
const test2 = new LinkedList(test)

// console.log(test.nextNode.nextNode.value);

// while (test.nextNode != null) {
//   const next = test.nextNode;
//   console.log(next.value);
//   test.nextNode = next.nextNode;
// }

test2.append(newNode);
test2.append(newNodeA);
test2.append(newNodeB);

test2.prepend(new Node('Shheshh'));

console.log(test2.toString);
test2.pop();
console.log(test2.toString);
console.log(test2.size);