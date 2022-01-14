function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  const visited = [];
  const result = [...image];
  const width = image[0]?.length,
    height = image?.length;

  const targetColor: number = image[sr][sc];

  // const fill = (y, x) => {
  //   result[y][x] = newColor;
  //   checkTarget(y, x);
  // };

  const checkTarget = (sr, sc, pr = -1, pc = -1) => {
    if(visited.indexOf([sr,sc]) != -1 ) return;
    visited.push([sr,sc]);
    console.log(sr, sc, pr, pc);
    if (sr + 1 < height && result[sr + 1][sc] == targetColor) {
      const y = sr + 1,
        x = sc;
      // fill(y, x);
      console.log("test1", y, x);

      result[y][x] = newColor;
      if (pr != y || pc != x) checkTarget(y, x, sr, sc);
    }
    // 0                          1   0
    if (sc + 1 < width && result[sr][sc + 1] == targetColor) {
      const y = sr, // 1
        x = sc + 1; // 1
      // fill(y, x);
      console.log("test2", y, x, sr, sc, pr, pc);
      result[y][x] = newColor;
      if (pr != y || pc != x) checkTarget(y, x, sr, sc);
    }
    if (sr - 1 >= 0 && result[sr - 1][sc] == targetColor) {
      const y = sr - 1,
        x = sc;
      // fill(y, x);
      console.log("test3", y, x);
      result[y][x] = newColor;
      if (pr != y || pc != x) checkTarget(y, x, sr, sc);
    }
    if (sc - 1 >= 0 && result[sr][sc - 1] == targetColor) {
      const y = sr,
        x = sc - 1;
      // fill(y, x);
      console.log("test4", y, x);
      result[y][x] = newColor;
      if (pr != y || pc != x) checkTarget(y, x, sr, sc);
    }
  };
  result[sr][sc] = newColor;
  checkTarget(sr, sc);

  return result;
}
