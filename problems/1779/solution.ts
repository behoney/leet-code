function nearestValidPoint(x: number, y: number, points: number[][]): number {
  const targets = points.filter((e, idx) => {
    e.push(idx);
    return e[0] == x || e[1] == y
  }
  )
  if (targets.length === 0) return -1


  const getManhattanDistance = (x1, y1) => {
    return Math.abs(x - x1) + Math.abs(y - y1);
  }

  let smallestDistance = Infinity;
  const groups = [];
  const idxs = [];

  for (const target of targets) {
    const dist = getManhattanDistance(target[0], target[1])

    if (smallestDistance == dist) {
      groups.push(target)
      idxs.push(target[2])
    }

    else if (smallestDistance > dist) {
      groups.length = 0;
      idxs.length = 0;
      smallestDistance = dist;
      groups.push(target)
      idxs.push(target[2])
    }
  }

  idxs.sort((a, b) => a - b)

  return idxs[0];
};