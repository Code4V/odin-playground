module.exports = class Node {
  #value = null;
  #leftNode = null;
  #rightNode = null;

  constructor(NodeValue = null) {
    this.#value = NodeValue;
  }

  set leftNode (Node) {
    this.#leftNode = Node;
  }

  set rightNode (Node) {
    this.#rightNode = Node;
  }
};