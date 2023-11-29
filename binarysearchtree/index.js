const Tree = require('./classes/Tree');

const BinaryTree = new Tree();

// console.log(
  BinaryTree.buildTree([2, 5, 1,3123, 41513, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345,12312,41241,1231,2,10,1111, 324])
// );
BinaryTree.insert(6)
BinaryTree.insert(999)
BinaryTree.insert(979)
BinaryTree.insert(980)
BinaryTree.insert(1230)
BinaryTree.insert(1231)

BinaryTree.prettyPrint(BinaryTree.root)

// BinaryTree.delete(6)
// BinaryTree.delete(999)
// BinaryTree.delete(12312)
BinaryTree.delete(1111)
BinaryTree.delete(3123)
BinaryTree.delete(5)
BinaryTree.delete(41241)
BinaryTree.delete(324)
BinaryTree.delete(67)
BinaryTree.delete(23)

console.log(BinaryTree.levelOrder((e) => {
  return e.sort((a,b) => a-b);
}));

BinaryTree.inOrder();

BinaryTree.prettyPrint(BinaryTree.root)