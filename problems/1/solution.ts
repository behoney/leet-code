function twoSum(nums: number[], target: number): number[] {
  if (nums.length == 2) return [0, 1];
  const result: any = {};

  for (let i = 0; i < nums.length; i++) {
    if (result[nums[i]] != undefined) return [i, result[nums[i]]]
    result[target - nums[i]] = i;
  }

  return [];
}
