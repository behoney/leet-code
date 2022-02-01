function findCircleNum(isConnected: number[][]): number {
  if (isConnected.flat().length == 1) return 1;

  const paths = [];

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i; j < isConnected[0].length; j++) {
      if (isConnected[i][j] == 1) paths.push([i, j])
    }
  }
  // console.log(paths);

  let updated = true;
  while (!updated == false) {
    updated = false;
    for (let i = 0; i < paths.length; i++) {
      for (let j = 0; j < paths.length; j++) {
        if (i == j) continue;
        // console.log(paths[i], paths[j]);
        if (paths[j][0] != undefined && paths[i][paths[i].length - 1] != undefined && paths[j][0] == paths[i][paths[i].length - 1]) {
          updated = true;
          paths[i].push(paths[j][paths[j].length - 1]);
          paths[j].length = 0;
        }
      }
    }
  }

  // console.log(paths);

  return paths.filter(e => e.length != 0).length;

};