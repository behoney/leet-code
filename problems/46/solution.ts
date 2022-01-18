function permute(nums: number[]): number[][] {
  if (nums.length == 1) return [[nums[0]]];

  const result = [];

  const generatePermutation = (current: number[], start: number): void => {
    // console.log(current, start);
    if (current.length == nums.length) {
      result.push(current);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const target = nums[(start + i) % nums.length]
      if (current.indexOf(target) == -1)
        generatePermutation(
          [...current, target],
          start + i
        );
    }
  };

  // for (let i = 0; i < nums.length; i++) getPermutation([], i);
  generatePermutation([], 0);

  return result;
}
