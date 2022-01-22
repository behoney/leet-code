function solution(maps) {
  if (maps.flat().every((e) => e == 0)) return 0;

  const getAdj = (r, c) => {
    let result = 4;
    if (r + 1 < maps.length && maps[r + 1][c] != 0) result--;
    if (c + 1 < maps[0].length && maps[r][c + 1] != 0) result--;
    if (r - 1 >= 0 && maps[r - 1][c] != 0) result--;
    if (c - 1 >= 0 && maps[r][c - 1] != 0) result--;
    // console.log(r, c, result);

    return result == 0 ? -1 : result;
  };
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++)
      maps[i][j] = maps[i][j] == 0 ? 0 : getAdj(i, j);
  }

  // console.log(maps);

  //get conn for each island
  const getConn = (r, c) => {
    if (r >= maps.length || r < 0 || c >= maps[0].length || c < 0) return 0;
    if (maps[r][c] == 0) return 0;
    // if (maps[r][c] == 0) return 0;
    const val = maps[r][c] == -1 ? 0 : maps[r][c];
    maps[r][c] = 0;
    return (
      val +
      getConn(r + 1, c) +
      getConn(r - 1, c) +
      getConn(r, c + 1) +
      getConn(r, c - 1)
    );
  };

  const area = [];

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      const edges = getConn(i, j);
      if (edges > 0) area.push(edges);
    }
  }
  // console.log(maps, area);

  //max of area[]
  return Math.max(...area);
}
