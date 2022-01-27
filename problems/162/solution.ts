function findPeakElement(nums: number[]): number {
  return nums.indexOf(Math.max(...nums));
}
