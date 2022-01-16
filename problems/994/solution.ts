function orangesRotting(grid: number[][]): number {
  const numOfRow = grid.length;
  const numOfCol = grid[0].length;

  const rottingCells = (i, j) => {
    let changed = false;
    if (i + 1 < numOfRow && grid[i + 1][j] == 1) {
      grid[i + 1][j] = 3;
      changed = true;
    }
    if (j + 1 < numOfCol && grid[i][j + 1] == 1) {
      grid[i][j + 1] = 3;
      changed = true;
    }
    if (i - 1 >= 0 && grid[i - 1][j] == 1) {
      grid[i - 1][j] = 3;
      changed = true;
    }
    if (j - 1 >= 0 && grid[i][j - 1] == 1) {
      grid[i][j - 1] = 3;
      changed = true;
    }
    // console.log(changed);
    return changed;
  };

  const update = () => {
    for (let i = 0; i < numOfRow; i++) {
      for (let j = 0; j < numOfCol; j++) {
        if (grid[i][j] == 3) grid[i][j] = 2;
      }
    }
  };

  const getMinutes = (iteration = 0, possible = true) => {
    if (!possible) return -1;

    // console.log(iteration, grid);
    update();
    if (grid.flat().every((e) => e != 1)) {
      // console.log("result: ", possible ? iteration : -1, grid);
      return iteration;
    }
    let changed = false;
    for (let i = 0; i < numOfRow; i++) {
      for (let j = 0; j < numOfCol; j++) {
        // console.log("forloop", i, j, grid[i][j], grid[i][j] == 2);
        if (grid[i][j] == 2) changed = rottingCells(i, j) || changed;
      }
    }

    return getMinutes(iteration + 1, changed);
  };

  return getMinutes();
}
