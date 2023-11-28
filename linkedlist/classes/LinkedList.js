const Node = require('./Node');

module.exports = class LinkedList {
  #head = null;
  #size = 0;

  constructor(node) {
    if (node === null || node === undefined) return new Error('Insert at least 1 node as head');
    if (node.constructor.name !== 'Node') return new Error('Data must be a Node');

    this.#head = node;
    // this.#tail = node;
    this.#size = this.#size + 1;
  }

  #goToLastNode(Node) {
    if (Node.nextNode != null) {
      return this.#goToLastNode(Node.nextNode);
    }
    return Node;
  }


  /**
   * @param {(arg0: Node) => void} Node
   */
  append(NodeValue) {
    const newNode = new Node(NodeValue);
    const latestNode = this.#head;
    if (latestNode == null) {
      this.#head = newNode;
    }
    else if (latestNode.nextNode == null) {
      this.#head.nextNode = newNode;
    } else {
      this.#goToLastNode(latestNode).nextNode = newNode
    }
    this.#size = this.#size + 1;
  }

  at(NodeIndex) {
    let tempNode = this.#cloneHeadNode;
    let i = 0;

    while (tempNode != null) {
      if (NodeIndex === i) return tempNode;
      tempNode = tempNode.nextNode;
      i = i + 1;
    }

    return new Error('Index not found!')

  }

  contains(NodeValue) {
    let tempNode = this.#cloneHeadNode;

    while (tempNode != null) {
      if (NodeValue === tempNode.value) return true;
      tempNode = tempNode.nextNode;
    }

    return false;
  }

  find(NodeValue) {
    let tempNode = this.#cloneHeadNode;
    let i = 0;

    while (tempNode != null) {
      if (NodeValue === tempNode.value) return i;
      tempNode = tempNode.nextNode;
      i = i + 1;
    }

    return null;
  }

  insertAt(Node, Index) {
    let tempNode = this.#head;
    let i = 0;

    if (Index > this.#size - 1) {
      return new Error('Index not in Linked List');
    }

    while (tempNode != null) {
      if (Index === i) {
        const temp = tempNode.nextNode;
        Node.nextNode = temp;
        tempNode.nextNode = Node;

        break;
      };
      tempNode = tempNode.nextNode;
      i = i + 1;
    }

    this.#size = this.#size + 1;

    return null;
  }


  prepend(Node) {
    Node.nextNode = this.#head;
    this.#head = Node;

    this.#size = this.#size + 1;
  }


  pop() {
    let tempNode = this.#head;

    while (tempNode != null) {
      if (tempNode.nextNode.nextNode == null) {
        tempNode.nextNode = null;
        break;
      }
      tempNode = tempNode.nextNode;
    }

    this.#size = this.#size - 1;
  }

  removeAt(Index) {
    let tempNode = this.#head;
    let i = 0;

    if (Index > this.#size - 1) {
      return new Error('Index not in Linked List');
    }

    if(Index === 0) {
      this.#head = this.#head.nextNode;

      return null;
    }

    while (tempNode != null) {
      if (Index === i + 1) {
        const temp = tempNode.nextNode.nextNode;
        tempNode.nextNode = null;
        tempNode.nextNode = temp;
        break;
      };
      
      tempNode = tempNode.nextNode;
      i = i + 1;
    }

    this.#size = this.#size - 1;

    return null;
  }

  get #cloneHeadNode() {
    const clonedNode = new Node(this.#head.value);
    clonedNode.nextNode = this.#head.nextNode;

    return clonedNode;
  }

  get head() {
    return this.#head;
  }

  get size() {
    return this.#size;
  }

  get tail() {
    return this.#goToLastNode(this.#head);
  }

  get toString() {
    let result = '';
    let tempNode = this.#cloneHeadNode;

    while (tempNode != null) {
      result += `( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }

    result += ` ${tempNode} `;

    return result
  }
}