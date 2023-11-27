'use strict';

const Node = require('./classes/Node');
const LinkedList = require('./classes/LinkedList');

const test = new Node(123);
const newNode = new Node(333);
const newNodeA = new Node(3343);
const newNodeB = new Node(1343);
const test2 = new LinkedList(test)

test.nextNode = newNode;
newNode.nextNode = newNodeA;
newNodeA.nextNode = newNodeB;

// console.log(test.nextNode.nextNode.value);

while (test.nextNode != null) {
  console.log()
}

test2.append(newNode);
test2.append(newNodeA);
test2.append(newNodeB);

console.log(test2.toString);