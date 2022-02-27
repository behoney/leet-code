function maxProfit(prices: number[]): number {
  if (prices.length == 1) return 0;
  let cur = -1,
    prev = -1,
    max = -Infinity,
    globalMax = -Infinity,
    min = Infinity;

  for (const e of prices) {
    if (cur != -1) {
      prev = cur;
      cur = e;
      min = Math.min(prev, min);
      
      const delta = cur - min;
      if (delta > 0) {
        max = Math.max(max, delta);
      }
      globalMax = Math.max(globalMax, max);
    } else cur = e;
    // console.log(cur, prev, max, globalMax, min);
  }

  return globalMax > 0 ? globalMax : 0;
}
