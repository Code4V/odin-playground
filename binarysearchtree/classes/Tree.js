const Node = require("./Node");

module.exports = class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(arr = []) {
    const arrFiltered = arr.filter((e, i) => {
      return arr.indexOf(e) === i;
    })

    // const arrSorted = arrFiltered.sort((a, b) => a - b);
    const arrSorted = [...new Set(arr.sort((a, b) => a - b))];

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
      } else if (newNode.value === treeCopy.value) {
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
      if (treeCopy.rightNode != null && node === treeCopy.rightNode.value) {
        treeCopy.rightNode = nodeChild.rightNode ?? nodeChild.leftNode;
      } else if (treeCopy.leftNode != null && node === treeCopy.leftNode.value) {
        treeCopy.leftNode = nodeChild.leftNode ?? nodeChild.rightNode;
      }

      return null;
    }
  }

  find(node) {
    let treeCopy = this.root;

    while (!Object.is(treeCopy, null)) {
      if (node > treeCopy.value) {
        treeCopy = treeCopy.rightNode;
      } else if (node < treeCopy.value) {
        treeCopy = treeCopy.leftNode;
      } else if (node === treeCopy.value) {
        return treeCopy;
      }
    }

    return null;
  }

  levelOrder(callback = null) {
    const queueArray = [];
    const values = [];

    let treeCopy = this.root;

    queueArray.push(treeCopy)
    while (treeCopy != null) {
      if (!Object.is(treeCopy.leftNode, null)) {
        queueArray.push(treeCopy.leftNode);
      }
      if (!Object.is(treeCopy.rightNode, null)) {
        queueArray.push(treeCopy.rightNode);
      }
      values.push(queueArray.shift().value);
      treeCopy = queueArray[0];
    }

    if (typeof callback == 'function')
      return callback(values);
    else return values;
    // callback(values)
  }

  inOrder(callback) {
    let treeCopy = this.root;
    const stackArray = [];
    const values = [];
    
    while (treeCopy != null || stackArray.length > 0) {
      while (treeCopy != null) {
        stackArray.push(treeCopy)
        treeCopy = treeCopy.leftNode;
      }
      
      
      treeCopy = stackArray.pop();
      values.push(treeCopy.value);
      treeCopy = treeCopy.rightNode;
    }

    if (typeof callback == 'function')
      return callback(values);
    else return values;
  }

  preOrder(callback) {
    let treeCopy = this.root;
    const stackArray = [];
    const values = [];
    
    while (treeCopy != null || stackArray.length > 0) {
      while (treeCopy != null) {
        stackArray.push(treeCopy)
        values.push(treeCopy.value);
        treeCopy = treeCopy.leftNode;
      }
      
      
      treeCopy = stackArray.pop();
      treeCopy = treeCopy.rightNode;
    }
    
    if (typeof callback == 'function')
      return callback(values);
    else return values;
  }

  postOrder(callback) {
    let treeCopy = this.root;
    const stackArray = [];
    const values = [];
    while (treeCopy != null || stackArray.length > 0) {
      while (treeCopy != null) {
        if (treeCopy.rightNode != null)
          stackArray.push(treeCopy.rightNode);
        stackArray.push(treeCopy);

        treeCopy = treeCopy.leftNode;
      }

      treeCopy = stackArray.pop();
      
      if (stackArray.length === 0) {
        values.push(treeCopy.value);
        break;
      }

      if (treeCopy.rightNode != null && stackArray[stackArray.length-1].value == treeCopy.rightNode.value) {
        stackArray.pop();
        stackArray.push(treeCopy);
        treeCopy = treeCopy.rightNode;
      } else {
        values.push(treeCopy.value);
        treeCopy = null;
      }
    }

    if (typeof callback == 'function')
      return callback(values);
    else return values;
  }

  depth(Node = null) {
    let treeCopy = this.root;
    let queueArray = [];
    let height = 0;

    queueArray.push(treeCopy)
    while (treeCopy != null) {
      let nodeCount = queueArray.length;

      if (nodeCount == 0) {
        return height;
      } else height = height + 1;

      while (nodeCount > 0) {
        treeCopy = queueArray.shift();

        if (treeCopy.value == Node) {
          queueArray = [];
          break;
        }

        if (treeCopy.leftNode != null)
          queueArray.push(treeCopy.leftNode);

        if (treeCopy.rightNode != null)
          queueArray.push(treeCopy.rightNode);

        nodeCount = nodeCount - 1;
      }
    }

  }

  #getHeight(Node = this.root, Needle = null) {
    let queueArray = [];
    let height = 0;

    queueArray.push(Node)
    while (Node != null) {
      let nodeCount = queueArray.length;

      if (nodeCount == 0) {
        return height;
      } else height = height + 1;

      while (nodeCount > 0) {
        Node = queueArray.shift();

        if (Node.value == Needle) {
          height = 1;
        }

        if (Node.leftNode != null)
          queueArray.push(Node.leftNode);

        if (Node.rightNode != null)
          queueArray.push(Node.rightNode);

        nodeCount = nodeCount - 1;
      }
    }
  }

  height(Needle) {
    return this.#getHeight(this.root, Needle);
  }

  isBalanced() {
    const leftNodeHeight = this.#getHeight(this.root.leftNode);
    const rightNodeHeight = this.#getHeight(this.root.rightNode);

    if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) return false;
    return true;
  }

  rebalance() {
    this.buildTree(this.inOrder());
  }

}