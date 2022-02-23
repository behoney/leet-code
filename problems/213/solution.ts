function rob(nums: number[]): number {
  if (nums.length <= 3) return Math.max(...nums);

  const getMaxStartAt0 = (idx) => {
    if (idx >= nums.length - 1) return 0;
    return nums[idx] + Math.max(getMaxStartAt0(idx + 2), getMaxStartAt0(idx + 3))
  }

  const getMax = (idx) => {
    if (idx >= nums.length) return 0;
    return nums[idx] + Math.max(getMax(idx + 2), getMax(idx + 3))
  }

  return Math.max(getMaxStartAt0(0), getMax(1), getMax(2));
};