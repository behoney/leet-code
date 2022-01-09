function sortedSquares(nums: number[]): number[] {
  return nums.map((e) => e * e).sort((a, b) => a - b);
}
