function countOdds(low: number, high: number): number {
  if (low == high) return low & 1

  const lower = low + (low & 1)
  const upper = high - (high & 1)
  const btw = (upper - lower) / 2

  return btw + (low & 1) + (high & 1)
};