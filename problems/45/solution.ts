function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  const minSteps = new Array(nums.length).fill(Infinity);
  minSteps[0] = -1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      if (i + j < nums.length)
        minSteps[i + j] = Math.min(minSteps[i] + 1, minSteps[i + j])
    }
  }
  // console.log(minSteps);


  return minSteps.pop() + 1;
};