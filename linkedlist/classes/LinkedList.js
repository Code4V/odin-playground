const Node = require('./Node');

module.exports = class LinkedList {
  #head = null; 
  #tail = null;
  #size = 0;
  constructor(node){
    if (node === null || node === undefined) return new Error('Insert at least 1 node as head');
    if (node.constructor.name !== 'Node') return new Error('Data must be a Node');

    this.#head = node;
    // this.#tail = node;
    this.#size = this.#size + 1;
  }

  /**
   * @param {(arg0: Node) => void} newNode
   */
  append(newNode) {
    let checkNextNode;
    const latestNode = this.#head.nextNode
    if (latestNode == null){
      this.#head.nextNode = newNode;
    } else {
      while(Object.is(latestNode.nextNode, null)) {
        checkNextNode = latestNode.nextNode;
        console.log(checkNextNode)
        if(Object.is(checkNextNode, null)) {
          checkNextNode = newNode;
          break;
        } else {
          latestNode.nextNode = latestNode.nextNode;
        }
      }
      // this.#tail = checkNextNode;
    }
    
  }
  
  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail
  }

  #lastChild(Node) {
    console.log('dsa', Node.value, 'asd');
    if(!Object.is(Node.nextNode, null)) {
      return this.#lastChild(Node.nextNode);
    } 
    return Node;
  }

  get toString() {
    let result = ''; 
    let checkNextNode;
    const latestNode = this.#head.nextNode;

    this.#lastChild(this.#head);
   
    result += `( ${this.#head.value} )->`;
    // while (latestNode.nextNode != null) {
    //   console.log(latestNode)
    //   checkNextNode = latestNode.nextNode;
    //   result += `( ${latestNode.value} )->`;
    //   latestNode.nextNode = checkNextNode;
    // }
    // return result
  }
}