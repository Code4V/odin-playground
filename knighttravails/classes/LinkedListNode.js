const Node = require('./Node');

module.exports = class LinkedListNode extends Node {
  #nextNode = null;

  constructor(data = null) {
    super(data);
  }

  set next(node){
    this.#nextNode = node;
  }
  
  get next(){
    return this.#nextNode;
  }
}