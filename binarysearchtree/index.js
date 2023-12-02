const Tree = require('./classes/Tree');

const BinaryTree = new Tree();

// Creates an array with the given length
function randArray(length = 10, multiplyBy = 100) {
  const arr = [];
  for (let i = 0; i < parseInt(length[0] ?? length, 10); i = i + 1) {
    arr.push(Math.round(Math.random() * multiplyBy));
  }
  return arr;
}

// Builds the initial Tree
BinaryTree.buildTree(randArray`50 ${100}`)

// Prints the Initial Tree
BinaryTree.prettyPrint(BinaryTree.root, 'INITIAL  ');

// Shows if Tree is balanced, the Level, Pre, Post, and In Order
console.log(
  '\n === INITIAL BST === \n',
  BinaryTree.isBalanced(),
  '\n',
  '\n === LEVEL ORDER === \n',
  BinaryTree.levelOrder(),
  '\n === PRE ORDER === \n',
  BinaryTree.preOrder(),
  '\n === POST ORDER === \n',
  BinaryTree.postOrder(),
  '\n === IN ORDER === \n',
  BinaryTree.inOrder(),
  '\n',
)

// Inserts 10 new values > 100 to the BST
randArray(100, 250).forEach(e => BinaryTree.insert(e));

// Reprints the Tree
BinaryTree.prettyPrint(BinaryTree.root, 'BEFORE  ');

// Checks if balanced (SHOULD BE NOT BALANCE)
console.log(
  '\n',
  BinaryTree.isBalanced(),
  '\n',
);

// Rebalance
BinaryTree.rebalance();

// Recheck if balanced
console.log(
  '\n',
  BinaryTree.isBalanced(),
  '\n',
);

// Recheck the BST after rebalancing
console.log(
  '\n === AFTER REBALANCE === \n',
  '\n',
  '\n === LEVEL ORDER === \n',
  BinaryTree.levelOrder(),
  '\n === PRE ORDER === \n',
  BinaryTree.preOrder(),
  '\n === POST ORDER === \n',
  BinaryTree.postOrder(),
  '\n === IN ORDER === \n',
  BinaryTree.inOrder(),
  '\n'
)

BinaryTree.prettyPrint(BinaryTree.root, 'AFTER  ');
