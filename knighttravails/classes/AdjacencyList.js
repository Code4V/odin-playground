const LinkedList = require("./LinkedList")

module.exports = class AdjacencyList {
  #adjacencyList = []; 

  constructor() {

  }

  newVertex(vertex = this.#adjacencyList.length) {
    this.#adjacencyList.push(new LinkedList(vertex));

    return this;
  };

  addEdge(src, dst) {
    this.#adjacencyList[src].append(dst);
  }

  get showList() {
    return this.#adjacencyList.map(e => e.toString)
  }

  get edges() {
    const edgeList = [];
    this.#adjacencyList.forEach((e, i) => {
      let currentNode = e.head.next;
      while (currentNode != null) {
        edgeList.push([i, currentNode.data]);
        currentNode = currentNode.next;
      }
    })

    return edgeList;
  }

  get list() {
    return this.#adjacencyList;
  }




}