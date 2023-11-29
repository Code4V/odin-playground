const Node = require("./Node");

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(arr = []) {
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

  prettyPrint(node, prefix = "", isLeft = true) {
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

  insert(node) {
    const newNode = new Node(node);

    let treeCopy = this.root;

    while (treeCopy != null) {
      if (newNode.value > treeCopy.value) {
        if (treeCopy.rightNode == null) {
          treeCopy.rightNode = newNode;
          break;
        }
        treeCopy = treeCopy.rightNode;
      } else if (newNode.value < treeCopy.value) {
        if (treeCopy.leftNode == null) {
          treeCopy.leftNode = newNode;
          break;
        }
        treeCopy = treeCopy.leftNode;
      } else if (newNode.value === treeCopy.value){
        return new Error('Value already exist in tree!');
      }
    }
    return null;
  }

  delete(node) {
    let treeCopy = this.root;
    let nodeChild;

    while (treeCopy != null) {
      if (node > treeCopy.value) {
        if (node === treeCopy.rightNode.value) {
          nodeChild = treeCopy.rightNode;
          break;
        }
        treeCopy = treeCopy.rightNode;
      } else if (node < treeCopy.value) {
        if (node === treeCopy.leftNode.value) {
          nodeChild = treeCopy.leftNode;
          break;
        }
        treeCopy = treeCopy.leftNode;
      } else if (node === treeCopy.value) {
        nodeChild = treeCopy
        break;
      }
    }

    console.log(treeCopy.leftNode)

    if (treeCopy == null) {
      return new Error('Node not found!');
    }

    if (nodeChild.leftNode == null && nodeChild.rightNode == null) {
      if (treeCopy.rightNode != null && 
          node === treeCopy.rightNode.value) {
        treeCopy.rightNode = null;
      } else if (treeCopy.leftNode != null && 
          node === treeCopy.leftNode.value) {
        treeCopy.leftNode = null;
      }

      return null;
    }

    if (nodeChild.leftNode != null && nodeChild.rightNode != null) {
      let treeCopyRight = nodeChild.rightNode;
      let lastLeftNode;

      if (treeCopyRight.leftNode == null) {
        nodeChild.rightNode = treeCopyRight.rightNode;
      }
      else {
        while (treeCopyRight != null) {
          console.log(treeCopyRight)
          if (treeCopyRight.leftNode.leftNode == null) {
            lastLeftNode = treeCopyRight.leftNode.value;
            treeCopyRight.leftNode = treeCopyRight.leftNode.rightNode ?? null;
            break;
          } else {
            treeCopyRight = treeCopyRight.leftNode;
          }
        };
        nodeChild.value = lastLeftNode;
      }

      return null;
    }


    if (nodeChild.leftNode != null || nodeChild.rightNode != null) {
      if(treeCopy.rightNode != null && node === treeCopy.rightNode.value){
        treeCopy.rightNode = nodeChild.rightNode ?? nodeChild.leftNode;
      } else if (treeCopy.leftNode != null && node === treeCopy.leftNode.value){
        treeCopy.leftNode = nodeChild.leftNode ?? nodeChild.rightNode;
      }

      return null;
    }
  

    this.prettyPrint(nodeChild, 'CHILD ');

    this.prettyPrint(treeCopy, 'PARENT ');
  }
}