const LinkedList = require("./LinkedList")

module.exports = class AdjacencyList {
  #adjacencyList = []; 

  constructor(vertices = 8) {
    for (let i = 0; i < vertices; i = i + 1){
      this.#adjacencyList.push(new LinkedList());
    }
  }

  newVertex(vertex = this.#adjacencyList.length) {
    this.#adjacencyList.push(new LinkedList(vertex));

    return this;
  };

  addEdge(src, dst) {
    this.#adjacencyList[src].append(dst);
  }

  findEdge(row, col) {
    if (this.#adjacencyList[row] == null) return null;

    return this.#adjacencyList[row].contains(col);
  }

  get showList() {
    return this.#adjacencyList.map(e => e.toString)
  }

  get edges() {
    const edgeList = [];
    this.#adjacencyList.forEach((e, i) => {
      let currentNode = e.head;
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