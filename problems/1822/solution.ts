function arraySign(nums: number[]): number {
  if (nums.includes(0)) return 0;

  const result: number[] = nums.map(e => {
    if (e > 0) return 1;
    else return -1;
  });

  return result.reduce((acc, e) => {
    return acc * e
  }, 1);
};