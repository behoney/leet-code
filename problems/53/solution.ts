function maxSubArray(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  if (nums.every((e) => e >= 0)) return nums.reduce((a, b) => a + b);

  let max = -Infinity,
    globalMax = -Infinity;
  for (const e of nums) {
    max = Math.max(e, e + max);
    globalMax = Math.max(max, globalMax);
  }

  return globalMax;
}
