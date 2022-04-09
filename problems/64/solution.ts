function minPathSum(grid: number[][]): number {
  const map = [];
  for (let i = 0; i < grid.length; i++) {
    const row = [];
    for (let j = 0; j < grid[0].length; j++) {
      row.push(Infinity);
    }
    map.push(row);
  }

  map[0][0] = grid[0][0];

  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[0].length; j++) {
      let left = Infinity, top = Infinity;

      if (i > 0)
        top = map[i - 1][j];
      if (j > 0)
        left = map[i][j - 1];

      map[i][j] = Math.min(map[i][j], grid[i][j] + Math.min(left, top))

      console.log(i, j, left, top, map);
    }
  }

  return map[map.length - 1][map[0].length - 1];
};