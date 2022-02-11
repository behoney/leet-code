function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {

    if (matrix[i][0] == target) return true;
    else if (matrix[i][0] > target) {
      return matrix[i == 0 ? 0 : i - 1].indexOf(target) != -1;
    }
    else if (i == matrix.length - 1)
      return matrix[i].indexOf(target) != -1;
  }
}
