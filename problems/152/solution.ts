function maxProduct(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let result = nums[i], acc = result;
    for (let j = 1; i + j < nums.length; j++) {
      acc = acc * nums[i + j]
      result = Math.max(result, acc);
    }
    // console.log(max, result);
    max = Math.max(result, max)
  }

  return max
};