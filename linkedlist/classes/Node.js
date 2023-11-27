module.exports = class Node {
  #value = null; 
  #nextNode = null;

  constructor (nodeValue = null) {
    this.#value = nodeValue;
  }

  get value () {
    return this.#value;
  }

  set value (value) {
    this.#value = value;
  }

  set nextNode(Node) {
    this.#nextNode = Node;
  }

  get nextNode() {
    return this.#nextNode;
  }
}
