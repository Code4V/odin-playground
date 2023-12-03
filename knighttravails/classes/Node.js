module.exports = class Node {
  #data;

  constructor(data = null) {
    this.#data = data;
  }

  set data (node) {
    this.#data = node;
  }

  get data () {
    return this.#data;
  }
}