function diagonalSum(mat: number[][]): number {
  if (mat.length === 1) return mat[0][0]
  let result = 0;
  for (let i = 0; i < mat.length; i++) {
    result += mat[i][i]
    // console.log(mat[i][i]);

  }

  for (let i = 0; i < mat.length; i++) {
    result += mat[i][mat.length - 1 - i]
    // console.log(mat[i][mat.length - 1 - i]);
  }

  if ((mat.length & 1) === 1) {
    const middle = Math.floor(mat.length / 2)
    result -= mat[middle][middle]
    // console.log("reduce", mat[middle][middle]);
  }

  return result;
};