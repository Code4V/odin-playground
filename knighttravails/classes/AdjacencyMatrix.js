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

  find(row, col) {
    if (this.#matrix[row] == undefined) return null;
    if (this.#matrix[row][col] == undefined) return null;

    if (this.#matrix[row][col] == 0) return false;

    console.log(this.#matrix[row], 'FOUND')
    return true;
  }

  get size() {
    return this.#matrixSize;
  }z

  get matrix() {
    return this.#matrix;
  }
}