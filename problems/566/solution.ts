function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const flat = mat.flat();
  if (flat.length != r * c || (mat.length == r && mat[0].length == c))
    return mat;

  const result = [];
  const temp = [];

  while (flat.length > 0) {
    temp.push(flat.shift());
    // console.log(temp);
    if (temp.length == c) {
      result.push([...temp]);
      temp.length = 0;
      // console.log("result", result);
    }
  }

  return result;
}
