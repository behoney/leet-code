function searchRange(nums: number[], target: number): number[] {
  if (!nums.some((e) => e == target)) return [-1, -1];
  const result = [];
  result.push(nums.indexOf(target));
  result.push(nums.length - 1 - nums.reverse().indexOf(target));
  return result;
}
