function matrixBlockSum(mat: number[][], k: number): number[][] {
  const sumOfK = (i, j) => {
    let sum = 0;
    for (let r = i - k; r <= i + k; r++) {
      for (let c = j - k; c <= j + k; c++) {

        if (r >= 0 && r < mat.length && c >= 0 && c < mat[0].length) {
          sum += mat[r][c];
        }
      }
    }

    // console.log(i, j, sum);
    return sum;
  }

  const result = [];
  for (let i = 0; i < mat.length; i++) {
    const row = new Array(mat[0].length).fill(0)
    result.push(row)
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[0].length; j++) {
      result[i][j] = sumOfK(i, j);
      // console.log(result);
    }
  }


  return result;
};


