function maxAreaOfIsland(grid: number[][]): number {
  if (grid.length == 1 && grid[0].length == 1) return grid[0][0];

  const maxR = grid.length;
  const maxC = grid[0].length;
  let result = 0;

  const getArea = (r, c) => {
    // console.log("getArea", r, c, grid[r][c]);
    if (grid[r][c] == 1) {
      grid[r][c] = -1;
      let area = 1;
      if (r + 1 < maxR) area += getArea(r + 1, c);
      if (c + 1 < maxC) area += getArea(r, c + 1);
      if (r - 1 >= 0) area += getArea(r - 1, c);
      if (c - 1 >= 0) area += getArea(r, c - 1);
      return area;
    } else return 0;
  };

  while (grid.flat().some((e) => e == 1)) {
    const flatIndex = grid.flat().indexOf(1);
    const area = getArea(Math.floor(flatIndex / maxC), flatIndex % maxC);
    if (area > result) result = area;
  }

  return result;
}
