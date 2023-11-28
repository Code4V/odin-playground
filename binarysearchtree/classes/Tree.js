const Node = require("./Node");

module.exports = class Tree { 
  constructor() {
    this.root = null;
  }

  buildTree (arr = []) { 
    const arrFiltered = arr.filter((e, i) => {
      return arr.indexOf(e) === i;
    })
    
    const arrSorted = arrFiltered.sort((a, b) => a - b);

    const arrMidIndex = Math.floor(arrSorted.length / 2);
    const arrMid = arrSorted[arrMidIndex];
    const arrLeft = arrSorted.splice(0, arrMidIndex);
    const arrRight = arrSorted.slice(1, arrSorted.length)

    if (arr.length === 0) return null;
      
    const node = new Node(arrMid);
    
    node.leftNode = this.buildTree(arrLeft);
    node.rightNode = this.buildTree(arrRight);

    this.root = node;

    return this.root;
  }

  prettyPrint (node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.rightNode !== null) {
    this.prettyPrint(node.rightNode, `${prefix}${isLeft ? "│    " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.leftNode !== null) {
    this.prettyPrint(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
}