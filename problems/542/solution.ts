function updateMatrix(mat: number[][]): number[][] {
  const maxR = mat.length;
  const maxC = mat[0].length;

  const path = [];

  let max = Infinity;
  const getDistance = (r, c, distance = 0) => {
    if (mat[r][c] == 0) {
      return distance;
    }
    // console.log(r, c, path);
    path.push([r, c]);
    if (r + 1 < maxR && !path.some((e) => e[0] == r + 1 && e[1] == c))
      max = Math.min(max, getDistance(r + 1, c, distance + 1));
    path.length = distance;

    if (c + 1 < maxC && !path.some((e) => e[0] == r && e[1] == c + 1))
      max = Math.min(max, getDistance(r, c + 1, distance + 1));
    path.length = distance;
    if (r - 1 >= 0 && !path.some((e) => e[0] == r - 1 && e[1] == c))
      max = Math.min(max, getDistance(r - 1, c, distance + 1));
    path.length = distance;

    if (c - 1 >= 0 && !path.some((e) => e[0] == r && e[1] == c - 1))
      max = Math.min(max, getDistance(r, c - 1, distance + 1));

    return max;
  };

  const result = [];
  for (let i = 0; i < maxR; i++) {
    const row = [];
    for (let j = 0; j < maxC; j++) {
      max = Infinity;

      path.length = 0;
      row.push(getDistance(i, j));
    }
    result.push(row);
  }

  return result;
}
