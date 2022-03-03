function numberOfArithmeticSlices(nums: number[]): number {
  if (nums.length < 3) return 0;

  let result = 0;
  let diff = -Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    diff = nums[i + 1] - nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      if (nums[j + 1] - nums[j] === diff) result++;
      else break;
    }
  }

  return result;
};