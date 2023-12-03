module.exports = class AdjacencyMatrix {
  #matrixSize;
  #matrix = [];

  constructor(matrixSize = 5){
    this.#matrixSize = matrixSize;
    
    for(let i = 0; i < matrixSize; i = i + 1){
      const newRow = [];
      for (let j = 0; j < matrixSize; j = j + 1){
        newRow.push(0);
      };

      this.#matrix.push(newRow);
    };
  }

  addEdge(src, dst) {
    this.#matrix[src][dst] = 1;
  }

  get size() {
    return this.#matrixSize;
  }

  get matrix() {
    return this.#matrix;
  }
}