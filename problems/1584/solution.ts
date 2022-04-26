function minCostConnectPoints(points: number[][]): number {
  function getDistance(p1: number[], p2: number[]) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
  }

  if (points.length === 0) return 0;
  if (points.length === 1) return getDistance(points[0], points[1]);

  const minDistances: number[] = new Array(points.length).fill(Infinity);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i != j)
        minDistances[i] = Math.min(minDistances[i], getDistance(points[i], points[j]));
    }
  }
  const sum = minDistances.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...minDistances);
  console.log(sum, min, minDistances);

  return sum - min;
};