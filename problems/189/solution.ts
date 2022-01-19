function rob(nums: number[]): number {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return nums[0] > nums[1] ? nums[0] : nums[1];

  let a = 0,
    b = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2) a = Math.max(a + nums[i], b);
    else b = Math.max(b + nums[i], a);
  }
  
  return Math.max(a, b);
}
