function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0] == 1 || grid[grid.length - 1][grid.length - 1] == 1) return -1;


  const maxWidth = grid.length;
  if (maxWidth == 1) {
    return grid[0][0] == 1 ? -1 : 1
  }


  const isAbleToVisit = (i, j) => {
    return i >= 0 && j >= 0 && i < maxWidth && j < maxWidth
  }

  let shortestPath: number = Infinity;
  const dfs = (i = 0, j = 0, path: string[] = []) => {
    // console.log(i, j, path);

    if (i == maxWidth - 1 && j == maxWidth - 1) {
      // console.log("succeed", path.length + 1);
      return path.length + 1
    }

    const thisPath = [i, j].join();

    if (path.includes(thisPath)) return Infinity;

    for (let a = -1; a < 2; a++) {
      for (let b = -1; b < 2; b++) {
        if (a == 0 && b == 0) continue;
        if (isAbleToVisit(i + a, j + b) && grid[i + a][j + b] == 0) {
          shortestPath = Math.min(shortestPath, dfs(i + a, j + b, [...path, thisPath]));
        }
      }
    }
    return shortestPath;
  }


  dfs()


  return shortestPath == Infinity ? -1 : shortestPath;
};