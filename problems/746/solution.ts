function minCostClimbingStairs(cost: number[]): number {
  if (cost.length <= 2) return Math.min(...cost)

  // 2 2 1 0
  // mincost(i) = Math.min(mincost(i-1), mincost(i-2))

  const dp = new Array(cost.length).fill(0);

  const getMinCost = (idx) => {
    if (idx < 0) return 0;
    if (idx == 0 || idx == 1) return cost[idx];

    if (dp[idx] != 0) return dp[idx];

    dp[idx] = cost[idx] + Math.min(
      getMinCost(idx - 1),
      getMinCost(idx - 2)
    );

    return dp[idx]
  }

  return Math.min(getMinCost(cost.length - 1), getMinCost(cost.length - 2))
};