function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0)
          result.push([nums[i], nums[j], nums[k]].sort((a, b) => a - b));
      }
    }
  }

  // console.log(result);
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i].join() == result[j].join()) {
        result.splice(j, 1);
        // console.log(result);
        j--;
      }
    }
  }

  return result;
}
