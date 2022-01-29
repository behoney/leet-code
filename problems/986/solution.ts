function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  const result = [];
  for (const a of firstList) {
    for (const b of secondList) {
      if (a[0] > b[1] || b[0] > a[1]) continue;
      result.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
    }
  }

  return result;
}
