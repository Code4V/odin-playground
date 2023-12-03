const Node = require('./LinkedListNode');

module.exports = class LinkedList {
  #head = null;
  #size = 0;

  constructor(node = null) {
    if (node != null) {
      this.#head = new Node(node);
    
      this.#size = this.#size + 1;
    }
  }

  #goToLastNode(Node) {
    if (Node.next != null) {
      return this.#goToLastNode(Node.next);
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
    else if (latestNode.next == null) {
      this.#head.next = newNode;
    } else {
      this.#goToLastNode(latestNode).next = newNode
    }
    this.#size = this.#size + 1;
  }

  at(NodeIndex) {
    let tempNode = this.#cloneHeadNode;
    let i = 0;

    while (tempNode != null) {
      if (NodeIndex === i) return tempNode;
      tempNode = tempNode.next;
      i = i + 1;
    }

    return new Error('Index not found!')

  }

  contains(NodeValue) {
    let tempNode = this.#cloneHeadNode;

    while (tempNode != null) {
      if (NodeValue === tempNode.data) return true;
      tempNode = tempNode.next;
    }

    return false;
  }

  find(NodeValue) {
    let tempNode = this.#cloneHeadNode;
    let i = 0;

    while (tempNode != null) {
      if (NodeValue === tempNode.data) return i;
      tempNode = tempNode.next;
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
        const temp = tempNode.next;
        Node.next = temp;
        tempNode.next = Node;

        break;
      };
      tempNode = tempNode.next;
      i = i + 1;
    }

    this.#size = this.#size + 1;

    return null;
  }


  prepend(Node) {
    Node.next = this.#head;
    this.#head = Node;

    this.#size = this.#size + 1;
  }


  pop() {
    let tempNode = this.#head;

    while (tempNode != null) {
      if (tempNode.next.next == null) {
        tempNode.next = null;
        break;
      }
      tempNode = tempNode.next;
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
      this.#head = this.#head.next;

      return null;
    }

    while (tempNode != null) {
      if (Index === i + 1) {
        const temp = tempNode.next.next;
        tempNode.next = null;
        tempNode.next = temp;
        break;
      };
      
      tempNode = tempNode.next;
      i = i + 1;
    }

    this.#size = this.#size - 1;

    return null;
  }

  get #cloneHeadNode() {
    if (this.#head == null) return null; 

    const clonedNode = new Node(this.#head.data);
    clonedNode.next = this.#head.next;

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

    if (tempNode == null) return null;

    while (tempNode != null) {
      result += `( ${tempNode.data} ) -> `;
      tempNode = tempNode.next;
    }

    result += ` ${tempNode} `;

    return result
  }
}