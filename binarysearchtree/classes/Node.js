module.exports = class Node {
  #value = null;
  #leftNode = null;
  #rightNode = null;

  constructor(NodeValue = null) {
    this.#value = NodeValue;
  }

  get value () {
    return this.#value;
  }

  set value (Node) {
    this.#value = Node;
  }

  /**
   * @param {Node | null} Node
   */
  set leftNode (Node) {
    this.#leftNode = Node;
  }

  get leftNode () {
    return this.#leftNode
  }

  /**
   * @param {Node | null} Node
   */
  set rightNode (Node) {
    this.#rightNode = Node;
  }

  get rightNode () {
    return this.#rightNode
  }
};
