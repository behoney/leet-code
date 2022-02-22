function minCostClimbingStairs(cost: number[]): number {
  if (cost.length <= 2) return Math.min(...cost)

  // 2 2 1 0

  const getMinCost = (idx) => {
    if (idx >= cost.length - 2) return cost[idx];

    return cost[idx] + Math.min(
      getMinCost(idx + 1),
      getMinCost(idx + 2));
  }

  return Math.min(getMinCost(0), getMinCost(1))
};