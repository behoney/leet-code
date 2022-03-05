function deleteAndEarn(nums: number[]): number {
  const MAX_NUMBER = 10001
  const sums = new Array(MAX_NUMBER).fill(0);

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sums[nums[i]] += nums[i];
  }

  for (let i = 2; i < MAX_NUMBER; i++) {
    sums[i] = Math.max(sums[i - 1], sums[i - 2] + sums[i]);
  }
  

  return sums[MAX_NUMBER - 1]
};