function updateMatrix(mat: number[][]): number[][] {
  const y_max = mat.length;
  const x_max = mat[0].length;

  const result = [];

  for (let i = 0; i < y_max; i++) {
    result.push([]);
    for (let j = 0; j < x_max; j++) {
      result[i].push(Infinity);
    }
  }
  // console.log("result", result);

  for (let i = 0; i < y_max; i++) {
    for (let j = 0; j < x_max; j++) {
      if (mat[i][j] == 0) result[i][j] = 0;
      // console.log("for result", result);
    }
  }

  let distance = 1;
  while (!result.flat().every((e) => e != Infinity)) {
    for (let i = 0; i < y_max; i++) {
      for (let j = 0; j < x_max; j++) {
        // if (result[i][j] != Infinity && mat[i][j] == 1) {
        if (result[i][j] == distance - 1) {
          if (i + 1 < y_max)
            result[i + 1][j] = Math.min(result[i + 1][j], distance);
          if (i - 1 >= 0)
            result[i - 1][j] = Math.min(result[i - 1][j], distance);
          if (j + 1 < x_max)
            result[i][j + 1] = Math.min(result[i][j + 1], distance);
          if (j - 1 >= 0)
            result[i][j - 1] = Math.min(result[i][j - 1], distance);

          // console.log(distance, i, j, result);
        }
      }
    }
    distance++;
  }

  return result;
}
