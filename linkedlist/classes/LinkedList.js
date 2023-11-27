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
  }

  pop() {
    // const tempNode = this.#cloneHeadNode;
    // let checkNextNode;

    // while (tempNode.nextNode != null) {
    //   checkNextNode = tempNode.nextNode;
    //   tempNode.nextNode = checkNextNode.nextNode;
    // }

    this.#goToLastNode(this.#head) = null;
 



    // console.log(tempNode.nextNode)


    
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
    const tempNode = this.#cloneHeadNode;

    result += `[ ${this.#head.value} ] -> `;

    while (tempNode.nextNode != null) {
      const checkNextNode = tempNode.nextNode;
      result += `[ ${checkNextNode.value} ] -> `;
      tempNode.nextNode = checkNextNode.nextNode;
    }

    result += ` null `;

    return result
  }
}