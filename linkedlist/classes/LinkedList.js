const Node = require('./Node');

module.exports = class LinkedList {
  #head = null;
  #tail = null;
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
  append(Node) {
    const latestNode = this.#head;
    if (latestNode.nextNode == null) {
      this.#head.nextNode = Node;
    } else {
      this.#goToLastNode(latestNode).nextNode = Node
      this.#tail = Node;
    }
    this.#size = this.#size + 1;
  }

  prepend(Node) {
    const oldHead = this.#head;
    Node.nextNode = oldHead;
    this.#head = Node;
    
    this.#size = this.#size + 1;
  }

  pop() {
    let tempNode = this.#head;

    while (tempNode != null) {
      if(tempNode.nextNode.nextNode == null) {
        tempNode.nextNode = null;
        break;
      }
      tempNode = tempNode.nextNode;
    }

    this.#size = this.#size - 1;
  }
  
  get #cloneHeadNode() {
    const clonedNode = new Node(this.#head.value);
    clonedNode.nextNode = this.#head.nextNode;

    return clonedNode;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
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