function sortArrayByParity(nums: number[]): number[] {
  const odds = nums.filter(e => 1 === (e & 0x1))
  const evens = nums.filter(e => 0 === (e & 0x1))

  return [...evens, ...odds]
};