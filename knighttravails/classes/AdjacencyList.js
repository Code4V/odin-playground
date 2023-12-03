const LinkedList = require("./LinkedList")

module.exports = class AdjacencyList {
  #adjacencyList = []; 

  constructor() {

  }

  newVertex(vertex = this.#adjacencyList.length) {
    this.#adjacencyList.push(new LinkedList(vertex));
  };

  get showList() {
    return this.#adjacencyList.map(e => {
      return e.toString;
    })
    
  }


}